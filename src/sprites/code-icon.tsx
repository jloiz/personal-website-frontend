export default function CodeIcon() {
  // This is a customised version of the lucide-react icon

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      style={{ overflow: "visible" }}
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-code-xml-icon lucide-code-xml"
    >
      {/*Define ombre effect*/}
      <defs>
        <filter id="outerGlow" x="-100%" y="-50%" width="300%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.75" result="blur" />
          <feFlood floodColor={"currentColor"} />
          <feComposite in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#outerGlow)">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </g>
    </svg>
  );
}
