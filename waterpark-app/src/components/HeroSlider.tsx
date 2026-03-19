import { useState, useEffect, useRef, useCallback } from 'react';
import Bubbles from './common/Bubbles';
import HoloRays from './common/HoloRays';

const SLIDES = [
  {
    theme: 'Welcome',
    headline: 'THE ATLANTTIS',
    eyebrow: 'Welcome to the Legend',
    body: 'Dive into an unforgettable underwater adventure at Bihar’s finest water park.',
    colorAccent: 'var(--cyan)',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.15), var(--abyss))',
    primaryCTA: { label: 'Book Now', href: 'tel:+919599722391' },
    secondaryCTA: { label: 'Explore Rides', href: '#rides' }
  },
  {
    theme: 'Wave Pool',
    headline: 'FEEL THE SURGE',
    eyebrow: 'Giant Wave Pool',
    body: 'Catch the largest waves and feel the ocean’s rhythm deep inside our custom wave pool.',
    colorAccent: 'var(--aqua)',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(0,255,204,0.15), var(--abyss))',
    primaryCTA: { label: 'Explore Wave Pool', href: '#rides' },
    secondaryCTA: { label: 'Call to Book', href: 'tel:+919599722391' }
  },
  {
    theme: 'Rides & Thrills',
    headline: '20+ RIDES & THRILLS',
    eyebrow: 'Adrenaline Awaits',
    body: 'From extreme Thunder Drops to lazy river cruising, there is a thrill for every age.',
    colorAccent: 'var(--coral)',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(255,107,107,0.15), var(--abyss))',
    primaryCTA: { label: 'Discover All Rides', href: '#rides' },
    secondaryCTA: { label: 'See Ticket Prices', href: '#pricing' }
  },
  {
    theme: 'Plan Your Visit',
    headline: 'PLAN YOUR VISIT',
    eyebrow: 'Always Open · Always Fresh',
    subheading: '8:00 AM – 5:00 PM · Open 7 Days a Week',
    body: '',
    colorAccent: 'var(--gold)',
    bgGradient: 'radial-gradient(circle at 50% 50%, rgba(255,209,102,0.15), var(--abyss))',
    hasPricing: true,
    primaryCTA: { label: 'Book Now', href: 'tel:+919599722391', gold: true },
    secondaryCTA: { label: 'Get Directions', href: 'https://maps.google.com/?q=The+Atlanttis+Water+Park+Bihta' }
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, nextSlide, currentSlide]); // currentSlide dependency needed to reset interval

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <section 
      className="relative w-full h-[100svh] overflow-hidden bg-[var(--abyss)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero slider"
      role="group"
      aria-roledescription="carousel"
    >
      {/* Slider Track */}
      <div 
        className="flex w-[400%] h-full"
        style={{
          transform: `translateX(-${currentSlide * 25}%)`,
          transition: 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)',
          willChange: 'transform'
        }}
      >
        {SLIDES.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div key={idx} className="relative w-[25%] h-full flex items-center justify-center overflow-hidden">
              {/* Background Ken Burns */}
              <div 
                className="absolute inset-0 transition-transform duration-[6s] ease-out will-change-transform z-0"
                style={{
                  background: slide.bgGradient,
                  transform: isActive ? 'scale(1)' : 'scale(1.08)'
                }}
              >
                {/* Blueprint Grid */}
                <div 
                  className="absolute inset-0 bg-[length:40px_40px] opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(${slide.colorAccent} 1px, transparent 1px)`
                  }}
                />
              </div>

              {isActive && <HoloRays />}
              {isActive && <Bubbles count={40} />}

              {/* Content */}
              <div className="section-inner relative z-10 w-full flex flex-col items-center justify-center text-center mt-12 md:mt-20">
                <div 
                  className="flex flex-col items-center max-w-4xl"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    transitionDelay: isActive ? '0.3s' : '0s'
                  }}
                >
                  <span 
                    className="heading-font text-sm md:text-lg mb-4 tracking-[0.2em] font-bold"
                    style={{ color: slide.colorAccent }}
                  >
                    {slide.eyebrow}
                  </span>
                  
                  <h2 
                    className="display-font text-white font-bold leading-tight drop-shadow-lg mb-6"
                    style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', textShadow: `0 0 20px ${slide.colorAccent}40` }}
                  >
                    {slide.headline}
                  </h2>
                  
                  {slide.subheading && (
                    <h3 className="text-xl md:text-2xl font-light text-white opacity-90 mb-6 drop-shadow-md">
                      {slide.subheading}
                    </h3>
                  )}
                  
                  {slide.body && (
                    <p className="font-light text-[var(--muted)] text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                      {slide.body}
                    </p>
                  )}

                  {slide.hasPricing && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-3xl border-y border-[rgba(255,209,102,0.2)] py-6">
                      <div className="bg-[rgba(4,22,43,0.6)] backdrop-blur-md rounded-2xl p-4 border border-[rgba(255,255,255,0.05)] text-center">
                        <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Weekday</p>
                        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--muted)]">₹499</p>
                      </div>
                      <div className="bg-[rgba(255,209,102,0.1)] backdrop-blur-md rounded-2xl p-4 border-2 border-[var(--gold)] text-center shadow-[0_0_20px_rgba(255,209,102,0.2)] transform scale-105">
                        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[var(--gold)] text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Hot</div>
                        <p className="text-xs text-[var(--gold)] uppercase tracking-wider mb-1">Weekend & Holidays</p>
                        <p className="text-2xl font-bold text-white drop-shadow-md">₹699</p>
                      </div>
                      <div className="bg-[rgba(4,22,43,0.6)] backdrop-blur-md rounded-2xl p-4 border border-[rgba(255,255,255,0.05)] text-center">
                        <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Group (20+)</p>
                        <p className="text-xl mt-1 font-bold text-white">Call Us</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
                    <a 
                      href={slide.primaryCTA.href} 
                      className="btn-p shadow-xl"
                      style={slide.primaryCTA.gold ? { background: 'var(--gold)', color: 'black' } : {}}
                    >
                      {slide.primaryCTA.label}
                    </a>
                    <a href={slide.secondaryCTA.href} className="btn-o bg-black/20 backdrop-blur-md">
                      {slide.secondaryCTA.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full bg-[rgba(2,11,24,0.4)] backdrop-blur-md border border-[var(--cyan)] flex items-center justify-center text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-black hover:shadow-[0_0_15px_var(--cyan)] transition-all z-20 focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full bg-[rgba(2,11,24,0.4)] backdrop-blur-md border border-[var(--cyan)] flex items-center justify-center text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-black hover:shadow-[0_0_15px_var(--cyan)] transition-all z-20 focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slide Controls Bottom Bar */}
      <div className="absolute bottom-16 md:bottom-20 left-0 w-full px-6 md:px-12 flex justify-between items-end z-20 pointer-events-none">
        
        {/* Navigation Dots */}
        <div className="flex gap-2 pointer-events-auto" role="tablist">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={currentSlide === idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? 'w-8 bg-white shadow-[0_0_8px_white]' 
                  : 'w-2 md:w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-white/60 font-mono tracking-widest text-sm" aria-live="polite" aria-atomic="true">
          <span className="text-white font-bold">0{currentSlide + 1}</span> / 0{SLIDES.length}
        </div>
      </div>

      {/* Auto-play Progress Bar across very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/40 z-30">
        <div 
          key={currentSlide} // Key change forces re-render and re-animation
          className="h-full bg-gradient-to-r from-[var(--cyan)] to-[var(--aqua)] shadow-[0_0_10px_var(--cyan)] transition-none"
          style={{
            animation: isHovered ? 'none' : 'ldBar 5s linear forwards',
            width: isHovered ? '0%' : 'auto'
          }}
        />
      </div>

      {/* SVG Wave Separator overlapping the section below */}
      <div className="absolute bottom-[-2px] left-0 w-full z-10 pointer-events-none w-[100vw] overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto drop-shadow-lg" preserveAspectRatio="none">
          <path fill="var(--deep)" fillOpacity="1" d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

    </section>
  );
}
