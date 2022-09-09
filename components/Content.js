import styles from './Content.module.scss';

export function Content({ item }) {
  return <main className={styles.Content}>{item.content}</main>;
}
