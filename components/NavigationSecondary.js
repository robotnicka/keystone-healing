import siteMetadata from 'assets/data/siteMetadata';
import styles from './NavigationSecondary.module.scss';

export default function NavigationSecondary({ props }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">
            <span className={styles.phoneIcon}>
              <img src="/phone.svg" />
            </span>
            {siteMetadata.phoneNumber}
          </a>
        </li>
        <li>
          <a href="#contact-us">
            <span></span>Request Appointment
          </a>
        </li>
      </ul>
    </nav>
  );
}
