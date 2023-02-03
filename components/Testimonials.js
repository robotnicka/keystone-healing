import { Testimonial } from './parts/Testimonial';

export function Testimonials({ item }) {
  return (
    <section>
      {item.testimonials.map((testimonial, index) => (
        <figure key={index}>
          <blockquote>
            <p>{testimonial.quote}</p>
          </blockquote>
          {testimonial.author && (
            <figcaption>— {testimonial.author}</figcaption>
          )}
        </figure>
      ))}
    </section>
  );
}
