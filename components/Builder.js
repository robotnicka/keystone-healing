import { Marquee } from './Marquee.js';
import { Contact } from './Contact.js';
import { Content } from './Content.js';
import { Panels } from './Panels.js';
import { Testimonials } from './Testimonials.js';
import { TestimonialFeatured } from './TestimonialFeatured.js';

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>;
}

const components = {
  marquee: Marquee,
  content: Content,
  contactform: Contact,
  testimonials: Testimonials,
  testimonialsFeatured: TestimonialFeatured,
  panels: Panels,
  cta: Cta,
};

export default function Builder(props) {
  const Component = components[props.type];

  return <Component item={props.item} />;
}
