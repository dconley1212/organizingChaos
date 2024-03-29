import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Product Market Fit</title>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta name="description" content="Find Product Market Fit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&family=Roboto:wght@300&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
