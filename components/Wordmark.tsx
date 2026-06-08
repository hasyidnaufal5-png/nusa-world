// Wordmark "NusaWorld": "Nusa" biru ocean, "World" hijau island.
// Komponen kecil & reusable; ukuran diatur dari luar lewat className.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      <span className="text-ocean">Nusa</span>
      <span className="text-island">World</span>
    </span>
  );
}
