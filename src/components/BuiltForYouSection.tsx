import { useEffect, useRef, useState } from 'react';

const BuiltForYouSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dotAnimation, setDotAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setDotAnimation(true), 1000);
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Built for
              <br />
              <span className="text-purple-400">you</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "For Individuals",
                description: "Personal finance, reimagined for the digital age",
                icon: "👤",
                special: false
              },
              {
                title: "For Businesses",
                description: "Scale your operations with enterprise-grade tools and global reach",
                icon: "🏢",
                special: true
              },
              {
                title: "For Travelers",
                description: "Spend anywhere, without worrying about exchange rates or borders",
                icon: "✈️",
                special: false
              }
            ].map((card, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: `translateY(${index * -20}px)` 
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{card.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                    <p className="text-gray-400">{card.description}</p>
                  </div>
                </div>
                
                {/* Special animations */}
                {card.special && (
                  <div className="absolute top-4 right-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-purple-400 rounded-full transition-all duration-1000 ${
                          dotAnimation ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          transform: `translateY(${dotAnimation ? -20 - i * 10 : 0}px)`,
                          transitionDelay: `${i * 200}ms`
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {index === 2 && (
                  <div className={`absolute -top-2 -right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm transition-all duration-1000 ${
                    dotAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}>
                    New feature!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForYouSection;
