export default function Rides() {
  const rides = [
    {
      id: 'wave-pool',
      title: 'Atlantis Wave Pool',
      desc: 'Experience the ocean inland. Giant waves that simulate the deep seas of Atlantis. The heart of our water park.',
      tag: 'Featured',
      color: 'var(--cyan)',
      bg: 'linear-gradient(135deg, rgba(0,212,255,0.2), var(--deep))',
      spanRow: true,
      icon: '🌊'
    },
    {
      id: 'thunder-drop',
      title: 'Thunder Drop Slides',
      desc: 'Vertical free-fall speed slide for ultimate adrenaline junkies.',
      tag: 'Extreme',
      color: 'var(--coral)',
      bg: 'linear-gradient(135deg, rgba(255,107,107,0.1), var(--deep))',
      spanRow: false,
      icon: '⚡'
    },
    {
      id: 'kids-zone',
      title: 'Poseidon\'s Playground',
      desc: 'Safe, shallow, and full of interactive splash elements for the little ones.',
      tag: 'Kids',
      color: 'var(--gold)',
      bg: 'linear-gradient(135deg, rgba(255,209,102,0.1), var(--deep))',
      spanRow: false,
      icon: '👶'
    },
    {
      id: 'lazy-river',
      title: 'Atlantis River Drift',
      desc: 'Grab a tube and let the slow currents guide you around the park.',
      tag: 'Relax',
      color: 'var(--aqua)',
      bg: 'linear-gradient(135deg, rgba(0,255,204,0.1), var(--deep))',
      spanRow: false,
      icon: '🛶'
    },
    {
      id: 'wps-titan',
      title: 'W.P.S. Titan Tower',
      desc: 'Multi-level water play structure perfect for family splash battles.',
      tag: 'Family',
      color: '#0088cc',
      bg: 'linear-gradient(135deg, rgba(0,136,204,0.1), var(--deep))',
      spanRow: false,
      icon: '🏰'
    },
    {
      id: 'rain-dance',
      title: 'Rain Dance Arena',
      desc: 'DJ beats, laser lights, and continuous showers. Party like never before.',
      tag: 'Party Zone',
      color: '#b366ff',
      bg: 'linear-gradient(135deg, rgba(179,102,255,0.1), var(--deep))',
      spanRow: false,
      icon: '🪩'
    }
  ];

  return (
    <section id="rides" className="section-padding bg-[var(--deep)] border-t border-[rgba(255,255,255,0.05)] relative">
      <div className="section-inner">
        <div className="text-center mb-16 rv d1">
           <span className="heading-font text-[var(--cyan)] tracking-[3px] uppercase text-sm font-semibold mb-3 block">Attractions</span>
           <h2 className="display-font text-4xl md:text-5xl text-white drop-shadow-md">
             Explore <span className="text-[var(--aqua)]">Our Rides</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rides.map((ride, i) => (
            <div 
              key={ride.id}
              className={`rv group relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-end p-6 md:p-8 cursor-pointer min-h-[300px] md:min-h-[350px] ${
                ride.spanRow ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: ride.bg,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
               {/* Hover Glow Border Indicator */}
               <div 
                 className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 pointer-events-none group-hover:border-[var(--cyan)] opacity-0 group-hover:opacity-30" 
               />
               
               {/* Overlay for better text legibility on all cards */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.4)] to-transparent pointer-events-none opacity-80" />

               <div className="relative z-10 flex flex-col h-full justify-between">
                 <div className="flex justify-between items-start">
                   <div 
                     className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#020b18]/80 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white shadow-lg"
                     style={{ color: ride.color, borderColor: `${ride.color}40` }}
                   >
                     {ride.tag}
                   </div>
                   <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-xl shadow-lg">
                     {ride.icon}
                   </div>
                 </div>

                 <div>
                   <h3 className="heading-font text-2xl md:text-3xl text-white font-bold mb-2 group-hover:text-[var(--cyan)] transition-colors drop-shadow-lg">
                     {ride.title}
                   </h3>
                   <p className="text-[var(--muted)] text-sm md:text-base font-light leading-relaxed max-w-[90%] group-hover:text-white transition-colors">
                     {ride.desc}
                   </p>
                 </div>
               </div>

               {/* Bottom scaling glow bar */}
               <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--cyan)] to-[var(--aqua)] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
