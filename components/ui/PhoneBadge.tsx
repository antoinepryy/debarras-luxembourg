import Link from "next/link";

interface PhoneBadgeProps {
  phone: string;
  displayPhone?: string;
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

export function PhoneBadge({
  phone,
  displayPhone,
  variant = "primary",
  size = "md",
  showIcon = true,
  className = "",
}: PhoneBadgeProps) {
  const cleanPhone = phone.replace(/\s/g, "");
  const display = displayPhone || phone;

  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)]",
    light: "bg-white text-[var(--color-primary)] hover:bg-gray-100 border border-[var(--color-primary)]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Link
      href={`tel:${cleanPhone}`}
      className={`inline-flex items-center gap-2 rounded-md font-medium transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {display}
    </Link>
  );
}
