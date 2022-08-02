import siteMetadata from 'assets/data/siteMetadata';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <section className={styles.column}>
            <span className={styles.logo}>
              <img
                src="/keystonelogo.svg"
                alt="Keystone Logo"
                className={styles.logo}
              />
            </span>
          </section>
          <section className={styles.column}>
            <h4>Location</h4>
            {siteMetadata.address}
            <h4>Call Us</h4>
            {siteMetadata.phoneNumber}
          </section>
          <section className={styles.column}>
            <h4>Location</h4>
            {siteMetadata.address}
            <h4>Call Us</h4>
            {siteMetadata.phoneNumber}
          </section>
          <section className={styles.column}>
            <h4>hours</h4>
          </section>
        </div>
        <div className={styles.copyright}>
          (c) year {siteMetadata.companyName} {siteMetadata.copyright}
        </div>
      </footer>
    </>
  );
}
