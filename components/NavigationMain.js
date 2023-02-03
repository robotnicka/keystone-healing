import styles from './NavigationMain.module.scss';
import NavigationMenu from './NavigationMenu';
import Keystonelogoreverse from '../assets/svg/keystonelogoreverse.svg';

export default function NavigationMain({ props }) {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logoMobile}>
        <Keystonelogoreverse />
      </a>
      <NavigationMenu />
    </nav>
  );
}
