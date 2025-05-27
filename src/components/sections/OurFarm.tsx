import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { FruitCard } from '../common/FruitCard';
import { 
  Banana, 
  Citrus, 
  Coffee, 
  Grape
} from 'lucide-react';

export const OurFarm: React.FC = () => {
  const fruits = [
    {
      title: 'Cashew',
      count: '500+ Trees',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M5 11c-1.5 0-3-1.5-3-3s1.5-3 3-3c0-1.5 1.5-3 3-3s3 1.5 3 3M12 8c1.5 0 3-1.5 3-3s-1.5-3-3-3M16 19c0 1.5 1.5 3 3 3s3-1.5 3-3-1.5-3-3-3M6.5 12C5 12 3 13.5 3 16s2 4 4 4c2.5 0 4-2 4-4"/></svg>
    },
    {
      title: 'Coffee',
      count: '400+ Plants',
      icon: <Coffee className="w-8 h-8" />
    },
    {
      title: 'Banana',
      count: '500+ Trees',
      icon: <Banana className="w-8 h-8" />
    },
    {
      title: 'Lemon',
      count: '500+ Trees',
      icon: <Citrus className="w-8 h-8" />
    },
    {
      title: 'Orange',
      count: '200 Trees',
      icon: <Citrus className="w-8 h-8" />
    },
    {
      title: 'Mango',
      count: '50 Trees',
      icon: <svg xmlns="http://www.w3.org/2000/svg\" viewBox="0 0 24 24\" fill="none\" stroke="currentColor\" strokeWidth="2\" strokeLinecap="round\" strokeLinejoin="round\" className="w-8 h-8"><path d="M12 4c1.5 0 3 1.5 3 3M4 8c-1 4 1 8 5 8.5a3.5 3.5 0 0 0 7 0c4-.5 6-4.5 5-8.5M9 7c0-1.5 1.5-3 3-3"/></svg>
    },
    {
      title: 'Grapes',
      count: '100+ Vines',
      icon: <Grape className="w-8 h-8" />
    },
    {
      title: 'Other Fruits',
      count: '100+ Varieties',
      icon: <svg xmlns="http://www.w3.org/2000/svg\" viewBox="0 0 24 24\" fill="none\" stroke="currentColor\" strokeWidth="2\" strokeLinecap="round\" strokeLinejoin="round\" className="w-8 h-8"><path d="M17.5 6.5c0 2.5-4.5 6.5-4.5 6.5s-4.5-4-4.5-6.5S10.5 2 13 2s4.5 2 4.5 4.5zM18 12l4 9M12 22c-1.7 0-3-1.3-3-3 0-.6.4-2 3-2s3 1.4 3 2c0 1.7-1.3 3-3 3zM5 5l-1 1"/></svg>
    }
  ];

  return (
    <section id="our-farm" className="section-padding bg-green-50">
      <div className="container-custom">
        <SectionHeading 
          title="Our Farm"
          subtitle="Explore our diverse fruit plantation featuring hundreds of trees spread across our 40-acre hill farm."
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fruits.map((fruit, index) => (
            <FruitCard
              key={index}
              title={fruit.title}
              count={fruit.count}
              icon={fruit.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/8801729809879" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Order Fresh Fruits Now
          </a>
        </div>
      </div>
    </section>
  );
};