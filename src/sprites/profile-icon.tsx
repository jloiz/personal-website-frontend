import GlowEffect from "./effects/glow-effect";

interface PropTypes {
  colour: string;
}

export default function ProfileIcon({ colour }: PropTypes) {
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </g>
    </svg>
  );
}

