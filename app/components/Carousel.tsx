
'use client'
// N'oubliez pas d'importer Image depuis 'next/image'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Définissez une interface pour les propriétés de vos images
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
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [goToNextSlide, currentImageIndex, images.length]);

  return (
    <div className="relative carousel-wrap">
      {/* Bouton Précédent */}
      <button
        className="absolute top-1/2 left-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded"
        onClick={goToPreviousSlide}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      {/* Image du Carrousel */}
      {images.length > 0 && (
        <div className="carousel-content">
          <div style={{ width: '50vw', height: '80vh' }}>
            <Image
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              layout="fill" // Utilisez "fill" pour que l'image remplisse le conteneur
              objectFit="cover"
              priority={true}
            />
          </div>

          <p className="text-center text-white bg-black bg-opacity-50">
            {images[currentImageIndex].legend}
          </p>
        </div>
      )}

      {/* Bouton Suivant */}
      <button
        className="absolute top-1/2 right-2 z-10 p-2 text-white bg-black bg-opacity-50 rounded"
        onClick={goToNextSlide}
        aria-label="Next image"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
