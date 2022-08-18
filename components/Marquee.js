import styles from './Marquee.module.scss';
import { Logo } from './Logo';
import { Button } from '@components/Button';
import Link from 'next/link';

export function Marquee({ item }) {
  return (
    <section className={styles.Marquee}>
      <div className={styles.MarqueeContent}>
        <span className={styles.Logo}>
          <Logo />
        </span>
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
        <div className={styles.buttonContainer}>
          {item.buttons.map((button, index) => (
            <Button
              pointTo={button.link}
              key={index}
              design={index == 0 ? 'primary' : 'secondary'}
            >
              {button.btntitle}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.MarqueeImage}>
        <svg
          viewBox="0 0 737 469"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <title>Marquee image</title>
            <clipPath id="marquee-shape">
              <path d="M725.779,220.575C666.707,392.517 521.11,496.962 320.681,462.416C122.125,428.201 0,342.413 0,220.575C0,98.754 162.479,0 362.89,0C563.31,0 790.425,32.444 725.779,220.575" />
            </clipPath>
          </defs>
          <image clipPath="url(#marquee-shape)" xlinkHref={item.photo}></image>
        </svg>
      </div>
    </section>
  );
}
