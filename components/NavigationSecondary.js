import siteMetadata from 'assets/data/siteMetadata';
import styles from './NavigationSecondary.module.scss';
import Phone from '../assets/svg/phone.svg';
import Calendar from '../assets/svg/calendar.svg';
import Mail from '../assets/svg/mail.svg';

export default function NavigationSecondary({ props }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href={`tel:${siteMetadata.phoneNumber}`}>
            <span className={styles.phoneIcon}>
              <span className={styles.phoneIcon}>
                <Phone />
              </span>
            </span>
            {siteMetadata.phoneNumber}
          </a>
        </li>
        <li>
          <a href="#contact-us">
            <span className={styles.calendarIcon}>
              <Calendar />
            </span>
            Request Appointment
          </a>
        </li>
        <li>
          <a href="#contact-us">
            <span className={styles.mailIcon}>
              <Mail />
            </span>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
