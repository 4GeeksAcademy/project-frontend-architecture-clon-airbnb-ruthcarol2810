"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const FAVORITES_STORAGE_KEY = "airbnb-session-favorites";
const FAVORITES_EVENT = "airbnb:favorites-change";

interface FavoritesContextValue {
  favoriteIds: string[];
  toggleFavorite: (listingId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

const getFavoritesSnapshot = () => {
  try {
    return window.sessionStorage.getItem(FAVORITES_STORAGE_KEY);
  } catch {
    return null;
  }
};

const getServerSnapshot = () => null;

const subscribeToFavorites = (onStoreChange: () => void) => {
  window.addEventListener(FAVORITES_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(FAVORITES_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
};

const parseFavorites = (snapshot: string | null) => {
  if (!snapshot) return [];

  try {
    const parsedFavorites: unknown = JSON.parse(snapshot);
    return Array.isArray(parsedFavorites) && parsedFavorites.every((id) => typeof id === "string")
      ? parsedFavorites
      : [];
  } catch {
    return [];
  }
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const snapshot = useSyncExternalStore(subscribeToFavorites, getFavoritesSnapshot, getServerSnapshot);
  const favoriteIds = parseFavorites(snapshot);

  const toggleFavorite = useCallback((listingId: string) => {
    const currentIds = parseFavorites(getFavoritesSnapshot());
    const nextIds = currentIds.includes(listingId)
      ? currentIds.filter((id) => id !== listingId)
      : [...currentIds, listingId];

    try {
      window.sessionStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(nextIds));
    } catch {
      // If sessionStorage is unavailable, leave the favorite state unchanged.
      return;
    }

    window.dispatchEvent(new Event(FAVORITES_EVENT));
  }, []);

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe utilizarse dentro de FavoritesProvider");
  }
  return context;
};
