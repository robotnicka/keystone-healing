import Header from '@components/Header';
import Layout from '@components/Layout';
import Builder from '../components/Builder';

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
