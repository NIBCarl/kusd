
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showCharacter, setShowCharacter] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCharacter(true);
    setTimeout(() => setShowCharacter(false), 3000);
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Stay updated with Stables
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Get the latest updates on features, partnerships, and market insights
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
        
        {/* Cute Character */}
        <div className={`absolute bottom-0 right-10 transition-all duration-1000 ${
          showCharacter ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">😊</span>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Download Stables
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Available on iOS and Android
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <div className="text-sm">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors flex items-center space-x-3">
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-sm">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Stables Card</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="text-2xl font-bold text-purple-400">Stables</div>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">𝕏</a>
                <a href="#" className="hover:text-white transition-colors">Discord</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Stables. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
