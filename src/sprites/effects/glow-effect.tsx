interface PropTypes {
  colour: string;
}

export default function GlowEffect({colour}: PropTypes) {
  return(
    <defs>
      <filter id="outerGlow" x="-100%" y="-50%" width="300%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feFlood floodColor={colour} />
        <feComposite in2="blur" operator="in" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}