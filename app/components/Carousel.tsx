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
    <div className="relative carousel-wrap">
      <button
        className="absolute top-1/2 left-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded sm:left-1"
        onClick={goToPreviousSlide}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      {images.length > 0 && (

<div className="carousel-content">
  <div className="w-64 h-48 md:w-96 md:h-72 lg:w-128 lg:h-96">
    <Image
      src={images[currentImageIndex].url}
      alt={images[currentImageIndex].alt}
      layout="fill"
      objectFit="cover"
      priority={true}
    />
  </div>
          <p className="text-center text-white bg-black bg-opacity-50 text-base sm:text-lg">
            {images[currentImageIndex].legend}
          </p>
        </div>
      )}

      <button
        className="absolute top-1/2 right-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded sm:right-1"
        onClick={goToNextSlide}
        aria-label="Next image"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
