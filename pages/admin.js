import dynamic from 'next/dynamic';
import Head from 'next/head';
import config from '../cms/config';
import netlifyIdentity from 'netlify-identity-widget';

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link href="cms/config.js" type="text/yaml" rel="cms-config-url">
      </Head>
      {/* <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script> */}
      <CMS />
    </>
  );
};

export default AdminPage;
