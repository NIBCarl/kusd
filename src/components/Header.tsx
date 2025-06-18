import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <a href="#" className="text-gray-300 hover:text-white transition-colors block md:inline-block py-2 md:py-0">Personal</a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors block md:inline-block py-2 md:py-0">Business</a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors block md:inline-block py-2 md:py-0">Features</a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors block md:inline-block py-2 md:py-0">Learn</a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src="/LogoText.png" alt="Kusd Logo" className="h-8 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              {navLinks}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Docs
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
              Support
            </button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/90 border-gray-800 text-white w-full max-w-xs">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks}
                  <div className="flex flex-col space-y-4 pt-4 border-t border-gray-700">
                    <button className="w-full px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                      Docs
                    </button>
                    <button className="w-full px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                      Support
                    </button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
