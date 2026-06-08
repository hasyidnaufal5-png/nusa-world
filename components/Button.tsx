import type { ButtonHTMLAttributes } from "react";

// Tombol playful: membulat penuh, tebal, ada respon saat ditekan.
// variant: "primary" (ocean) | "secondary" (garis ocean). size: "md" | "lg".
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-extrabold transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-ocean text-white shadow-sm hover:bg-night focus-visible:outline-ocean",
  secondary:
    "bg-white text-ocean ring-2 ring-inset ring-ocean hover:bg-ocean/5 focus-visible:outline-ocean",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
