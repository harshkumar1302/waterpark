export default function Experience() {
  const amenities = [
    {
      icon: '🍔',
      title: 'Food Court & Refreshments',
      desc: 'Multiple dining options from quick snacks to full meals. Recharge your energy with delicious food and cold beverages.',
      colSpan: 2
    },
    {
      icon: '🔒',
      title: 'Secure Lockers',
      desc: 'Top-tier digital security lockers to keep your valuables safe while you dive into the fun.',
      colSpan: 1
    },
    {
      icon: '🚗',
      title: 'Ample Free Parking',
      desc: 'Spacious and secure parking area capable of holding hundreds of vehicles.',
      colSpan: 1
    },
    {
      icon: '🚿',
      title: 'Changing Rooms',
      desc: 'Clean, sanitized, and spacious changing rooms with hot showers available all day.',
      colSpan: 1
    },
    {
      icon: '🛟',
      title: 'Lifeguard Safety',
      desc: 'Certified and trained lifeguards stationed at every pool and slide for optimal safety.',
      colSpan: 1
    },
    {
      icon: '🩱',
      title: 'Swim Gear Available',
      desc: 'Forgot your gear? We offer high-quality swimsuits and accessories for rent and purchase.',
      colSpan: 1
    },
    {
      icon: '🎉',
      title: 'Group & Corporate Bookings',
      desc: 'Special rates and exclusive spaces for groups ranging from 20 to 500+ guests. Ideal for team building and celebrations.',
      colSpan: 2
    }
  ];

  return (
    <section id="experience" className="section-padding bg-[var(--abyss)]">
      <div className="section-inner">
        <div className="text-center mb-16 rv d1">
          <span className="heading-font text-[var(--cyan)] tracking-[3px] uppercase text-sm font-semibold mb-3 block">Guest Experience</span>
          <h2 className="display-font text-4xl md:text-5xl text-white drop-shadow-md">
            World-class <span className="text-[var(--gold)]">Amenities</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto mt-4 font-light">
            We provide everything you need so you can focus entirely on having fun. 
            From safety to dining, we have got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, i) => (
            <div 
              key={i}
              className={`rv bg-[var(--deep)] border border-[var(--mid)] rounded-2xl p-6 md:p-8 transition-transform hover:-translate-y-1 hover:shadow-lg flex flex-col gap-4 ${
                amenity.colSpan === 2 ? 'md:col-span-2' : 'col-span-1'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-[var(--abyss)] border border-[var(--mid)] flex items-center justify-center text-2xl mb-2 text-[var(--cyan)]">
                {amenity.icon}
              </div>
              <h3 className="heading-font text-xl md:text-2xl font-bold text-[var(--white)] tracking-wide">
                {amenity.title}
              </h3>
              <p className="text-[var(--muted)] font-light leading-relaxed">
                {amenity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
