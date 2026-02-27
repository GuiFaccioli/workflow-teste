import { MouseEvent } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  label,
  variant = "primary",
  onClick,
  className,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel ?? label}
      className={className}
      data-variant={variant}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
