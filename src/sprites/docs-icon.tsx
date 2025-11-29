import GlowEffect from "./effects/glow-effect";

interface PropTypes {
  colour: string;
}

export default function DocsIcon({ colour }: PropTypes) {
  // This is a customised version of the lucide-react icon

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      style={{ overflow: "visible" }}
      stroke={colour}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-code-xml-icon lucide-code-xml"
    >
      <GlowEffect colour={colour} />

      <g filter="url(#outerGlow)">
        <path d="M12 7v14" />
        <path d="M16 12h2" />
        <path d="M16 8h2" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        <path d="M6 12h2" />
        <path d="M6 8h2" />
      </g>
    </svg>
  );
}

