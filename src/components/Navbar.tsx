import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-semibold ${scrolled ? 'text-green-800' : 'text-white'}`}>
              PaharBari Organics
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className={`transition-colors ${scrolled ? 'text-green-800' : 'text-white'} hover:text-amber-500`}>Products</a>
            <a href="#cottage" className={`transition-colors ${scrolled ? 'text-green-800' : 'text-white'} hover:text-amber-500`}>Cottage Stay</a>
            <a href="#about" className={`transition-colors ${scrolled ? 'text-green-800' : 'text-white'} hover:text-amber-500`}>About</a>
            <a href="#gallery" className={`transition-colors ${scrolled ? 'text-green-800' : 'text-white'} hover:text-amber-500`}>Gallery</a>
            <a href="#contact" className={`transition-colors ${scrolled ? 'text-green-800' : 'text-white'} hover:text-amber-500`}>Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 
              <X className={`h-6 w-6 ${scrolled ? 'text-green-800' : 'text-white'}`} /> : 
              <Menu className={`h-6 w-6 ${scrolled ? 'text-green-800' : 'text-white'}`} />
            }
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4 py-2">
              <a href="#products" className="text-green-800 hover:text-amber-500" onClick={() => setIsOpen(false)}>Products</a>
              <a href="#cottage" className="text-green-800 hover:text-amber-500" onClick={() => setIsOpen(false)}>Cottage Stay</a>
              <a href="#about" className="text-green-800 hover:text-amber-500" onClick={() => setIsOpen(false)}>About</a>
              <a href="#gallery" className="text-green-800 hover:text-amber-500" onClick={() => setIsOpen(false)}>Gallery</a>
              <a href="#contact" className="text-green-800 hover:text-amber-500" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;