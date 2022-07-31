import Header from './Header';
import Footer from './Footer';
import Topbar from './Topbar';
import HeadSeo from './HeadSeo';

export default function Layout({
  children,
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
}) {
  return (
    <>
      <HeadSeo
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
      />
      <Topbar />
      <div className="container">
        <main>
          <Header title="Keystone Healing Arts" />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
