"use client";

import { Container } from "@/components/ui";

const RATING = 4.5;
const REVIEW_COUNT = 47;

function StarIcon({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (half) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="#FBBC04" />
            <stop offset="50%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfStar)"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        fill={filled ? "#FBBC04" : "#D1D5DB"}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<StarIcon key={i} filled />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarIcon key={i} half />);
    } else {
      stars.push(<StarIcon key={i} />);
    }
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

export function GoogleReviews() {
  return (
    <section className="py-5 bg-white border-b border-gray-100">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {/* Google logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC04" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Google</span>
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-gray-200 hidden sm:block" />

          {/* Stars + Rating */}
          <div className="flex items-center gap-2.5">
            <Stars rating={RATING} />
            <span className="text-sm font-semibold text-gray-800">{RATING}/5</span>
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-gray-200 hidden sm:block" />

          {/* Review count */}
          <span className="text-sm text-gray-500">
            Basé sur <span className="font-medium text-gray-700">{REVIEW_COUNT} avis</span> clients
          </span>
        </div>
      </Container>
    </section>
  );
}
