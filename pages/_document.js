import Document, { Html, Head, Main, NextScript } from "next/document";

export default () => {
  return (
    <Html>
      <Head />
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Belleza&family=Inter:wght@394&display=optional"
        />
        <meta
          name="theme-color"
          content="#ddc385"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#003049"
          media="(prefers-color-scheme: dark)"
        />
        <meta property="og:title" content="Mutual FUN" />
        <meta property="og:image" content="img/mutual-fun-logo.jpg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
