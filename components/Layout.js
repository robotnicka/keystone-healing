import Head from 'next/head';
import Footer from './Footer';
import HeadSeo from './HeadSeo';
import Topbar from './Topbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <HeadSeo title={title} />
      </Head>
      <Topbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
