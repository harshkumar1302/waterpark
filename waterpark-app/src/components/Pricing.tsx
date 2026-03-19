export default function Pricing() {
  const inclusions = [
    'Full Park Access',
    'Wave Pool Included',
    'All Water Slides',
    'Kids\' Zone Access',
    'Rain Dance Arena'
  ];

  return (
    <section id="pricing" className="section-padding bg-[var(--deep)] relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--cyan)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--aqua)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="section-inner relative z-10">
        <div className="text-center mb-16 rv d1">
          <span className="heading-font text-[var(--cyan)] tracking-[3px] uppercase text-sm font-semibold mb-3 block">Tickets</span>
          <h2 className="display-font text-4xl md:text-5xl text-[var(--white)] drop-shadow-sm">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[var(--aqua)]">Adventure</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Weekday Tier */}
          <div className="rv d2 bg-[var(--deep)] border border-[var(--mid)] rounded-3xl p-8 transition-transform hover:-translate-y-1 h-full flex flex-col justify-between shadow-md">
            <div>
              <h3 className="heading-font text-2xl text-[var(--muted)] mb-2">Weekday Entry</h3>
              <p className="text-sm text-[var(--muted)] mb-6">Mon &ndash; Fri Entry per person</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-[var(--white)]">₹499</span>
                <span className="text-[var(--muted)]">/person</span>
              </div>
              <ul className="space-y-4 mb-8">
                {inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--white)] font-light">
                    <svg className="w-5 h-5 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <a href="tel:+919599722391" className="btn-o w-full justify-center">Book Weekday</a>
          </div>

          {/* Weekend Tier (Featured) */}
          <div className="rv d3 relative bg-[var(--deep)] border-2 border-[var(--cyan)] rounded-3xl p-10 transform md:scale-105 shadow-xl h-[105%] flex flex-col justify-between z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--cyan)] text-white font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full shadow-md flex gap-1 items-center">
              ⭐ Most Popular
            </div>
            <div>
              <h3 className="heading-font text-3xl text-[var(--white)] mb-2 font-bold drop-shadow-sm">Weekend Entry</h3>
              <p className="text-sm text-[var(--cyan)] mb-6">Sat-Sun &amp; Holidays per person</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold text-[var(--cyan)] drop-shadow-sm">₹699</span>
                <span className="text-[var(--cyan)]">/person</span>
              </div>
              <ul className="space-y-4 mb-8">
                {inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--white)] font-medium">
                    <svg className="w-6 h-6 text-[var(--aqua)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    {inc}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-[var(--gold)] font-medium">
                  <svg className="w-6 h-6 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  Priority Entry Queue
                </li>
              </ul>
            </div>
            <a href="tel:+919599722391" className="btn-p w-full justify-center text-lg py-4">Book Weekend</a>
          </div>

          {/* Group Tier */}
          <div className="rv d4 bg-[var(--deep)] border border-[var(--mid)] rounded-3xl p-8 transition-transform hover:-translate-y-1 h-full flex flex-col justify-between shadow-md">
            <div>
              <h3 className="heading-font text-2xl text-[var(--gold)] mb-2">Group Package</h3>
              <p className="text-sm text-[var(--muted)] mb-6">20+ people any day</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-[var(--white)]">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-[var(--white)] font-light">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  All Standard Inclusions
                </li>
                <li className="flex items-center gap-3 text-[var(--white)] font-light">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Dedicated Coordinator
                </li>
                <li className="flex items-center gap-3 text-[var(--white)] font-light">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Custom Dining Options
                </li>
              </ul>
            </div>
            <a href="tel:+919599722391" className="btn-o w-full justify-center border-[var(--gold)] text-[var(--gold)] hover:bg-[rgba(255,209,102,0.1)] hover:shadow-[0_0_15px_rgba(255,209,102,0.2)]">Call to Plan</a>
          </div>

        </div>

        {/* Fine Print */}
        <div className="mt-16 text-center text-[var(--muted)] text-sm max-w-3xl mx-auto rv d4 pt-8 space-y-2 font-light">
          <p><span className="text-[var(--gold)] font-medium">Locker &amp; Swimwear Setup:</span> Available on rent with refundable deposit at the park.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-4">
             <span className="bg-[var(--deep)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.05)]">Kids under 3 ft height: <strong className="text-[var(--white)]">FREE</strong></span>
             <span className="bg-[var(--deep)] px-4 py-2 rounded-lg border border-[rgba(255,255,255,0.05)]">Kids 3–4 ft height: <strong className="text-[var(--cyan)]">50% OFF</strong></span>
          </div>
          <p className="mt-6 text-xs text-[var(--white)] opacity-50 italic">* Prices may vary on special occasions or festivals.</p>
        </div>

      </div>
    </section>
  );
}
