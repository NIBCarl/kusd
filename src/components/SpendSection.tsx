import { useEffect, useRef, useState } from 'react';

const SpendSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-5xl md:text-7xl font-bold text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          Spend your stables
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Spend and send digital dollars and euros worldwide",
              subtitle: "Instantly and securely, wherever you are",
              icon: "💳",
              color: "purple"
            },
            {
              title: "Benefit from ultra-low fees and reliable liquidity",
              subtitle: "Keep more of your money with transparent pricing",
              icon: "💰",
              color: "blue"
            },
            {
              title: "Move funds across borders and platforms with ease",
              subtitle: "Your money, always available—no waiting, no hassle",
              icon: "🌍",
              color: "green"
            }
          ].map((card, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-400">{card.subtitle}</p>
              
              {/* Floating coins animation for first card */}
              {index === 0 && (
                <>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce">
                    <span className="absolute inset-0 flex items-center justify-center text-xs">$</span>
                  </div>
                  <div className="absolute top-12 right-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <span className="absolute inset-0 flex items-center justify-center text-xs">€</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpendSection;
