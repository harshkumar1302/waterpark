import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import StatsBand from './components/StatsBand';
import About from './components/About';
import Rides from './components/Rides';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ChatBot from './components/ChatBot';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize scroll reveal
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[var(--abyss)] text-white w-full overflow-x-hidden selection:bg-[var(--cyan)] selection:text-black">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* We keep the main app container hidden while the loader is active to prevent scroll jump.
          Wait, loader already locks body scroll. We can just render the app normally behind the fixed loader. */}
      
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <StatsBand />
        <About />
        <Rides />
        <Experience />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
