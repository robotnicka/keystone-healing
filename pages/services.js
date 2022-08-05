import { Content } from '@components/Content';
import FeedbackForm from '@components/FeedbackForm';
import Header from '@components/Header';
import Layout from '@components/Layout';

export default function Services() {
  return (
    <Layout title="Services">
      <Content>
        <Header header="Services" />
        <h3>Our services.</h3>
      </Content>
    </Layout>
  );
}
