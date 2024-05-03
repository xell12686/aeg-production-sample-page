import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Place any custom tags you want in the head here, 
          like external stylesheet links or meta tags */}
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Head>
        <body>
          {/* This is where the main app will be rendered */}
          <Main />
          {/* Scripts that Next.js needs to function properly */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
