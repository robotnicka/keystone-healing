export const Testimonial = ({ item }) => {
  return (
    <figure>
      <blockquote>
        <p>{item.quote}</p>
      </blockquote>
      {item.author && <figcaption>— {item.author}</figcaption>}
    </figure>
  );
};
