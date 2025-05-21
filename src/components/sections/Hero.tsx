import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-green-900/90 to-green-800/90">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://postimg.cc/wRJx5qnq" 
          alt="Misty hills landscape" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 md:px-6 z-10 mt-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Experience <br/>
              <span className="text-amber-400">Nature's Harmony</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto md:mx-0">
              An eco-resort and organic farm nestled in the lush hills of Naikkhonchori, Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary">Order Fruits</Button>
              <Button variant="secondary">Book a Stay</Button>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for illustration - in a real implementation, 
                this would be a custom SVG or image that matches the brand */}
            <img 
              src="https://images.pexels.com/photos/5137767/pexels-photo-5137767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Eco cottage in nature" 
              className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Explore</span>
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;