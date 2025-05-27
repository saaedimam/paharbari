import React from 'react';

interface FruitCardProps {
  title: string;
  count: string;
  icon: React.ReactNode;
  description?: string;
}

export const FruitCard: React.FC<FruitCardProps> = ({ 
  title, 
  count, 
  icon,
  description 
}) => {
  return (
    <div className="card group hover:scale-105">
      <div className="p-6">
        <div className="mb-4 text-green-600 bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-medium mb-2 text-green-900">{title}</h3>
        <p className="text-amber-600 font-bold mb-2">{count}</p>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </div>
  );
};