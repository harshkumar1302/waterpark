export default function TridentLogo({ className = "", width = "120", height = "120", withGlow = false }: { className?: string, width?: string, height?: string, withGlow?: boolean }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width={width} 
      height={height} 
      className={className}
      aria-hidden="true"
    >
      <defs>
        {withGlow && (
          <filter id="trident-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>
      <g filter={withGlow ? "url(#trident-glow)" : undefined}>
        {/* Base Wave Motifs */}
        <path d="M 30,80 Q 50,70 70,80" fill="none" stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" />
        <path d="M 40,85 Q 50,78 60,85" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
        
        {/* Base Gold Orb */}
        <circle cx="50" cy="72" r="5" fill="#ffd166" />
        
        {/* Main Center Prong */}
        <path d="M 50,72 L 50,15 L 45,25 M 50,15 L 55,25" fill="none" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Left Side Prong */}
        <path d="M 46,71 Q 25,60 25,35 L 20,40 M 25,35 L 30,40" fill="none" stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Right Side Prong */}
        <path d="M 54,71 Q 75,60 75,35 L 70,40 M 75,35 L 80,40" fill="none" stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Handle */}
        <line x1="50" y1="77" x2="50" y2="95" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
