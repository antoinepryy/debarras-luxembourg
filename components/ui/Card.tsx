import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  image: string;
  href: string;
  className?: string;
}

export function Card({ title, description, image, href, className = "" }: CardProps) {
  return (
    <Link
      href={href}
      className={`group block bg-white rounded-lg overflow-hidden shadow-md card-hover ${className}`}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-[var(--color-text-muted)] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
