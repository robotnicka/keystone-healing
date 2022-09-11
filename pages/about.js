import Header from '@components/Header';
import Layout from '@components/Layout';
import Builder from '../components/Builder';
import { getBySlug } from 'pages';

export default function About({ about }) {
  return (
    <Layout title="About Us">
      <Header header="About us" />
      {about &&
        about.builder.map((item, index) => {
          return <Builder key={index} type={item.type} item={item} />;
        })}
    </Layout>
  );
}

export async function getStaticProps() {
  const about = getBySlug('content/pages', 'about');
  import { getBySlug } from 'pages';

    props: {
      about,
    },
  };
}
