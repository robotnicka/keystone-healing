import Header from '@components/Header';
import Layout from '@components/Layout';
import Builder from '../components/Builder';

export default function Services({ services }) {
  return (
    <Layout title="Services">
      <Header header="Services" />
      {services &&
        services.builder.map((item, index) => {
          return <Builder key={index} type={item.type} item={item} />;
        })}
    </Layout>
  );
}
