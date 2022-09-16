export const Testimonial = ({ item }) => {
  return (
    <figure style={styles.Quote}>
      <blockquote>
        <p>{item.quote}</p>
      </blockquote>
      {item.author && <figcaption>— {item.author}</figcaption>}
    </figure>
  );
};
