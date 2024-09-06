import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../img/PielachtalerFlohmarktLogoZugeschnitten.png'
import styles from './Navbar.module.css';

type ActiveType = "home" | "info" | "contact" | "location" | "impressum";

interface NavbarProps {
  active?: ActiveType;
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
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
        <li className={active === 'home' ? styles.navbarLinksActive : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={active === 'info' ? styles.navbarLinksActive : ""}>
          <Link href="/info">Infos</Link>
        </li>
        <li className={active === 'contact' ? styles.navbarLinksActive : ""}>
          <Link href="/contact">Kontakt</Link>
        </li>
        <li className={active === 'location' ? styles.navbarLinksActive : ""}>
          <Link href="/location">Standort</Link>
        </li>
        <li className={active === 'impressum' ? styles.navbarLinksActive : ""}>
          <Link href="/impressum">Impressum</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
