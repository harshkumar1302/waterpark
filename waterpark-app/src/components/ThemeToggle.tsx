import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Default to light mode (false), unless dark was explicitly saved
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-500 overflow-hidden shadow-inner flex items-center p-1 z-50 focus:outline-none focus:ring-2 focus:ring-[var(--cyan)] focus:ring-offset-2 focus:ring-offset-[var(--abyss)] ${
        isDark ? 'bg-[#0f172a] border border-[#1e293b]' : 'bg-[#7dd3fc] border border-[#38bdf8]'
      }`}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Light Mode Clouds Background */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'} pointer-events-none`}>
        <div className="absolute -bottom-1 left-2 w-4 h-4 rounded-full bg-white opacity-95" />
        <div className="absolute -bottom-1 left-5 w-6 h-6 rounded-full bg-white opacity-95" />
        <div className="absolute -bottom-1 right-1 w-5 h-5 rounded-full bg-white opacity-95" />
        <div className="absolute bottom-0 left-0 w-full h-2.5 bg-white rounded-b-full" />
      </div>

      {/* Dark Mode Stars Background */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
        <div className="absolute top-1.5 left-2 w-1 h-1 rounded-full bg-white opacity-90 animate-pulse" />
        <div className="absolute top-4 left-5 w-0.5 h-0.5 rounded-full bg-white opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-2 right-6 w-1 h-1 rounded-full bg-white opacity-80 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Sliding Knob (Sun / Moon) */}
      <div
        className={`relative z-10 w-6 h-6 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center ${
          isDark 
            ? 'translate-x-8 bg-[#94a3b8] shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.4)]' 
            : 'translate-x-0 bg-[#fde047] shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.2),_0_0_5px_rgba(253,224,71,0.6)]'
        }`}
      >
         {/* Moon Craters */}
         {isDark && (
           <>
             <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-[#475569] shadow-inner" />
             <div className="absolute bottom-1 right-1.5 w-1 h-1 rounded-full bg-[#475569] shadow-inner" />
             <div className="absolute bottom-1.5 left-1 w-1 h-1 rounded-full bg-[#475569] shadow-inner" />
           </>
         )}
      </div>
    </button>
  );
}
