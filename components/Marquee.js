import styles from './Marquee.module.scss';
import { Logo } from './Logo';
import { Button } from '@components/Button';
import { useEffect, useState } from 'react';
import Waves from '../assets/svg/waves.svg';
import Star from '../assets/svg/star.svg';
import Trophy from '../assets/svg/trophy.svg';
import Natural from '../assets/svg/natural.svg';

export function Marquee({ item }) {
  let mobileDimension = 1024;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > mobileDimension) {
      setIsMobile(false);
    } else if (window.innerWidth < mobileDimension) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mobileDimension) {
        setIsMobile(false);
      } else if (window.innerWidth < mobileDimension) {
        setIsMobile(true);
      }
    };

    console.log(isMobile);

    window.addEventListener('resize', handleResize);

    return () => {
      console.log(isMobile);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.Marquee}>
      <div className={styles.MarqueeMain}>
        <div className={styles.MarqueeContent}>
          <span className={styles.Logo}>
            <Logo />
          </span>
          <h1>{item.title}</h1>
          <p className={styles.subtitle}>{item.subtitle}</p>
          {!isMobile ? (
            <div
              className={`${styles.buttonContainer} ${styles.buttonContainerDesktop}`}
            >
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
          ) : (
            ''
          )}
        </div>
        <div className={styles.MarqueeImage}>
          <svg
            viewBox="0 0 737 469"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <title>Marquee image mask</title>
              <clipPath id="marquee-shape">
                <path d="M725.779,220.575C666.707,392.517 521.11,496.962 320.681,462.416C122.125,428.201 0,342.413 0,220.575C0,98.754 162.479,0 362.89,0C563.31,0 790.425,32.444 725.779,220.575" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#marquee-shape)"
              xlinkHref={item.photo}
            ></image>
          </svg>
        </div>
        {isMobile ? (
          <div
            className={`${styles.buttonContainer} ${styles.buttonContainerMobile}`}
          >
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
        ) : (
          ''
        )}
      </div>
      <div className={styles.promises}>
        <div className={styles.iconSet}>
          <section>
            <div className={styles.icon}>
              <Trophy />
            </div>
            <p>Top Chiropractor in the Raleigh Triangle</p>
          </section>
          <section>
            <div className={styles.icon}>
              <Natural />
            </div>
            <p>Get back pain relief without drugs or surgery</p>
          </section>
          <section>
            <div className={styles.icon}>
              <Star />
            </div>
            <p>Eliminating your pain is our top priority</p>
          </section>
        </div>
        <div className={styles.waves}>
          <Waves />
        </div>
      </div>
    </section>
  );
}
