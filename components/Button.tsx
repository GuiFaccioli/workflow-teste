import { MouseEvent } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function Button({
  label,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      className={className}
      data-variant={variant}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
