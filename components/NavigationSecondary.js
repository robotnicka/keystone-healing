import siteMetadata from 'assets/data/siteMetadata';
import styles from './NavigationSecondary.module.scss';
import Phone from '../assets/svg/phone.svg';
import Calendar from '../assets/svg/calendar.svg';
import Mail from '../assets/svg/mail.svg';
import Link from 'next/link';

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
          <Link href="/contact">
            <a>
              <span className={styles.calendarIcon}>
                <Calendar />
              </span>
              Request Appointment
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <span className={styles.mailIcon}>
                <Mail />
              </span>
              Contact Us
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
