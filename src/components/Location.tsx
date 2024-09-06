import Link from 'next/link';
import styles from './Location.module.css';

const Location: React.FC = () => {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.7152779255425!2d15.541885676682574!3d48.14368738040686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4772778b2a59ebef%3A0x8ee5f5a9d381daaa!2sPielachtaler-Flohmarkt%20Ober-Grafendorf!5e1!3m2!1sde!2sat!4v1725132948548!5m2!1sde!2sat"
                width="100%"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
}

export default Location;