import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-white" />
              <span className="ml-2 font-heading font-semibold text-xl">
                PaharBari Organics
              </span>
            </div>
            <p className="text-green-100 mb-4">
              Sustainable farming in harmony with nature, producing the finest organic fruits and honey from the hills of Bandarban.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <a href="tel:+8801729809879" className="text-green-100 hover:text-white transition-colors">
                  +8801729809879
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:paharbariorganics@gmail.com" className="text-green-100 hover:text-white transition-colors">
                  paharbariorganics@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-green-100">
                  Naikkonchori, Bandarban, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Our Farm', 'Eco Escape', 'Bee Hive', 'Investment', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a 
                href="https://wa.me/8801729809879" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Order Fruits Now
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-green-800">
          <p className="text-center text-green-100">
            &copy; {new Date().getFullYear()} PaharBari Organics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};