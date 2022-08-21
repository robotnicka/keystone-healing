import siteMetadata from 'assets/data/siteMetadata';
import { useState } from 'react';
import NavigationMain from './NavigationMain';
import NavigationSecondary from './NavigationSecondary';
import styles from './Topbar.module.scss';

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
          <img src="/phone.svg" />
        </a>
      </div>
      <div className={isOpen ? styles.openMenu : styles.closedMenu}>
        <NavigationMain />
      </div>
      <NavigationSecondary />
    </div>
  );
}
