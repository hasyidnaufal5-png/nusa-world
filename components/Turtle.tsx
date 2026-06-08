// Maskot penyu NusaWorld sebagai SVG.
// Warna mengikuti CLAUDE.md (token Tailwind): badan/kepala turtle-body,
// sirip/kaki turtle-fin, mata turtle-eye, pipi turtle-cheek.
// `size` mengatur lebar & tinggi (px); viewBox tetap agar proporsi terjaga.
type TurtleProps = {
  size?: number;
  className?: string;
  /** Teks alternatif untuk pembaca layar. */
  title?: string;
};

export default function Turtle({
  size = 96,
  className = "",
  title = "Maskot penyu NusaWorld",
}: TurtleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>

      {/* Sirip & kaki */}
      <g className="fill-turtle-fin">
        <ellipse cx="24" cy="62" rx="13" ry="9" transform="rotate(-28 24 62)" />
        <ellipse cx="96" cy="62" rx="13" ry="9" transform="rotate(28 96 62)" />
        <ellipse cx="34" cy="101" rx="11" ry="8" transform="rotate(24 34 101)" />
        <ellipse cx="86" cy="101" rx="11" ry="8" transform="rotate(-24 86 101)" />
      </g>

      {/* Tempurung / badan */}
      <ellipse cx="60" cy="74" rx="40" ry="33" className="fill-turtle-body" />

      {/* Pola tempurung */}
      <g
        className="fill-none stroke-turtle-fin"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path d="M60 48 V104" />
        <path d="M22 74 H98" />
        <circle cx="60" cy="74" r="13" />
      </g>

      {/* Kepala */}
      <circle cx="60" cy="34" r="20" className="fill-turtle-body" />

      {/* Pipi merona */}
      <g className="fill-turtle-cheek">
        <circle cx="44" cy="41" r="5" />
        <circle cx="76" cy="41" r="5" />
      </g>

      {/* Mata ramah (dengan kilau putih) */}
      <g className="fill-turtle-eye">
        <circle cx="52" cy="32" r="5" />
        <circle cx="68" cy="32" r="5" />
      </g>
      <g className="fill-white">
        <circle cx="53.6" cy="30.4" r="1.7" />
        <circle cx="69.6" cy="30.4" r="1.7" />
      </g>

      {/* Senyum */}
      <path
        d="M53 42 Q60 48 67 42"
        className="fill-none stroke-turtle-eye"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
