import Link from 'next/link';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function Success() {
  return (
    <>
      <Layout title="Contact form success">
        <Header>Submission received!</Header>
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
