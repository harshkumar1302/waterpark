import { useState } from 'react';

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
    
    // Simple Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide both Name and Phone Number.");
      return;
    }

    if (formData.phone.replace(/\\D/g, '').length < 10) {
      alert("Please provide a valid 10-digit phone number.");
      return;
    }

    // Success State
    alert(`Thank you, ${formData.name}! We received your enquiry and will call you on ${formData.phone} shortly. See you at The Atlanttis!`);
    
    // Reset
    setFormData({
      name: '',
      phone: '',
      groupSize: '1-5',
      visitDate: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="visit" className="section-padding bg-[var(--deep)] bg-gradient-to-b from-[var(--abyss)] to-[#04162b]">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        
        {/* Info Column */}
        <div className="rv d1">
           <span className="heading-font text-[var(--cyan)] tracking-[3px] uppercase text-sm font-semibold mb-3 block">Visit Us</span>
           <h2 className="display-font text-4xl md:text-5xl text-white drop-shadow-md mb-8">
             Plan Your <br className="hidden md:block" />
             <span className="text-[var(--gold)]">Legendary Visit</span>
           </h2>

           {/* Timings */}
           <div className="flex flex-col sm:flex-row gap-4 mb-8">
             <div className="bg-[rgba(255,209,102,0.1)] border border-[var(--gold)] rounded-xl p-5 w-full sm:w-1/2 flex items-center gap-4">
                <span className="text-3xl">🌅</span>
                <div>
                  <h4 className="font-bold text-white text-lg">8:00 AM</h4>
                  <p className="text-[var(--gold)] text-xs uppercase tracking-wider font-semibold">Park Opens</p>
                </div>
             </div>
             <div className="bg-[var(--abyss)] border border-[rgba(255,255,255,0.1)] rounded-xl p-5 w-full sm:w-1/2 flex items-center gap-4">
                <span className="text-3xl">🌇</span>
                <div>
                  <h4 className="font-bold text-white text-lg">5:00 PM</h4>
                  <p className="text-[var(--muted)] text-xs uppercase tracking-wider font-semibold">Last Entry</p>
                </div>
             </div>
           </div>

           <p className="font-bold text-white tracking-widest uppercase mb-10 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-[var(--aqua)] animate-pulse" />
             Open 7 Days a week &middot; Always Fresh
           </p>

           {/* Contact Info */}
           <ul className="mb-10 space-y-6">
             <li className="flex gap-4 items-start">
               <div className="w-12 h-12 rounded-full bg-[rgba(0,212,255,0.1)] flex items-center justify-center shrink-0 border border-[var(--cyan)]">
                 <svg className="w-6 h-6 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <div>
                 <h5 className="font-heading text-xl font-bold text-white mb-1">Location</h5>
                 <p className="text-[var(--muted)] font-light leading-relaxed">
                   The Atlanttis Water Park<br />
                   Danapur-Bihta Road<br />
                   Bihta, Patna, Bihar — 801103
                 </p>
               </div>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-12 h-12 rounded-full bg-[rgba(0,212,255,0.1)] flex items-center justify-center shrink-0 border border-[var(--cyan)]">
                 <svg className="w-6 h-6 text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               </div>
               <div>
                 <h5 className="font-heading text-xl font-bold text-white mb-1">Phone</h5>
                 <a href="tel:+919599722391" className="text-[var(--cyan)] text-lg hover:underline decoration-dashed font-semibold transition-all">
                   +91 95997 22391
                 </a>
               </div>
             </li>
           </ul>

           <a 
             href="https://maps.google.com/?q=The+Atlanttis+Water+Park+Bihta" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn-o gap-2 border-[var(--aqua)] text-[var(--aqua)] hover:bg-[rgba(0,255,204,0.1)] hover:shadow-[0_0_15px_rgba(0,255,204,0.3)]"
           >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
             Open Google Maps
           </a>
        </div>

        {/* Contact Form Column */}
        <div className="rv d2 relative">
           <div className="absolute inset-[-1px] rounded-[2rem] bg-gradient-to-b from-[var(--cyan)] to-transparent opacity-30 pointer-events-none" />
           <div className="bg-[var(--deep)] rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative border border-[rgba(255,255,255,0.05)]">
             <h3 className="heading-font text-2xl font-bold text-white mb-2">Send an Enquiry</h3>
             <p className="text-[var(--muted)] text-sm mb-8 font-light">
               Planning a group trip? Need to confirm dates? Drop us a line.
             </p>

             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2 ml-1">Full Name</label>
                   <input 
                     type="text" 
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full bg-[var(--deep)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--cyan)] transition-colors focus:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                     placeholder="John Doe"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                   <input 
                     type="tel" 
                     id="phone"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     className="w-full bg-[var(--deep)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--cyan)] transition-colors focus:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                     placeholder="+91 xxxxx xxxxx"
                     required
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="groupSize" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2 ml-1">Group Size</label>
                   <select 
                     id="groupSize"
                     name="groupSize"
                     value={formData.groupSize}
                     onChange={handleChange}
                     className="w-full bg-[var(--deep)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--cyan)] transition-colors appearance-none"
                   >
                     <option value="1-5">1 &ndash; 5 people</option>
                     <option value="6-10">6 &ndash; 10 people</option>
                     <option value="11-20">11 &ndash; 20 people</option>
                     <option value="20+">20+ people (Group)</option>
                   </select>
                 </div>
                 <div>
                   <label htmlFor="visitDate" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2 ml-1">Preferred Date</label>
                   <input 
                     type="date" 
                     id="visitDate"
                     name="visitDate"
                     value={formData.visitDate}
                     onChange={handleChange}
                     className="w-full bg-[var(--deep)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--cyan)] transition-colors appearance-none"
                   />
                 </div>
               </div>

               <div>
                 <label htmlFor="message" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2 ml-1">Message</label>
                 <textarea 
                   id="message"
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   rows={4}
                   className="w-full bg-[var(--abyss)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--cyan)] transition-colors resize-none focus:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                   placeholder="Any special requests or details?"
                 />
               </div>

               <button type="submit" className="btn-p w-full justify-center py-4 text-lg">
                 🌊 Send Enquiry
               </button>
             </form>
           </div>
        </div>
      </div>
    </section>
  );
}
