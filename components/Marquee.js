import styles from './Marquee.module.scss';
import { Logo } from './Logo';
import { Button } from '@components/Button';

export function Marquee({ item }) {
  return (
    <section className={styles.Marquee}>
      <div className={styles.MarqueeContent}>
        <span className={styles.Logo}>
          <Logo />
        </span>
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
        <div>
          <Button>Book Appointment</Button>
          <Button type="secondary">Contact Us</Button>
        </div>
      </div>
      <div className={styles.MarqueeImage}>
        <img src={item.photo} />
      </div>
    </section>
  );
}
