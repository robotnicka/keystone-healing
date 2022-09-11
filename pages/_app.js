import '@styles/reset.scss';
import '@styles/globals.scss';
import Script from 'next/script';

function Application({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RQJ6P4GFTC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RQJ6P4GFTC');
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default Application;
