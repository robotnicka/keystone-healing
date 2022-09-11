import styles from './Header.module.scss';

export default function Header({ header }) {
  return <h1 className={styles.Header}>{header}</h1>;
}
