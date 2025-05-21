import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'farm' | 'lake' | 'cottage';
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: 'https://i.postimg.cc/d0m8LbKt/pexels-eduardo-vite-211353151-29799576.jpg',
    alt: 'Organic farm with vegetable rows',
    category: 'farm'
  },
  {
    id: 2,
    src: 'https://i.postimg.cc/D0DG9F15/pexels-quang-nguyen-vinh-222549-11669201.jpg',
    alt: 'Person harvesting fresh produce',
    category: 'farm'
  },
  {
    id: 3,
    src: 'https://i.postimg.cc/G2XkdVW8/pexels-andersonguerra-1171521.jpg',
    alt: 'Tranquil lake view with mountains',
    category: 'lake'
  },
  {
    id: 4,
    src: 'https://i.postimg.cc/DwGdLCXH/pexels-blue-ox-studio-218748-2063892.jpg
',
    alt: 'Lake surrounded by trees',
    category: 'lake'
  },
  {
    id: 5,
    src: 'https://i.postimg.cc/MHrbbNt2/pexels-daniel-reche-718241-1556665.jpg',
    alt: 'Cozy cottage exterior',
    category: 'cottage'
  },
  {
    id: 6,
    src: 'https://i.postimg.cc/VsHjTy92/pexels-michael-burrows-7125686.jpg',
    alt: 'Cottage interior with natural light',
    category: 'cottage'
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'farm' | 'lake' | 'cottage'>('all');
  
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  return (
    <section id="gallery" className="py-20 bg-green-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h2>
          <p className="text-lg text-green-100/80 max-w-2xl mx-auto">
            Explore the natural beauty and tranquility of PaharBari through our gallery.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-green-800/50 rounded-lg p-1">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-amber-500 text-white' 
                  : 'text-green-100 hover:bg-green-700/50'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('farm')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'farm' 
                  ? 'bg-amber-500 text-white' 
                  : 'text-green-100 hover:bg-green-700/50'
              }`}
            >
              Farm
            </button>
            <button 
              onClick={() => setFilter('lake')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'lake' 
                  ? 'bg-amber-500 text-white' 
                  : 'text-green-100 hover:bg-green-700/50'
              }`}
            >
              Lake
            </button>
            <button 
              onClick={() => setFilter('cottage')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'cottage' 
                  ? 'bg-amber-500 text-white' 
                  : 'text-green-100 hover:bg-green-700/50'
              }`}
            >
              Cottage
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
