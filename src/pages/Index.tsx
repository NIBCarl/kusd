
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <Header />
      <HeroSection scrollY={scrollY} />
      <BoredSection />
      <SpendSection />
      <MoveMoneySection scrollY={scrollY} />
      <BuiltForYouSection />
      <TestimonialsSection scrollY={scrollY} />
      <Footer />
    </div>
  );
};

export default Index;
