import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { TrendingUp, Users, Home, BarChart2 } from 'lucide-react';

export const Revenue: React.FC = () => {
  const revenueData = [
    {
      title: "Fruit Sales",
      amount: "BDT 15–25 lakh/year",
      icon: <TrendingUp className="w-10 h-10" />,
      description: "Revenue from diverse fruit harvests sold to markets and direct consumers."
    },
    {
      title: "Eco Resort",
      amount: "BDT 12 lakh/year",
      icon: <Home className="w-10 h-10" />,
      description: "Projected income from our upcoming eco-tourism accommodations and experiences."
    },
    {
      title: "Honey Production",
      amount: "BDT 3–5 lakh/year",
      icon: <BarChart2 className="w-10 h-10" />,
      description: "Revenue from organic honey and bee-related products."
    },
    {
      title: "Community Tours",
      amount: "Free for community",
      icon: <Users className="w-10 h-10" />,
      description: "Educational visits for local communities and schools as part of our social commitment."
    }
  ];

  return (
    <section id="revenue" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Revenue Projection"
          subtitle="Transparent overview of our diversified revenue streams and financial outlook."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {revenueData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow"
            >
              <div className="text-green-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-medium mb-2 text-green-900">{item.title}</h3>
              <p className="text-2xl font-bold text-amber-600 mb-3">{item.amount}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-heading font-medium mb-6 text-center text-green-900">Growth Projection (5-Year Outlook)</h3>
          
          <div className="relative h-72 mb-6">
            {/* Chart background */}
            <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-gray-300 grid grid-cols-5 grid-rows-5">
              {[...Array(5)].map((_, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                  {[...Array(5)].map((_, colIndex) => (
                    <div key={`cell-${rowIndex}-${colIndex}`} className="border-t border-r border-gray-100"></div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute bottom-0 left-0 h-full flex flex-col justify-between pr-2 -ml-14">
              {[0, 10, 20, 30, 40, 50].map((value, index) => (
                <div key={index} className="text-xs text-gray-600 -ml-2">{value} lakh</div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-600 -mb-6">
              <div>2025</div>
              <div>2026</div>
              <div>2027</div>
              <div>2028</div>
              <div>2029</div>
            </div>
            
            {/* Fruit Sales line */}
            <div className="absolute bottom-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M0,80 L25,75 L50,65 L75,55 L100,45" 
                  fill="none" 
                  stroke="#047857" 
                  strokeWidth="2"
                />
                <circle cx="0" cy="80" r="2" fill="#047857" />
                <circle cx="25" cy="75" r="2" fill="#047857" />
                <circle cx="50" cy="65" r="2" fill="#047857" />
                <circle cx="75" cy="55" r="2" fill="#047857" />
                <circle cx="100" cy="45" r="2" fill="#047857" />
              </svg>
            </div>
            
            {/* Eco Resort line */}
            <div className="absolute bottom-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M0,100 L25,85 L50,75 L75,65 L100,55" 
                  fill="none" 
                  stroke="#d97706" 
                  strokeWidth="2"
                />
                <circle cx="0" cy="100" r="2" fill="#d97706" />
                <circle cx="25" cy="85" r="2" fill="#d97706" />
                <circle cx="50" cy="75" r="2" fill="#d97706" />
                <circle cx="75" cy="65" r="2" fill="#d97706" />
                <circle cx="100" cy="55" r="2" fill="#d97706" />
              </svg>
            </div>
            
            {/* Honey line */}
            <div className="absolute bottom-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M0,90 L25,87 L50,83 L75,80 L100,75" 
                  fill="none" 
                  stroke="#4f46e5" 
                  strokeWidth="2"
                />
                <circle cx="0" cy="90" r="2" fill="#4f46e5" />
                <circle cx="25" cy="87" r="2" fill="#4f46e5" />
                <circle cx="50" cy="83" r="2" fill="#4f46e5" />
                <circle cx="75" cy="80" r="2" fill="#4f46e5" />
                <circle cx="100" cy="75" r="2" fill="#4f46e5" />
              </svg>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-700 rounded-full mr-2"></div>
              <span>Fruit Sales</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-600 rounded-full mr-2"></div>
              <span>Eco Resort</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-indigo-600 rounded-full mr-2"></div>
              <span>Honey Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};