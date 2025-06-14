
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <div className="text-2xl font-bold text-green-400">Kusd</div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Personal</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Business</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Learn</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Docs
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
              Support
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
