import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="no">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Alt du trenger innen fakturering, utsendelse, purring og inkasso. Få mer tid til egen drift. Et perfekt verktøy for bedrifter, lag og foreninger."
          />
          <meta name="keywords" content="norkred, norkred.no, norkred no" />
          <meta httpEquiv="Content-Language" content="no" />
          <meta property="og:title" content="NorKred - En enkel og effektiv faktura- og purretjeneste for deg" />
          <meta
            property="og:description"
            content="Et perfekt verktøy for bedrifter, lag og foreninger. Få mer tid til egen drift. Alt du trenger innen fakturering, utsendelse, purring og inkasso."
          />
          <meta property="og:url" content="https://www.norkred.no/" />
          <meta property="og:image" content="https://i.ibb.co/3vHV1XL/Untitled-1.png" />
          <meta property="og:type" content="business.business" />
          <link rel="canonical" href="https://www.norkred.no/" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700,800" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '955416064844323');
fbq('track', 'PageView');`,
          }}
        ></script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" src="https://www.facebook.com/tr?id=955416064844323&ev=PageView&noscript=1"/>`,
          }}
        ></noscript>
      </Html>
    );
  }
}

export default MyDocument;
