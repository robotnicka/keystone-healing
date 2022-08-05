import { Content } from '@components/Content';
import FeedbackForm from '@components/FeedbackForm';
import Layout from '@components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact Us">
      <Content>
        <FeedbackForm />
      </Content>
    </Layout>
  );
}
