import type { Review } from "@/types/listing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

export const ReviewsSection = ({ rating, reviewCount, reviews }: ReviewsSectionProps) => (
  <section id="reviews" aria-labelledby="reviews-heading" className="border-b py-7"><h2 id="reviews-heading" className="mb-5 text-xl font-semibold"><FontAwesomeIcon icon={faStar} aria-hidden="true" className="mr-1" />{rating.toFixed(2)} · {reviewCount} reseñas</h2>{reviews.length ? <div className="grid gap-6 md:grid-cols-2">{reviews.map((review) => <article key={review.id}><h3 className="font-semibold">{review.author}</h3><p className="mt-1 text-sm text-neutral-500"><FontAwesomeIcon icon={faStar} aria-hidden="true" className="mr-1" />{review.rating} · {review.date}</p><p className="mt-3 text-sm leading-6 text-neutral-700">{review.comment}</p></article>)}</div> : <p className="text-neutral-600">Aún no hay reseñas.</p>}</section>
);
