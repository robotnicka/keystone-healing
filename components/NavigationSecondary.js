import siteMetadata from 'assets/data/siteMetadata';
import styles from './NavigationSecondary.module.scss';

export default function NavigationSecondary({ props }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href={`tel:${siteMetadata.phoneNumber}`}>
            <span className={styles.phoneIcon}>
              <img src="/phone.svg" />
            </span>
            {siteMetadata.phoneNumber}
          </a>
        </li>
        <li>
          <a href="#contact-us">
            <span className={styles.calendarIcon}>
              <img src="/calendar.svg" />
            </span>
            Request Appointment
          </a>
        </li>
        <li>
          <a href="#contact-us">
            <span className={styles.mailIcon}>
              <img src="/mail.svg" />
            </span>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
