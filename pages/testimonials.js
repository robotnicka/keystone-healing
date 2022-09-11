import Header from '@components/Header';
import Layout from '@components/Layout';
import Builder from '../components/Builder';

export default function Testimonials({ testimonials }) {
  return (
    <Layout title="Testimonials">
      <Header header="Testimonials" />
      {testimonials &&
        testimonials.builder.map((item, index) => {
          return <Builder key={index} type={item.type} item={item} />;
        })}
    </Layout>
  );
}
