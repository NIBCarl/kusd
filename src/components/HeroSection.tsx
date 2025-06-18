import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface HeroSectionProps {
  scrollY: number;
}

function AnimatedTextLine({ children, className = '' }) {
  const ref = useRef(null);
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0.2, color: '#888' }}
      whileInView={{ opacity: 1, color: '#fff' }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [coinAnimation, setCoinAnimation] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 0.2], ['0%', '-150%']);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0]);

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
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 sm:px-6">
      <div 
        className="text-center mb-16 transition-all duration-300"
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
          opacity: textOpacity
        }}
      >
        <h1 className="font-stables text-5xl sm:text-6xl md:text-8xl font-bold mb-8 animate-fade-in flex flex-wrap items-center justify-center gap-2">
          <AnimatedTextLine className="flex items-center">
            <img src="/Logo.png" alt="K" className="inline-block align-middle h-[1.2em] w-auto mr-2" style={{display:'inline'}} />
            <span className="text-5xl sm:text-6xl md:text-8xl" style={{letterSpacing: '0.05em'}}>Empower Your Finances</span>
          </AnimatedTextLine>
          <AnimatedTextLine className="ml-0 md:ml-3">
            with Seamless Digital Payments
          </AnimatedTextLine>
          <br />
          <AnimatedTextLine className="block text-xl sm:text-2xl md:text-4xl mt-4">Experience instant, secure, and low-cost transactions—globally, anytime.</AnimatedTextLine>
        </h1>
        <div className="mt-8">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full font-bold text-lg transition-colors">Get Started</button>
        </div>
      </div>

      <motion.div 
        className="relative transition-all duration-300 w-full max-w-xs"
        style={{ y, scale, opacity }}
      >
        {/* Floating coins around phone */}
        <img src="/Logo.png" alt="Kusd Coin" className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-bounce z-10" />
        <img src="/Logo.png" alt="Kusd Coin" className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full animate-bounce z-10" style={{ animationDelay: '0.5s' }} />
        {/* Mobile Banking Mockup UI */}
        <div className="relative w-full h-[520px] bg-black rounded-[2.5rem] shadow-2xl border-2 border-gray-800 flex flex-col items-center overflow-hidden">
          {/* Top bar with avatar and chat icon */}
          <div className="flex items-center justify-between w-full px-4 pt-4 pb-2">
            <img src="/Pfp.jpg" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white bg-blue-400 object-cover flex-shrink-0" />
            <div className="flex-1" />
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white text-xl flex-shrink-0">
              <span>💬</span>
            </div>
          </div>
          {/* Card balance */}
          <div className="mx-4 mt-2 mb-4 rounded-2xl bg-gradient-to-br from-[#2d2e4a] to-[#1a1b2e] p-6 flex flex-col items-center justify-center shadow-lg">
            <div className="text-gray-300 text-xs flex items-center mb-2">
              <span className="text-base mr-1">💲</span>
              <span className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">420.00</span>
            </div>
          </div>
          {/* Action buttons */}
          <div className="flex justify-around w-full px-6 mb-4 gap-2">
            <div className="flex flex-col items-center flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl mb-1">➕</div>
              <span className="text-xs text-gray-400 truncate">Top up</span>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl mb-1">➡️</div>
              <span className="text-xs text-gray-400 truncate">Send</span>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-0">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl mb-1">💳</div>
              <span className="text-xs text-gray-400 truncate">Spend</span>
            </div>
          </div>
          {/* Transaction list */}
          <div className="flex-1 w-full bg-[#23243a] rounded-t-3xl px-4 pt-4 pb-2 overflow-y-auto">
            <div className="text-xs text-gray-400 mb-2">June 2024</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">💲</span>
                  <span className="text-sm text-white">Top up</span>
                </div>
                <span className="text-sm text-white">800.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">💲</span>
                  <span className="text-sm text-white">Top up</span>
                </div>
                <span className="text-sm text-white">A$1,000.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">🛡️</span>
                  <span className="text-sm text-white">You're verified</span>
                </div>
                <span className="text-xs text-gray-400">Magic awaits</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">⚡</span>
                  <span className="text-sm text-white">You joined Stables</span>
                </div>
                <span className="text-xs text-gray-400">We're so happy you're here</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap w-full py-8">
        <div className="inline-block animate-marquee">
          {/* Placeholders for logos or trusted by content, repeat for infinite effect */}
          <span className="mx-8 inline-block w-32 h-8 bg-gray-700 rounded"></span>
          <span className="mx-8 inline-block w-32 h-8 bg-gray-700 rounded"></span>
          <span className="mx-8 inline-block w-32 h-8 bg-gray-700 rounded"></span>
          <span className="mx-8 inline-block w-32 h-8 bg-gray-700 rounded"></span>
          <span className="mx-8 inline-block w-32 h-8 bg-gray-700 rounded"></span>
        </div>
      </div>
      {/* Fade-in for next section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        {/* Next section content goes here, do not change text */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
