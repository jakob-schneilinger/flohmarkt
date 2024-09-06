import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./AboutUs.module.css";
import { SliderImages } from '@/img/Sliderimages';

const AboutUsSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [SliderImages.length]);

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselSlides} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {SliderImages.map((image, index) => (
                    <div className={styles.slide} key={index}>
                        <Image src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className={styles.carouselIndicators}>
                {SliderImages.map((_, index) => (
                    <span
                        key={index}
                        className={styles[`indicator ${index === currentSlide ? 'active' : ''}`]}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutUsSlider;
