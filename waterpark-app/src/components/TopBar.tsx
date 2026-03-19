
export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#020617] text-white py-2 px-4 border-b border-white/5 z-[110]">
      <div className="section-inner flex flex-col md:flex-row justify-between items-center gap-2 md:gap-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
          <span className="text-[0.65rem] md:text-xs font-bold uppercase tracking-[2px] opacity-90">
            Always Open, Always Fresh <span className="text-[var(--gold)] ml-2">8:00 AM &ndash; 5:00 PM</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="tel:+919599722391" className="flex items-center gap-2 hover:text-[var(--cyan)] transition-colors group">
            <span className="text-xs">📞</span>
            <span className="text-[0.65rem] md:text-xs font-bold tracking-wider">+91 95997 22391</span>
          </a>
          <a href="https://maps.app.goo.gl/81ELpKj9xq7TukvD6" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 opacity-80 hover:text-[var(--cyan)] transition-colors">
            <span className="text-xs">📍</span>
            <span className="text-[0.65rem] md:text-xs font-medium tracking-wide">Bihta Patna, 801103</span>
          </a>
        </div>
      </div>
    </div>
  );
}
