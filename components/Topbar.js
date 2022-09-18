import siteMetadata from 'assets/data/siteMetadata';
import { useState } from 'react';
import NavigationMain from './NavigationMain';
import NavigationSecondary from './NavigationSecondary';
import styles from './Topbar.module.scss';
import Phone from '../assets/svg/phone.svg';

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.mobileMenu}>
        <button onClick={toggleOpen} className={styles.button}>
          Menu
        </button>
        <a className={styles.phone} href={`tel:${siteMetadata.phoneNumber}`}>
          <span className={styles.phoneIcon}>
            <Phone />
          </span>
        </a>
      </div>
      <div className={isOpen ? styles.openMenu : styles.closedMenu}>
        <NavigationMain />
        {isOpen && (
          <button onClick={toggleOpen} className={styles.closeButton}>
            X
          </button>
        )}
      </div>
      <NavigationSecondary />
    </div>
  );
}
