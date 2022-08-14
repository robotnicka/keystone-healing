import { Content } from '@components/Content';
import FeedbackForm from '@components/FeedbackForm';
import Layout from '@components/Layout';
import { Marquee } from '@components/Marquee';

export default function Home({ children }) {
  return (
    <Layout title="Home">
      <Marquee />
      <ul>
        <li>Add accessibility</li>
        <li>Add image capabilities / cloudflare cdn?</li>
        <li>Hook up cms</li>
        <li>Add typescript and typings</li>
        <li>wysiwyg styles</li>
        <li>Form set up</li>
        <li>Caching</li>
        <li>viewport set up</li>
        <li>Favicon</li>
        <li>Analytics</li>
      </ul>
      <FeedbackForm />

      <Content>Main text.</Content>
    </Layout>
  );
}
