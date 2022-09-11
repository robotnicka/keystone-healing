import Layout from '@components/Layout';
import Builder from '../components/Builder';
import Header from '@components/Header';
import { getBySlug } from 'pages';

export default function Contact({ contact }) {
  return (
    <Layout title="Contact Us">
      <Header header="Contact Us" />
      {contact &&
        contact.builder.map((item, index) => {
          return <Builder key={index} type={item.type} item={item} />;
        })}
    </Layout>
  );
}

export async function getStaticProps() {
  const contact = getBySlug('content/pages', 'contact');

  return {
    props: {
      contact,
    },
  };
}
