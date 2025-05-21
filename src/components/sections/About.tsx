import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About The Land</h2>
            <div className="h-1 w-20 bg-amber-400 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-green-700/80">
            <p className="mb-6">
              PaharBari Organics began as a dream to create a sanctuary where nature and human 
              habitation exist in perfect harmony. Situated in the pristine hills of Naikkhonchori, 
              our land spans across 5 acres of fertile soil blessed with natural streams and diverse 
              flora and fauna.
            </p>
            
            <p className="mb-6">
              In 2015, we embarked on a journey to transform what was once a barren hillside into 
              a thriving ecosystem. Through sustainable farming practices, we've nurtured the soil 
              back to health, planted thousands of trees, and created habitats for local wildlife.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Our Vision</h3>
                <p className="text-green-700/70">To create a sustainable model of living that respects and nurtures the environment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
                <p className="text-green-700/70">To cultivate organic produce and share the healing power of nature with all who visit</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Our Values</h3>
                <p className="text-green-700/70">Sustainability, community empowerment, and preservation of local biodiversity</p>
              </div>
            </div>

            <p>
              Today, PaharBari Organics stands as a testament to sustainable agriculture and eco-tourism. 
              Our orchards produce an abundance of organic fruits, while our cottages offer visitors 
              a chance to reconnect with nature. We're more than just a farm or a resort – we're a 
              living example of how humans can thrive while nurturing the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;