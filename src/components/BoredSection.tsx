
import { useEffect, useRef, useState } from 'react';

const BoredSection = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const lines = [
    "Bored of your bank? 🏦",
    "Tired of exchanges?",
    "Off-ramping a hassle?",
    "Try Stables 🚀",
    "The easiest way to buy, spend and send stablecoins."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lineIndex = parseInt(entry.target.getAttribute('data-line') || '0');
            setVisibleLines(prev => [...prev, lineIndex]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const lineElements = sectionRef.current?.querySelectorAll('.line-item');
    lineElements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {lines.map((line, index) => (
          <div
            key={index}
            data-line={index}
            className={`line-item text-4xl md:text-6xl font-bold mb-8 transition-all duration-1000 ${
              visibleLines.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            } ${index === 3 ? 'text-purple-400' : 'text-white'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {line}
          </div>
        ))}
        
        <div className="mt-16 opacity-60">
          <p className="text-gray-400 mb-8">Trusted by</p>
          <div className="flex items-center space-x-8 opacity-50">
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoredSection;
