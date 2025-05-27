import React from 'react';
import { SectionHeading } from '../common/SectionHeading';

export const BeeHive: React.FC = () => {
  const months = [
    { name: 'January', yield: 'Low', color: 'bg-amber-100' },
    { name: 'February', yield: 'Low', color: 'bg-amber-100' },
    { name: 'March', yield: 'Medium', color: 'bg-amber-300' },
    { name: 'April', yield: 'High', color: 'bg-amber-500' },
    { name: 'May', yield: 'High', color: 'bg-amber-500' },
    { name: 'June', yield: 'Medium', color: 'bg-amber-300' },
    { name: 'July', yield: 'Low', color: 'bg-amber-100' },
    { name: 'August', yield: 'Very Low', color: 'bg-amber-50' },
    { name: 'September', yield: 'Very Low', color: 'bg-amber-50' },
    { name: 'October', yield: 'Low', color: 'bg-amber-100' },
    { name: 'November', yield: 'Medium', color: 'bg-amber-300' },
    { name: 'December', yield: 'Medium', color: 'bg-amber-300' },
  ];

  return (
    <section id="bee-hive" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Bee Hive & Honey"
          subtitle="Our sustainable beekeeping operation supports biodiversity and produces premium organic honey."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-heading font-medium mb-4 text-green-900">Sustainable Beekeeping</h3>
            <p className="text-gray-600 mb-6">
              At PaharBari Organics, we currently maintain 60 active bee hives that play a crucial role 
              in pollinating our fruit trees and surrounding wild plants. Our beekeeping practice follows 
              organic principles, ensuring the health of our bee colonies and the purity of our honey.
            </p>
            <p className="text-gray-600 mb-6">
              We are committed to expanding our apiary to over 100 hives in the coming years, further 
              enhancing pollination across our farm and increasing our honey production capacity.
            </p>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
              <h4 className="font-medium text-amber-800 mb-3">Our Honey Production</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Pure, raw, unfiltered honey from diverse floral sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>No antibiotics, pesticides, or artificial additives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Seasonal varieties reflecting different flowering cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Careful extraction to preserve natural enzymes and nutrients</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="https://wa.me/8801729809879" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Organic Honey
            </a>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                src="https://i.postimg.cc/mkNKwN3M/niklas-stumpf-c-A8a6-CCa-A4-Y-unsplash.jpg" 
                alt="Beehives at PaharBari Organics" 
                className="w-auto h-auto"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-medium text-xl mb-4 text-amber-700">Honey Harvesting Calendar</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {months.map((month, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg ${month.color} text-center`}
                  >
                    <p className="font-medium text-amber-900">{month.name}</p>
                    <p className="text-sm text-amber-800">{month.yield}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * Yield levels indicate relative honey production throughout the year based on flowering seasons and weather conditions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-100 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-medium mb-2 text-amber-900">Our Expansion Plan</h3>
            <p className="text-amber-800">From 60 to 100+ bee hives over the next two years</p>
          </div>
          
          <div className="relative h-8 bg-white rounded-full overflow-hidden mb-4">
            <div className="absolute top-0 left-0 h-full w-3/5 bg-amber-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
              <span className="text-xs font-medium">Current: 60 hives</span>
              <span className="text-xs font-medium">Goal: 100+ hives</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-amber-800 mb-2">Phase 1</h4>
              <p className="text-amber-700">60 → 75 hives</p>
              <p className="text-sm text-gray-600 mt-2">By end of 2025</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-amber-800 mb-2">Phase 2</h4>
              <p className="text-amber-700">75 → 90 hives</p>
              <p className="text-sm text-gray-600 mt-2">By mid 2026</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-amber-800 mb-2">Phase 3</h4>
              <p className="text-amber-700">90 → 100+ hives</p>
              <p className="text-sm text-gray-600 mt-2">By end of 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};