import { Testimonial } from './parts/Testimonial';
import Quote from '../assets/svg/quote.svg';
import styles from './Testimonials.module.scss';

export function Testimonials({ item }) {
  return (
    <section className={styles.testimonials}>
      {item.testimonials?.map((testimonial, index) => (
        <figure key={index} className={styles.quoteContainer}>
          <span className={styles.icon}>
            <Quote />
          </span>
          <blockquote className={styles.quote}>
            <p>{testimonial.quote}</p>
          </blockquote>
          {testimonial.author && (
            <figcaption className={styles.author}>
              — {testimonial.author.name}
            </figcaption>
          )}
        </figure>
      ))}
    </section>
  );
}
