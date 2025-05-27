import React from 'react';

interface InvestmentCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  primary?: boolean;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ 
  title, 
  description, 
  features,
  buttonText,
  buttonLink,
  primary = false
}) => {
  return (
    <div className={`card ${primary ? 'border-2 border-green-500' : ''}`}>
      <div className={`p-6 ${primary ? 'bg-green-50' : ''}`}>
        <h3 className="text-2xl font-heading font-medium mb-3 text-green-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href={buttonLink} 
          className={primary ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};