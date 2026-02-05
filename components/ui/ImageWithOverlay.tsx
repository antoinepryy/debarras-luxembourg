import Image from "next/image";
import { ReactNode } from "react";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  overlay?: ReactNode;
  overlayPosition?: "bottom" | "center" | "full";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ImageWithOverlay({
  src,
  alt,
  overlay,
  overlayPosition = "bottom",
  className = "",
  imageClassName = "",
  priority = false,
}: ImageWithOverlayProps) {
  const overlayPositionStyles = {
    bottom: "bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent",
    center: "inset-0 flex items-center justify-center bg-black/40",
    full: "inset-0 bg-black/40",
  };

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay && (
        <div
          className={`absolute transition-opacity duration-300 ${overlayPositionStyles[overlayPosition]}`}
        >
          {overlay}
        </div>
      )}
    </div>
  );
}
