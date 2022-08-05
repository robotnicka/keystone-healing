import Link from 'next/link';
import Layout from '@components/Layout';
import HeadSeo from '@components/HeadSeo';
import { Content } from '@components/Content';
import Header from '@components/Header';

export default function Success() {
  return (
    <>
      <Layout title="Contact form success">
        <Content>
          <Header>Submission Received!</Header>
          <p>
            Thank you for your feedback! Head back to the{' '}
            <Link href="/">
              <a>home page</a>
            </Link>
            .
          </p>
        </Content>
      </Layout>
    </>
  );
}
