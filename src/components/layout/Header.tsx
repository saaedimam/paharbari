import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Leaf className={`w-8 h-8 ${isScrolled || isMenuOpen ? 'text-green-600' : 'text-white'}`} />
            <span className={`ml-2 font-heading font-semibold text-xl ${
              isScrolled || isMenuOpen ? 'text-green-900' : 'text-white'
            }`}>
              PaharBari Organics
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Our Farm', 'Eco Escape', 'Bee Hive', 'Investment', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-medium hover:text-green-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/8801729809879" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Fruits
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed left-0 right-0 top-[57px] h-[calc(100vh-57px)] md:hidden bg-white transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="h-full overflow-y-auto pb-safe">
            <div className="container-custom py-6 space-y-1">
              {['Home', 'About', 'Our Farm', 'Eco Escape', 'Bee Hive', 'Investment', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center py-3 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="https://wa.me/8801729809879" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Fruits
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};