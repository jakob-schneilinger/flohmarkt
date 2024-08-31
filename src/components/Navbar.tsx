import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../img/PielachtalerFlohmarktLogoZugeschnitten.png'
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/">
          <Image 
            alt="Logo"
            src={img}
            height={100}
            >
            
          </Image>
        </Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/info">Infos</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
        <li>
          <Link href="/location">Standort</Link>
        </li>
        <li>
          <Link href="/impressum">Impressum</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
