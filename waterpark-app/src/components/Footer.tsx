import TridentLogo from './common/TridentLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--abyss)] border-t border-[rgba(0,212,255,0.1)] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-50" />

      <div className="section-inner pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="rv d1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[var(--cyan)] flex items-center justify-center">
                <TridentLogo width="24" height="24" />
              </div>
              <div className="flex flex-col">
                <span className="display-font text-white text-lg tracking-wider">ATLANTTIS</span>
                <span className="font-light text-[var(--aqua)] text-[0.6rem] tracking-[0.1em] uppercase">Bihta &middot; Patna</span>
              </div>
            </div>
            <p className="text-[var(--muted)] text-sm font-light leading-relaxed mb-6">
              Discover the legend. Bihar's ultimate water park adventure offering thrilling rides, interactive wave pools, and premium amenities for the whole family.
            </p>
          </div>

          {/* Quick Links */}
          <div className="rv d2 lg:pl-8">
            <h4 className="text-white font-bold heading-font uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[var(--muted)] hover:text-[var(--cyan)] transition-colors text-sm">About Us</a></li>
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--cyan)] transition-colors text-sm">Our Rides</a></li>
              <li><a href="#experience" className="text-[var(--muted)] hover:text-[var(--cyan)] transition-colors text-sm">Amenities</a></li>
              <li><a href="#pricing" className="text-[var(--muted)] hover:text-[var(--cyan)] transition-colors text-sm">Ticket Prices</a></li>
              <li><a href="#visit" className="text-[var(--muted)] hover:text-[var(--cyan)] transition-colors text-sm">Visit Us</a></li>
            </ul>
          </div>

          {/* Attractions */}
          <div className="rv d3">
            <h4 className="text-white font-bold heading-font uppercase tracking-wider mb-6 text-sm">Top Attractions</h4>
            <ul className="space-y-3">
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--aqua)] transition-colors text-sm">Atlantis Wave Pool</a></li>
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--aqua)] transition-colors text-sm">Thunder Drop Slides</a></li>
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--aqua)] transition-colors text-sm">Poseidon's Playground</a></li>
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--aqua)] transition-colors text-sm">Atlantis River Drift</a></li>
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--aqua)] transition-colors text-sm">W.P.S. Titan Tower</a></li>
              <li><a href="#rides" className="text-[var(--muted)] hover:text-[var(--aqua)] transition-colors text-sm">Rain Dance Arena</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="rv d4">
            <h4 className="text-white font-bold heading-font uppercase tracking-wider mb-6 text-sm">Contact &amp; Hours</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-[var(--cyan)]">📞</span>
                <a href="tel:+919599722391" className="text-[var(--muted)] hover:text-white transition-colors text-sm">
                  +91 95997 22391
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--cyan)]">📍</span>
                <a href="https://maps.google.com/?q=The+Atlanttis+Water+Park+Bihta" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-white transition-colors text-sm">
                  Danapur-Bihta Road<br />Bihta, Patna 801103
                </a>
              </li>
              <li className="flex gap-3 items-start text-sm text-[var(--muted)] pt-2 border-t border-[rgba(255,255,255,0.05)] mt-4">
                <span className="text-[var(--gold)]">⏰</span>
                <div>
                  <strong className="text-white block font-medium">Mon - Sun: 8 AM - 5 PM</strong>
                  Tickets: ₹499 - ₹699
                </div>
              </li>
            </ul>
            <a href="#visit" className="inline-block mt-4 text-[var(--cyan)] text-sm font-semibold hover:underline decoration-dashed decoration-[var(--aqua)] transition-all">
              Send an Enquiry &rarr;
            </a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.05)] gap-4">
          <p className="text-[var(--muted)] text-xs font-light">
            &copy; {currentYear} The Atlanttis Water Park, Bihta, Patna. All Rights Reserved.
          </p>
          
          <div className="flex gap-4" aria-label="Social media links">
            <a href="#" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-[var(--cyan)] hover:border-[var(--cyan)] transition-all" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-[var(--cyan)] hover:border-[var(--cyan)] transition-all" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-[var(--cyan)] hover:border-[var(--cyan)] transition-all" aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://wa.me/919599722391" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--muted)] hover:text-black hover:bg-[var(--aqua)] hover:border-[var(--aqua)] transition-all" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.483 5.236 3.483 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
