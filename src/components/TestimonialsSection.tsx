
import { useEffect, useRef, useState } from 'react';

interface TestimonialsSectionProps {
  scrollY: number;
}

const TestimonialsSection = ({ scrollY }: TestimonialsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Digital Nomad",
      content: "Stables has completely transformed how I handle money while traveling. No more expensive exchange fees!",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Business Owner",
      content: "The business features are incredible. We've saved thousands on international transfers.",
      avatar: "MJ"
    },
    {
      name: "Elena Rodriguez",
      role: "Freelancer",
      content: "Getting paid in stablecoins and spending them instantly is a game-changer for my workflow.",
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Investor",
      content: "Finally, a platform that makes crypto payments as easy as traditional banking.",
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "E-commerce Owner",
      content: "The low fees and fast settlements have improved our cash flow significantly.",
      avatar: "LT"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setSectionTop(entry.boundingClientRect.top + window.scrollY);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCardTransform = (index: number) => {
    if (!isVisible) return 'rotateX(45deg) rotateY(45deg) scale(0.8)';
    
    const sectionProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + 400) / 600));
    const baseRotateX = 45 - sectionProgress * 45;
    const baseRotateY = 45 - sectionProgress * 45;
    const scale = 0.8 + sectionProgress * 0.2;
    
    const offsetX = (index - 2) * 15 * sectionProgress;
    const offsetY = (index - 2) * 10 * sectionProgress;
    const rotateY = baseRotateY + (index - 2) * 10 * sectionProgress;
    
    return `
      perspective(1000px) 
      rotateX(${baseRotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(${scale}) 
      translateX(${offsetX}px) 
      translateY(${offsetY}px)
      translateZ(${index * 20}px)
    `;
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-5xl md:text-7xl font-bold text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          What people are saying
        </h2>
        
        <div className="relative h-96 flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                style={{
                  transform: getCardTransform(index),
                  zIndex: testimonials.length - Math.abs(index - 2),
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 max-w-md mx-auto shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
