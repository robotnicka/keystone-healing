import { Button } from './Button';
import { Testimonial } from './parts/Testimonial';
import styles from './TestimonialFeatured.module.scss';
import Quote from '../assets/svg/quote.svg';

export function TestimonialFeatured({ item }) {
  return (
    <section className={styles.testimonialFeatured}>
      <h2 className={styles.header}>Testimonials</h2>
      <figure className={styles.quoteContainer}>
        <span className={styles.icon}>
          <Quote />
        </span>
        <blockquote className={styles.quote}>
          <p>{item.quote}</p>
        </blockquote>
        {item.author && (
          <figcaption className={styles.author}>— {item.author}</figcaption>
        )}
      </figure>
      <Button pointTo={'/Testimonials'} design="secondary">
        See more reviews
      </Button>
    </section>
  );
}
