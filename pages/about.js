import { Content } from '@components/Content';
import FeedbackForm from '@components/FeedbackForm';
import Header from '@components/Header';
import Layout from '@components/Layout';

export default function About() {
  return (
    <Layout title="About Us">
      <Content>
        <Header header="About us" />
        Learn about us.
      </Content>
    </Layout>
  );
}
