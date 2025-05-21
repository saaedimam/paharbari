import React from 'react';
import Button from '../ui/Button';

const CottageStay: React.FC = () => {
  const activities = [
    {
      name: 'Lake Activities',
      description: 'Kayaking and fishing in our serene lake',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      ),
    },
    {
      name: 'Adventure Sports',
      description: 'Zip-lining across valleys and hill-edge swing',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      name: 'Water Slide',
      description: 'Exciting hillside water slide with natural streams',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ),
    },
  ];

  return (
    <section id="cottage" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Experience Tranquil Cottage Stays</h2>
            <p className="text-lg text-green-700/80 mb-6">
              Nestled in the hills of Naikkhonchori, our eco-friendly cottages offer a perfect retreat from city life. 
              Wake up to birdsong, enjoy panoramic views of lush greenery, and experience the simple joys of living 
              in harmony with nature.
            </p>

            <div className="mb-8 space-y-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {activity.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">{activity.name}</h3>
                    <p className="text-green-700/80">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary">Book Your Stay</Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/NFCycL4H/Chat-GPT-Image-May-7-2025-12-08-46-AM.png"
                alt="Eco cottage" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded shadow-lg">
                <p className="text-green-800 font-medium">Starting from</p>
                <p className="text-2xl font-bold text-amber-500">৳3,500<span className="text-sm text-green-700 font-normal">/night</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottageStay
