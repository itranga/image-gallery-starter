import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="images"
          />
          <meta property="og:site_name" content="images" />
          <meta
            property="og:description"
            content="images"
          />
          <meta property="og:title" content="images" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="images" />
          <meta
            name="twitter:description"
            content="images"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
