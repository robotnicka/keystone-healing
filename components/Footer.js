import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with{' '}
        <img
          src="/keystonelogo.svg"
          alt="Keystone Logo"
          className={styles.logo}
        />{' '}
        for you
      </footer>
    </>
  )
}
