export default function StatsBand() {
  const stats = [
    { value: '20+', label: 'Thrilling Rides', delay: 'd1' },
    { value: '8 AM', label: 'Opens Daily', delay: 'd2' },
    { value: '50K+', label: 'Happy Visitors', delay: 'd3' },
    { value: '#1', label: 'Themed Park in Bihar', delay: 'd4' },
  ];

  return (
    <section 
      className="bg-[var(--abyss)] py-16 relative z-20"
      role="region"
      aria-label="Park Statistics"
    >
      <div className="section-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, i) => (
            <div key={i} className={`rv ${stat.delay} flex flex-col items-center justify-center p-4`}>
              <span className="display-font text-4xl md:text-5xl lg:text-7xl font-extrabold text-[var(--white)] mb-2">
                {stat.value}
              </span>
              <span className="heading-font text-[var(--aqua)] uppercase tracking-widest text-xs md:text-sm font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
