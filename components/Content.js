import styles from './Content.module.scss';
import md from 'markdown-it';

export function Content({ item }) {
  return (
    <main className={styles.Content}>
      <div dangerouslySetInnerHTML={{ __html: md().render(item.content) }} />
      {console.log(item.content)}
    </main>
  );
}
