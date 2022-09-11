import styles from './Content.module.scss';
import md from 'markdown-it';

export function Content({ item }) {
  return (
    <main className={styles.Content}>
      {item.content && (
        <div dangerouslySetInnerHTML={{ __html: md().render(item.content) }} />
      )}
    </main>
  );
}
