import NavigationMain from './NavigationMain';
import NavigationSecondary from './NavigationSecondary';
import styles from './Topbar.module.scss';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <NavigationMain />
      <NavigationSecondary />
    </div>
  );
}
