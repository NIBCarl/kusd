
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [coinAnimation, setCoinAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoinAnimation(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const phoneOffset = scrollY * 0.8;
  const textOpacity = Math.max(0, 1 - scrollY / 400);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div 
        className="text-center mb-16 transition-all duration-300"
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
          opacity: textOpacity
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
          Kusd for{' '}
          <span className="relative inline-block">
            your
            <div 
              className={`absolute -top-2 -right-8 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000 ${
                coinAnimation ? 'animate-spin scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">$</span>
            </div>
          </span>
          <br />
          everyday payments
        </h1>
      </div>

      <div 
        className="relative transition-all duration-300"
        style={{ transform: `translateY(${phoneOffset}px)` }}
      >
        <div className="relative w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700">
          <div className="w-full h-full bg-gradient-to-b from-green-600 to-green-700 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">K</span>
                </div>
              </div>
              <p className="text-white text-lg font-medium">Kusd App</p>
            </div>
          </div>
        </div>
        
        {/* Floating coins around phone */}
        <div className="absolute -top-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs font-bold">€</span>
        </div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
          <span className="text-white text-xs font-bold">$</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
