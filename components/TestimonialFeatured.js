import { Button } from './Button';
import { Testimonial } from './parts/Testimonial';

export function TestimonialFeatured({ item }) {
  return (
    <section>
      <h3>Testimonials</h3>
      <figure >
        <blockquote>
          <p>{item.quote}</p>
        </blockquote>
        {item.author && <figcaption>— {item.author}</figcaption>}
      </figure>
      <Button pointTo={'/Testimonials'} design="secondary">
        See more reviews
      </Button>
    </section>
  );
}
