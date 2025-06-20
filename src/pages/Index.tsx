import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BoredSection from '../components/BoredSection';
import SpendSection from '../components/SpendSection';
import MoveMoneySection from '../components/MoveMoneySection';
import BuiltForYouSection from '../components/BuiltForYouSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Large faded background image */}
      <img
        src="/Pfp.jpg"
        alt="KUSD Background"
        className="pointer-events-none select-none absolute left-1/2 top-1/4 md:top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] object-cover opacity-20 blur-3xl z-0"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <Header />
        <HeroSection scrollY={scrollY} />
        <BoredSection />
        <SpendSection />
        <MoveMoneySection scrollY={scrollY} />
        <BuiltForYouSection />
        <TestimonialsSection scrollY={scrollY} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
