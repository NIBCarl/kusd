import { useEffect, useRef, useState } from 'react';

interface MoveMoneyProps {
  scrollY: number;
}

const MoveMoneySection = ({ scrollY }: MoveMoneyProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [marqueeOffset, setMarqueeOffset] = useState(0);

  const countries = [
    "Singapore", "Benin", "San Marino", "France", "Germany", "Spain", "Italy", 
    "Netherlands", "Belgium", "Portugal", "Austria", "Finland", "Ireland"
  ];

  const floatingElements = [
    { symbol: "$", size: "large", speed: 0.3, x: 10, y: 20 },
    { symbol: "€", size: "medium", speed: 0.5, x: 80, y: 30 },
    { symbol: "£", size: "small", speed: 0.7, x: 20, y: 60 },
    { symbol: "¥", size: "medium", speed: 0.4, x: 70, y: 70 },
    { symbol: "₹", size: "large", speed: 0.6, x: 50, y: 40 },
    { symbol: "🇺🇸", size: "small", speed: 0.8, x: 30, y: 80 },
    { symbol: "🇪🇺", size: "medium", speed: 0.3, x: 90, y: 15 },
    { symbol: "🇬🇧", size: "large", speed: 0.5, x: 15, y: 50 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueeOffset(prev => prev - 1);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Floating Elements with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-300 text-xl ${
              element.size === 'large' ? 'md:text-4xl' : 
              element.size === 'medium' ? 'text-2xl' : 'text-xl'
            } ${
              element.size === 'large' ? 'opacity-80' : 
              element.size === 'medium' ? 'opacity-60' : 'opacity-40'
            }`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `translateY(${scrollY * element.speed}px)`,
              filter: element.size === 'small' ? 'blur(1px)' : 'none'
            }}
          >
            {element.symbol}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8">
            Move money
            <br />
            <span className="text-purple-400">globally</span>
          </h2>
          
          {/* Scrolling Marquee */}
          <div className="relative overflow-hidden py-8 my-16">
            <div 
              className="flex whitespace-nowrap text-2xl md:text-4xl font-bold text-gray-600"
              style={{ transform: `translateX(${marqueeOffset}px)` }}
            >
              {[...countries, ...countries, ...countries].map((country, index) => (
                <span key={index} className="mx-8">
                  {country} •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "Lightning fast transfers",
              description: "Send money anywhere in seconds, not days",
              icon: "⚡"
            },
            {
              title: "Ultra-low fees",
              description: "Benefit from transparent, ultra-low fees and reliable liquidity",
              icon: "💰"
            }
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 border border-gray-700 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoveMoneySection;
