import styles from './Panels.module.scss';
import Arrow from './icons/arrow.svg';

export function Panels({ item }) {
  return (
    <section className={styles.container}>
      {item.panels.map((panel, index) => (
        <article key={index}>
          <h3>{panel.title}</h3>
          <p>{panel.paragraph}</p>
          {panel.link && (
            <a className={styles.link} href={panel.link}>
              Read more{' '}
              <span className={styles.icon}>
                <Arrow />
              </span>
            </a>
          )}
        </article>
      ))}
    </section>
  );
}
