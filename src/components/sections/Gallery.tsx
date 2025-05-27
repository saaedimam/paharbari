import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { GalleryImage } from '../common/GalleryImage';

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/bw0zskS7/pexels-andersonguerra-1171521.jpg",
      alt: "Hills and valleys of the farm"
    },
    {
      src: "https://i.postimg.cc/P5nXX2Jb/pexels-blue-ox-studio-218748-2063892.jpg",
      alt: "Fruit trees in bloom"
    },
    {
      src: "https://i.postimg.cc/PqtdZJmP/pexels-daniel-reche-718241-1556665.jpg",
      alt: "Lake view"
    },
    {
      src: "https://i.postimg.cc/ZRnZ7Qsm/pexels-eduardo-vite-211353151-29799576.jpg",
      alt: "Coffee plantation"
    },
    {
      src: "https://i.postimg.cc/9fJCB2p1/pexels-michael-burrows-7125686.jpg",
      alt: "Beehives"
    },
    {
      src: "https://i.postimg.cc/Vvbw1CcH/pexels-quang-nguyen-vinh-222549-11669201.jpg",
      alt: "Orange grove"
    },
    {
      src: "https://i.postimg.cc/Y9P7JxTW/pexels-snapwire-7310.jpg",
      alt: "Banana trees"
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-green-900 text-white">
      <div className="container-custom">
        <SectionHeading 
          title="Our Gallery"
          subtitle="Visual glimpses of our farm, orchards, beehives, and the natural beauty of Naikkonchori."
          center
          light
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <GalleryImage 
              key={index}
              src={image.src}
              alt={image.alt}
              className={index === 0 || index === 7 ? "sm:col-span-2 aspect-video" : "aspect-square"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};