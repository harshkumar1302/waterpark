import TridentLogo from './common/TridentLogo';
import { Instagram, Facebook, Youtube, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020b18] relative overflow-hidden text-slate-300 pb-16">

      {/* Top Accent Line removed as per user request */}

      <div className="section-inner pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Column 1: Brand (4/12) */}
          <div className="lg:col-span-4 rv d1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--cyan)] to-[var(--aqua)] p-[1px]">
                <div className="w-full h-full rounded-2xl bg-[#020b18] flex items-center justify-center">
                  <TridentLogo width="28" height="28" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="display-font text-white text-2xl tracking-[0.1em]">ATLANTTIS</span>
                <span className="font-heading text-[var(--aqua)] text-[0.7rem] tracking-[0.2em] uppercase font-bold">Bihta &middot; Patna</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 max-w-sm">
              Bihar's premier water park destination. We combine ancient myth with modern thrills to create the ultimate family escape. Experience the Legend of the Deep.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Facebook', icon: <Facebook size={18} />, href: 'https://facebook.com' },
                { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com' },
                { name: 'YouTube', icon: <Youtube size={18} />, href: 'https://youtube.com' },
                { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
                { name: 'WhatsApp', icon: <MessageCircle size={18} />, href: 'https://wa.me/919599722391' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-[var(--cyan)] hover:bg-[var(--cyan)]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation (2/12) */}
          <div className="lg:col-span-2 rv d2">
            <h4 className="text-white font-bold heading-font uppercase tracking-[2px] mb-8 text-xs">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 hover:text-[var(--cyan)] transition-colors text-sm font-light link-underline">The Park</a></li>
              <li><a href="#rides" className="text-slate-400 hover:text-[var(--cyan)] transition-colors text-sm font-light link-underline">Rides & Thrills</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-[var(--cyan)] transition-colors text-sm font-light link-underline">Amenities</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-[var(--cyan)] transition-colors text-sm font-light link-underline">Tickets</a></li>
              <li><a href="#visit" className="text-slate-400 hover:text-[var(--cyan)] transition-colors text-sm font-light link-underline">Plan Visit</a></li>
            </ul>
          </div>

          {/* Column 3: Attractions (3/12) */}
          <div className="lg:col-span-3 rv d3">
            <h4 className="text-white font-bold heading-font uppercase tracking-[2px] mb-8 text-xs">Top Rated</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <a href="#rides" className="text-slate-400 hover:text-white transition-colors text-sm font-light link-underline">Giant Wave Pool</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <a href="#rides" className="text-slate-400 hover:text-white transition-colors text-sm font-light link-underline">Thunder Drop Slide</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <a href="#rides" className="text-slate-400 hover:text-white transition-colors text-sm font-light link-underline">Poseidon Playground</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <a href="#rides" className="text-slate-400 hover:text-white transition-colors text-sm font-light link-underline">Rain Dance Arena</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support (3/12) */}
          <div className="lg:col-span-3 rv d4">
            <h4 className="text-white font-bold heading-font uppercase tracking-[2px] mb-8 text-xs">Immediate Help</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[var(--gold)] font-black mb-1">Call Booking</p>
                  <a href="tel:+919599722391" className="text-white hover:text-[var(--cyan)] font-bold text-sm">+91 95997 22391</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50">
                  <span className="text-lg">⏰</span>
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[var(--cyan)] font-black mb-1">Park Hours</p>
                  <p className="text-white font-bold text-sm">8:00 AM &ndash; 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[0.65rem] uppercase tracking-widest font-bold text-slate-500">
            <a href="#" className="hover:text-white transition-colors link-underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors link-underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors link-underline">Refund Policy</a>
          </div>
          <p className="text-slate-500 text-[0.65rem] font-medium text-center">
            &copy; {currentYear} THE ATLANTTIS WATER PARK. CRAFTED FOR LEGENDS.
          </p>
        </div>
      </div>

    </footer>
  );
}
