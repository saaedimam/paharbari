import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sprout, Users, Mountain, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Eco-conscious Farming',
      description: 'We practice sustainable agriculture that works with nature, not against it.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Impact',
      description: 'Supporting local communities through employment and educational opportunities.'
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Highland Agriculture',
      description: 'Our 40-acre farm in the hills of Bandarban offers unique growing conditions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Sustainable Living',
      description: 'Promoting a lifestyle that respects and preserves our natural environment.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="About PaharBari Organics"
          subtitle="We are committed to eco-conscious farming, community impact, and sustainable living in the beautiful hills of Bandarban."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg" 
                alt="PaharBari Organics Farm" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 mb-6">
              PaharBari Organics was founded with a vision to create a sustainable agricultural 
              enterprise that works in harmony with nature. Our 40-acre agro-ecological farm, 
              nestled in the hills of Naikkonchori, Bandarban, features diverse fruit plantations, 
              a serene lake, and untouched natural beauty.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in responsible farming practices that preserve the environment while 
              producing high-quality organic fruits and honey. Our mission extends beyond 
              agriculture to creating a positive impact on the local community and promoting 
              sustainable living.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4 text-green-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};