import { useState } from 'react';
import TridentLogo from './common/TridentLogo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    groupSize: '1-5',
    visitDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide both Name and Phone Number.");
      return;
    }
    alert(`Thank you, ${formData.name}! We received your enquiry and will call you on ${formData.phone} shortly. See you at The Atlanttis!`);
    setFormData({ name: '', phone: '', groupSize: '1-5', visitDate: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="visit" className="relative pt-24 pb-0 bg-[var(--abyss)] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--cyan)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="section-inner pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Column (5/12) */}
          <div className="lg:col-span-5 rv d1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--dim)] border border-[var(--mid)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
                <span className="heading-font text-[var(--cyan)] tracking-[1px] uppercase text-[0.7rem] font-bold">Visit Us Today</span>
             </div>
             
             <h2 className="display-font text-4xl md:text-5xl lg:text-6xl text-[var(--white)] mb-8 leading-tight">
               Plan Your <br />
               <span className="text-[var(--gold)]">Legendary Adventure</span>
             </h2>

             <p className="text-[var(--muted)] text-lg font-light leading-relaxed mb-10 max-w-md">
               Dive into the myth. We are located on the Danapur-Bihta Road, just 45 minutes from Patna. Always open, always refreshing.
             </p>

             {/* Quick Stats/Hours Cards */}
             <div className="space-y-4 mb-12">
               <div className="flex items-center gap-5 p-4 rounded-2xl bg-[var(--deep)] border border-[var(--mid)] shadow-sm hover:border-[var(--cyan)] transition-colors group">
                 <div className="w-12 h-12 rounded-xl bg-[rgba(255,209,102,0.1)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🌅</div>
                 <div>
                   <p className="text-xs text-[var(--muted)] uppercase tracking-wider font-bold">Doors Open</p>
                   <p className="text-xl font-bold text-[var(--white)]">8:00 AM Daily</p>
                 </div>
               </div>
               <div className="flex items-center gap-5 p-4 rounded-2xl bg-[var(--deep)] border border-[var(--mid)] shadow-sm hover:border-[var(--aqua)] transition-colors group">
                 <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📍</div>
                 <div>
                   <p className="text-xs text-[var(--muted)] uppercase tracking-wider font-bold">Location</p>
                   <p className="text-lg font-medium text-[var(--white)]">Bihta, Patna 801103</p>
                 </div>
               </div>
             </div>

             <a 
               href="https://maps.google.com/?q=The+Atlanttis+Water+Park+Bihta" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn-o gap-3 border-[var(--cyan)] text-[var(--cyan)] py-4 px-8"
             >
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
               View on Google Maps
             </a>
          </div>

          {/* Form Column (7/12) */}
          <div className="lg:col-span-7 rv d2">
            <div className="relative bg-[var(--deep)] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-[var(--mid)] overflow-hidden">
              {/* Subtle Trident watermark */}
              <div className="absolute top-[-10%] right-[-10%] opacity-[0.03] pointer-events-none rotate-[15deg]">
                <TridentLogo width="400" height="400" />
              </div>

              <div className="relative z-10">
                <h3 className="heading-font text-3xl font-bold text-[var(--white)] mb-3">Send an Enquiry</h3>
                <p className="text-[var(--muted)] text-base mb-10 font-light">
                  Group bookings or a local day trip? Our team will call you within 2 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black uppercase tracking-[2px] text-[var(--muted)] ml-1">Guest Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full bg-[var(--abyss)] border border-[var(--mid)] rounded-xl px-5 py-4 text-[var(--white)] focus:outline-none focus:border-[var(--cyan)] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black uppercase tracking-[2px] text-[var(--muted)] ml-1">Phone Number</label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full bg-[var(--abyss)] border border-[var(--mid)] rounded-xl px-5 py-4 text-[var(--white)] focus:outline-none focus:border-[var(--cyan)] transition-all"
                        placeholder="+91 xxxxx xxxxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black uppercase tracking-[2px] text-[var(--muted)] ml-1">Group Size</label>
                      <select 
                        name="groupSize" value={formData.groupSize} onChange={handleChange}
                        className="w-full bg-[var(--abyss)] border border-[var(--mid)] rounded-xl px-5 py-4 text-[var(--white)] focus:outline-none focus:border-[var(--cyan)] appearance-none cursor-pointer"
                      >
                        <option value="1-5">1 &ndash; 5 Guests</option>
                        <option value="6-10">6 &ndash; 10 Guests</option>
                        <option value="11-20">11 &ndash; 20 Guests</option>
                        <option value="20+">20+ Corporate/School</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[0.65rem] font-black uppercase tracking-[2px] text-[var(--muted)] ml-1">Preferred Date</label>
                      <input 
                        type="date" name="visitDate" value={formData.visitDate} onChange={handleChange}
                        className="w-full bg-[var(--abyss)] border border-[var(--mid)] rounded-xl px-5 py-4 text-[var(--white)] focus:outline-none focus:border-[var(--cyan)] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-black uppercase tracking-[2px] text-[var(--muted)] ml-1">Your Message (Optional)</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleChange} rows={3}
                      className="w-full bg-[var(--abyss)] border border-[var(--mid)] rounded-xl px-5 py-4 text-[var(--white)] focus:outline-none focus:border-[var(--cyan)] resize-none"
                      placeholder="Special requests or questions?"
                    />
                  </div>

                  <button type="submit" className="btn-p w-full py-5 text-lg shadow-[0_10px_30px_rgba(2,132,199,0.3)] hover:shadow-[0_15px_40px_rgba(2,132,199,0.4)]">
                    🌊 Confirm Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The Visual "Gap" Transition - SVG Curve */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-full fill-[#020b18] translate-y-[1px] scale-y-[1.1]">
          <path d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>

    </section>
  );
}
