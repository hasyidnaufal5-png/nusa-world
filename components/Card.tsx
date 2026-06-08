import type { HTMLAttributes } from "react";

// Kartu konten: latar putih, sudut membulat, bayangan & border halus.
type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
