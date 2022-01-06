import { Html, Head, Main, NextScript } from "next/document";

export default () => {
  return (
    <Html>
      <Head />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Belleza&display=optional"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta property="og:title" content="Mutual FUN" />
      <meta property="og:image" content="img/mutual-fun-logo.webp" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
