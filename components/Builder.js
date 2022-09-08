import { Marquee } from './Marquee.js';
import { Contact } from './Contact.js';
import { Panels } from './Panels.js';

function Content({ item }) {
  return <div>{item.content}</div>;
}

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>;
}

const components = {
  marquee: Marquee,
  content: Content,
  contactform: Contact,
  panels: Panels,
  cta: Cta,
};

export default function Builder(props) {
  const Component = components[props.type];

  return <Component item={props.item} />;
}
