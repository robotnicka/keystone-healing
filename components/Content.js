import styles from './Content.module.scss';

export function Content({ children }) {
  return <main className={styles.Content}>{children}</main>;
}
