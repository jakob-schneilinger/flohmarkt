import styles from './AboutUs.module.css';

import React from 'react';
import { SliderImages } from '@/img/Sliderimages';
import AboutUsSlider from './AboutUsSlider';

const AboutUs: React.FC = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.textContent}>
                <h2>About Our Team</h2>
                <p>We are a dedicated team of professionals passionate about delivering the best results for our clients. With years of experience in the industry, we combine creativity, technical expertise, and strategic thinking to bring your vision to life.</p>
            </div>
            <div className={styles.carousel}>
                <AboutUsSlider />
            </div>
        </section>
    );
};

export default AboutUs;