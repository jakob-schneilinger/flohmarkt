"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';
import { SliderImages } from '@/img/Sliderimages';

interface SliderProps {
  time?: number; // Optional prop to control slider speed in milliseconds
}

const Slider: React.FC<SliderProps> = ({ time = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start at 1 due to the prepended duplicate slide
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = SliderImages.length;

  useEffect(() => {
    if (isPaused || isZoomed) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, time);

    return () => clearInterval(interval);
  }, [time, isPaused, isZoomed]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setIsPaused(false);
    }, time);
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setTimeout(() => {
      setIsPaused(false);
    }, time);
  };

  const handleZoom = () => {
    setIsZoomed(true);
    setIsPaused(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    setIsPaused(false);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div
          ref={sliderRef}
          className={styles.sliderInner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SliderImages.map((image, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                className={`${styles.image} ${isZoomed ? styles.zoomed : ''}`}
                onClick={handleZoom}
              />
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        <button className={styles.prev} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.next} onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Zoomed-in view */}
      {isZoomed && (
        <div className={styles.zoomedImageContainer} onClick={handleCloseZoom}>
          <Image
            src={SliderImages[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={styles.zoomedImage}
          />
          <button className={styles.closeButton} onClick={handleCloseZoom}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
