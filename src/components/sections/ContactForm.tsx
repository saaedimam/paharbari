import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentModel: '',
    amount: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your interest! We will contact you soon.'
    });
    
    // In a real implementation, you would send this data to an API
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      investmentModel: '',
      amount: '',
      message: ''
    });
  };

  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Investor Contact Form"
          subtitle="Interested in investing in PaharBari Organics? Fill out the form below and we'll get back to you."
          center
        />
        
        <div className="max-w-3xl mx-auto">
          {formStatus.submitted ? (
            <div className={`p-6 rounded-lg mb-8 text-center ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="+880 1XX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="investmentModel" className="block text-gray-700 mb-2">Investment Model *</label>
                  <select
                    id="investmentModel"
                    name="investmentModel"
                    value={formData.investmentModel}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select Investment Model</option>
                    <option value="Model B">Model B – Product-based Returns</option>
                    <option value="Model C">Model C – Hybrid Returns</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-gray-700 mb-2">Investment Amount (BDT) *</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="5000"
                    max="20000"
                    className="input"
                    placeholder="Enter amount between 5,000-20,000"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input"
                    placeholder="Any specific questions or requirements..."
                  ></textarea>
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Investment Interest
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Prefer to talk directly? Contact us at:
            </p>
            <div className="mt-2">
              <a 
                href="mailto:paharbariorganics@gmail.com" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                paharbariorganics@gmail.com
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a 
                href="tel:+8801729809879" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                +8801729809879
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};