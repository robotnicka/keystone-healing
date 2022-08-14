import { Marquee } from './Marquee.js';

function Content({ item }) {
  return <div>{item.content}</div>;
}

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>;
}

const components = {
  marquee: Marquee,
  content: Content,
  cta: Cta,
};

export default function Builder(props) {
  const Component = components[props.type];

  return <Component item={props.item} />;
}
