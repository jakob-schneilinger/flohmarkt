
import FacebookIcon from './FacebookIcon';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerItem}>
                <Link href="/contact" className={styles.footerHeader}>Kontakt:</Link>
                <a href="mailto:office@ek19.at">E-Mail: <b>office@ek19.at</b></a>
                <a href="tel:+436503268360">Telefon: <b>+43 650 3268360</b></a>
            </div>
            <div className={styles.footerItemCenter}>
                <a className={styles.centerIcon} target="_blank" href="https://www.facebook.com/PielachtalerFlohmarkt">
                    <b>Facebook</b>
                    <FacebookIcon />
                </a>
            </div>
            <div className={styles.footerItemRight}>
                <Link href="/impressum">Impressum</Link>
                <Link href="/privacypolicy">Datenschutzerklärung</Link>
                <p>©2024 von Pielachtaler Flohmarkt</p>
            </div>
        </div>
    );
}

export default Footer;