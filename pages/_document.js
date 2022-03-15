import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head />
      <link rel="manifest" href="/manifest.json" />
      <meta
        rel="description"
        content="A random company name generator for a shark-tank like game."
      />
      <meta property="og:title" content="Mutual FUN" />
      <meta
        property="og:image"
        content="img/mutual-fun-logo.webp"
        alt="mutual fun logo"
      />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mutual Fun</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.displayName = "MyDocument";

export default MyDocument;
