import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "url('https://i.postimg.cc/bw0zskS7/pexels-andersonguerra-1171521.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white text-center">
        <div className="max-default mx-auto">
          <h1 className="font-heading font-bold mb-4 animate-fade-in">
            Fruits from Nature & Eco-Friendly Stay
          </h1>
          <div className="mb-8 text-xl md:text-2xl animate-fade-in animate-fade-in-delay-1">
            <p>PaharBari Organics</p>
          </div>
          <div className="animate-fade-in animate-fade-in-delay-2">
            <a 
              href="https://wa.me/8801729809879" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Order Fruits <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};