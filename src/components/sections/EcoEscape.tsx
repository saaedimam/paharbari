import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Tent, Mountain, Minimize as Swimming, Leaf, Route } from 'lucide-react';

export const EcoEscape: React.FC = () => {
  const activities = [
    {
      icon: <Route className="w-6 h-6" />,
      title: 'Nature Trails',
      description: 'Explore scenic paths through lush forest and hills'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Fruit Picking',
      description: 'Harvest fresh seasonal fruits from our orchards'
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      title: 'Trekking',
      description: 'Guided treks to nearby hills and viewpoints'
    },
    {
      icon: <Swimming className="w-6 h-6" />,
      title: 'Lake Activities',
      description: 'Enjoy swimming, fishing and boating in our lake'
    }
  ];

  return (
    <section 
      id="eco-escape" 
      className="section-padding relative"
      style={{
        background: 'linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url(https://i.postimg.cc/13bjhjzP/Chat-GPT-Image-May-7-2025-12-08-33-AM.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Naikkhon Eco Escape"
          subtitle="Experience the serene beauty of our eco-resort project, offering sustainable accommodation in harmony with nature."
          center
          light
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h3 className="text-2xl font-heading font-medium mb-4">A Sanctuary in Nature</h3>
            <p className="mb-6">
              Nestled within our organic farm, Naikkhon Eco Escape offers a unique opportunity to disconnect 
              from the hustle of city life and reconnect with nature. Our eco-resort project features 
              thoughtfully designed lake-side and hill-view cottages that blend seamlessly with the 
              surrounding environment.
            </p>
            <p className="mb-8">
              Each accommodation is built using sustainable materials and designed to minimize environmental 
              impact while maximizing comfort. Wake up to panoramic views of misty hills, enjoy fresh 
              organic meals harvested from our farm, and immerse yourself in the tranquility of nature.
            </p>
            
            <div className="flex items-center mb-6">
              <Tent className="w-8 h-8 mr-3 text-amber-400" />
              <h4 className="text-xl font-medium">Coming Soon in 2025</h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-3 text-amber-400">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{activity.title}</h4>
                    <p className="text-green-50 text-sm">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img 
              src="https://i.postimg.cc/dJnQPmvC/Chat-GPT-Image-May-7-2025-12-08-46-AM.png" 
              alt="Eco cottage concept" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <h3 className="text-xl font-heading font-medium mb-3 text-green-900">Eco-Friendly Accommodations</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Lake-side cottages with private decks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Hill-view cabins nestled among fruit trees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Solar-powered amenities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Farm-to-table dining experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Community-led tours and cultural experiences</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};