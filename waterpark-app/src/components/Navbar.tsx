import { useState, useEffect } from 'react';
import TridentLogo from './common/TridentLogo';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Rides', href: '#rides' },
  { name: 'Amenities', href: '#experience' },
  { name: 'Tickets', href: '#pricing' },
  { name: 'Visit', href: '#visit' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      if (drawerOpen) {
        setDrawerOpen(false);
        document.body.classList.remove('drawer-open');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawerOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.classList.remove('drawer-open');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-[rgba(2,11,24,0.85)] backdrop-blur-[20px] border-b border-[rgba(0,212,255,0.1)] py-2' : 'bg-transparent py-4 border-b border-transparent'}`}
      >
        <div className="section-inner flex items-center justify-between">
          
          {/* Logo Area */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--cyan)] bg-[var(--deep)] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:shadow-[0_0_10px_var(--cyan)]">
              <TridentLogo width="24" height="24" />
            </div>
            <div className="flex flex-col">
              <span className="display-font text-white text-lg md:text-xl tracking-wider group-hover:text-[var(--cyan)] transition-colors">ATLANTTIS</span>
              <span className="font-light text-[var(--aqua)] text-[0.6rem] md:text-xs tracking-[0.1em] uppercase">Bihta &middot; Patna &middot; Water Park</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`heading-font text-sm uppercase tracking-wider transition-colors hover:text-[var(--cyan)] ${activeSection === link.href.substring(1) ? 'text-[var(--cyan)] font-semibold' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Theme Options */}
          <div className="hidden lg:flex items-center gap-6">
            <ThemeToggle />
            <a href="tel:+919599722391" className="btn-p">
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[102]" 
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${drawerOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${drawerOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${drawerOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[98] backdrop-blur-sm transition-opacity duration-300 lg:hidden ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeDrawer}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[var(--deep)] z-[101] border-l border-[rgba(0,212,255,0.1)] shadow-2xl transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col lg:hidden ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="pt-24 px-6 flex flex-col gap-6 flex-grow">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`heading-font text-xl border-b border-[rgba(255,255,255,0.05)] pb-4 transition-colors ${activeSection === link.href.substring(1) ? 'text-[var(--cyan)]' : 'text-white'}`}
              onClick={closeDrawer}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="p-6 border-t border-black/10 dark:border-white/5 mt-auto bg-[var(--deep)] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] dark:shadow-none flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <p className="text-[var(--muted)] text-sm font-medium">Appearance</p>
            <ThemeToggle />
          </div>
          <a href="tel:+919599722391" className="btn-p w-full justify-center text-lg py-3 shadow-md" onClick={closeDrawer}>
            Call: +91 9599722391
          </a>
        </div>
      </div>
    </>
  );
}
