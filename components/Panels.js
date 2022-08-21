export function Panels({ item }) {
  return (
    <section>
      <article>
        <h3>{item.title1}</h3>
        <p>{item.paragraph1}</p>
        {item.link1 && <a href={item.link1}>{item.link1}</a>}
      </article>
      <article>
        <h3>{item.title2}</h3>
        <p>{item.paragraph2}</p>
        {item.link2 && <a href={item.link2}>{item.link2}</a>}
      </article>
      <article>
        <h3>{item.title3}</h3>
        <p>{item.paragraph3}</p>
        {item.link3 && <a href={item.link3}>{item.link3}</a>}
      </article>
    </section>
  );
}
