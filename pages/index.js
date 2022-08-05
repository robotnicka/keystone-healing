import { Content } from '@components/Content';
import FeedbackForm from '@components/FeedbackForm';
import Layout from '@components/Layout';
import { Marquee } from '@components/Marquee';

export default function Home({ children }) {
  return (
    <Layout title="Home">
      <Marquee />
      <FeedbackForm />
      <Content>Main text.</Content>
    </Layout>
  );
}
