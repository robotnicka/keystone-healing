import Link from 'next/link';
import Layout from '@components/Layout';
import HeadSeo from '@components/HeadSeo';

export default function Success() {
  return (
    <>
      <Layout title="Contact form success">
        <h1>Submission Received!</h1>
        <p>
          Thank you for your feedback! Head back to the{' '}
          <Link href="/">
            <a>home page</a>
          </Link>
          .
        </p>
      </Layout>
    </>
  );
}
