import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { InvestmentCard } from '../common/InvestmentCard';

export const Investment: React.FC = () => {
  return (
    <section id="investment" className="section-padding bg-green-50">
      <div className="container-custom">
        <SectionHeading 
          title="Investment Opportunities"
          subtitle="Join us in growing sustainable agriculture by investing in our farm operations with flexible investment models."
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <InvestmentCard
            title="Model B – Product Returns"
            description="Invest and receive returns in the form of fresh organic produce and honey."
            features={[
              "Investment range: BDT 5,000 to 10,000",
              "Receive seasonal fruits from our farm",
              "Premium organic honey allocation",
              "Free farm visits and tours",
              "Updates on farm development"
            ]}
            buttonText="Join as Product Investor"
            buttonLink="#contact-form"
          />
          
          <InvestmentCard
            title="Model C – Hybrid Returns"
            description="Benefit from both product returns and profit sharing with higher investment tiers."
            features={[
              "Investment range: BDT 10,000 to 20,000",
              "Annual profit sharing based on investment",
              "Premium selection of seasonal fruits",
              "Priority access to limited harvest items",
              "Exclusive invitations to farm events"
            ]}
            buttonText="Join as Hybrid Investor"
            buttonLink="#contact-form"
            primary
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-heading font-medium mb-6 text-green-900">Investment Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-medium mb-2">Choose Your Model</h4>
              <p className="text-gray-600 text-sm">Select between product-based or hybrid investment models based on your preference.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-medium mb-2">Complete Registration</h4>
              <p className="text-gray-600 text-sm">Fill out our investor form with your details and investment preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-medium mb-2">Bank Transfer</h4>
              <p className="text-gray-600 text-sm">Complete your investment through secure bank transfer and receive confirmation.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Ready to join our community of eco-conscious investors? Fill out the form below or contact us directly for more information.
            </p>
            <a href="#contact-form" className="btn-primary">
              Join as an Investor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};