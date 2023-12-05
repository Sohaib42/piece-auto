'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface CarouselImage {
  url: string;
  alt: string;
  legend: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(goToNextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  return (
    <div className="carousel-wrap relative">
      <div className="carousel-content inline-block relative">
        <button
          className="absolute top-1/2 left-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded transform -translate-y-1/2"
          onClick={goToPreviousSlide}
          aria-label="Previous image"
        >
          &#10094;
        </button>

        {images.length > 0 && (
          <div className="w-[80vw] h-auto lg:max-h-[80vh] md:max-h-[60vh] sm:max-h-[36vh] min-h-[20vh] relative lg:min-h-[60vh] md:min-h-[40vh] sm:min-h-[26vh]">
            <Image
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              fill={true}
              className="object-contain" // w-full pour la largeur, object-contain pour le comportement de l'image
              priority={true}
            />
          </div>
        )}

        <button
          className="absolute top-1/2 right-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded transform -translate-y-1/2"
          onClick={goToNextSlide}
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};


export default Carousel;
