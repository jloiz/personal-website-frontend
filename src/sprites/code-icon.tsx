import GlowEffect from "./effects/glow-effect";

interface PropTypes {
  colour: string;
}

export default function CodeIcon({colour} : PropTypes ) {
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

      <GlowEffect colour={colour}/>

      <g filter="url(#outerGlow)">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </g>
    </svg>
  );
}
