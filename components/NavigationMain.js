import styles from './NavigationMain.module.scss';
import NavigationMenu from './NavigationMenu';

export default function NavigationMain({ props }) {
  return (
    <nav className={styles.nav}>
      <NavigationMenu />
    </nav>
  );
}
