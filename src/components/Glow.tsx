export default function Glow() {
  return (
    <svg width="0" height="0" id="glow__svg_">
      <filter id="glow">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="20"
          result="glow__svg__blur"
          id="glow__svg__res"
        />
        <feColorMatrix
          type="saturate"
          in="glow__svg__blur"
          values="2"
          result="glow__svg__sat"
        />
        <feBlend
          id="glow__svg__resBlend"
          in="SourceGraphic"
          in2="glow__svg__sat"
        />
      </filter>
    </svg>
  );
}
