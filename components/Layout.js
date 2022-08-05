import Footer from './Footer';
import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
