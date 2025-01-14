import React from 'react';
import Image from 'next/image';

const BentoGrid = () => {
  const images = [
    { src: '/placeholder.svg?height=300&width=300', alt: 'Wedding Ceremony' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Wedding Reception' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Wedding Decor' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Wedding Cake' },
    { src: '/placeholder.svg?height=300&width=300', alt: 'Wedding Flowers' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden rounded-lg ${
            index === 0 ? 'col-span-2 row-span-2' : ''
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={300}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;

