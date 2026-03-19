import TridentLogo from './common/TridentLogo';
import Bubbles from './common/Bubbles';

export default function About() {
  const features = [
    { icon: '🌊', text: 'Giant Wave Pool' },
    { icon: '⚡', text: 'High-Speed Slides' },
    { icon: '👨‍👩‍👧‍👦', text: 'Family Zones' },
    { icon: '👶', text: 'Kids\' Paradise' },
    { icon: '🍔', text: 'Food & Refreshments' },
    { icon: '🛟', text: 'Safety First' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[var(--abyss)]">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        
        {/* Visual Left */}
        <div className="rv d1 relative flex justify-center items-center order-2 lg:order-1">
          {/* Circular Frame */}
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full bg-[rgba(0,212,255,0.03)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,212,255,0.05)]">
            
            {/* Halo Rings */}
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-[var(--cyan)] opacity-30 animate-[halospin_25s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border border-[var(--aqua)] opacity-10 animate-[haloInner_30s_linear_infinite]" />
            
            {/* Bubbles restricted to inner circle */}
            <div className="absolute inset-0 rounded-full overflow-hidden mask-image-radial z-0">
               <Bubbles count={8} />
            </div>
            
            {/* Large Trident */}
            <div className="relative z-10 animate-[tridentFloat_4s_ease-in-out_infinite] drop-shadow-sm">
              <TridentLogo width="240" height="240" withGlow={false} />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 right-0 md:bottom-4 md:-right-8 bg-gradient-to-r from-[var(--cyan)] to-[#0088cc] px-6 py-3 rounded-2xl shadow-lg border border-white/20 transform rotate-[-5deg] hover:rotate-0 transition-transform z-20">
              <span className="block text-white font-bold text-sm md:text-base leading-tight">#1 Themed Park</span>
              <span className="block text-[var(--abyss)] font-bold text-xs uppercase tracking-wider">in Bihar</span>
            </div>
          </div>
        </div>

        {/* Text Right */}
        <div className="order-1 lg:order-2">
          <span className="rv d1 block heading-font text-[var(--cyan)] tracking-[3px] uppercase text-sm font-semibold mb-3">Our Story</span>
          <h2 className="rv d2 display-font text-4xl md:text-5xl lg:text-6xl text-[var(--white)] mb-6 drop-shadow-sm leading-tight">
            Where Ancient Atlantis <br />
            <span className="text-[var(--gold)]">Meets Modern Thrills</span>
          </h2>
          
          <p className="rv d3 text-[var(--muted)] text-base md:text-lg mb-4 font-light leading-relaxed">
            Welcome to <strong className="text-[var(--white)] font-semibold">The Atlanttis Water Park</strong>, Bihta's premier aquatic destination. Inspired by the sunken legend of Atlantis, we offer an immersive adventure combining ancient mythology with world-class water attractions.
          </p>
          <p className="rv d3 text-[var(--muted)] text-base md:text-lg mb-8 font-light leading-relaxed">
            Whether you are looking to conquer extreme slides, relax in the lazy river, or create family memories in our vast interactive wave pool, The Atlanttis is your gateway to endless aquatic joy. Always open, always fresh.
          </p>

          <div className="rv d4 grid grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-3 bg-[var(--deep)] border border-[rgba(255,255,255,0.05)] rounded-full px-4 py-2 shadow-sm hover:border-[var(--aqua)] transition-colors hover:bg-[rgba(0,255,204,0.05)]">
                <span className="text-xl">{feat.icon}</span>
                <span className="text-sm md:text-base font-medium text-[var(--white)]">{feat.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
