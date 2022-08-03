import Head from 'next/head';
import siteMetadata from '../assets/data/siteMetadata';

const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  children,
  ogImageUrl,
}) => {
  return (
    <Head key={title}>
      <title>Keystone Healing Arts - {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={canonicalUrl} />
      {children}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default HeadSeo;
