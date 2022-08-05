import { Html, Head, Main, NextScript } from 'next/document';
import HeadSeo from '@components/HeadSeo';

export default function Document({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  children,
  ogImageUrl,
  props,
}) {
  return (
    <Html lang="en-us">
      <Head key={title}>
        <HeadSeo {...props} />
        {children}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
