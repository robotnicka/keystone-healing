import Head from 'next/head';
import Footer from './Footer';
import HeadSeo from './HeadSeo';
import Topbar from './Topbar';
import styles from './Layout.module.scss';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <HeadSeo title={title} />
      </Head>
      <Topbar />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
}
