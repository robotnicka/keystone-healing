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
        <button onClick={toggleOpen}> =</button>{' '}
        <span className={styles.phone}>phoneicon</span>
      </div>
      <div className={isOpen ? styles.openMenu : styles.closedMenu}>
        <NavigationMain />
      </div>
      <NavigationSecondary />
    </div>
  );
}
