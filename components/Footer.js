import siteMetadata from 'assets/data/siteMetadata';
import styles from './Footer.module.scss';
import NavigationFooter from './NavigationFooter';
import Keystonelogo from '../assets/svg/keystonelogo.svg';
import Location from '../assets/svg/location.svg';
import Phone from '../assets/svg/phone.svg';

export default function Footer() {
  const date = new Date();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <section className={`${styles.column} ${styles.logoColumn}`}>
            <span className={styles.logoContainer}>
              <span className={styles.logo}>
                <Keystonelogo />
              </span>
            </span>
          </section>
          <section className={styles.column}>
            <h4>
              <span className={styles.locationIcon}>
                <Location />
              </span>
              Location
            </h4>
            {siteMetadata.address}
            <h4>
              <span className={styles.phoneIcon}>
                <Phone />
              </span>
              Call Us
            </h4>
            {siteMetadata.phoneNumber}
          </section>
          <section className={styles.column}>
            <h4>Site menu</h4>
            <NavigationFooter />
          </section>
          <section className={styles.column}>
            <h4>Hours</h4>
            <ul>
              <li>Tuesday: 2:00pm - 7:00pm</li>
              <li>Wednesday: 9:00am - 6:00pm </li>
              <li>Thursday: 2:00p - 7:00pm</li>
              <li>Friday: 9:00am - 6:00pm</li>
              <li>Saturday: 9:00am - 1:00pm</li>
            </ul>
          </section>
        </div>
        <div className={styles.copyright}>
          &copy; {date.getFullYear()} {siteMetadata.longCompanyName}
        </div>
      </footer>
    </>
  );
}
