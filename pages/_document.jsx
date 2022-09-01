// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Meta } from 'lib/components/Meta'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const title = 'Lossless'
    const url = `https://lossless-website.vercel.app`
    const description = `Win by saving.`
    const keywords = 'ethereum'
    const twitterHandle = ''

    return (
      <Html>
        <Meta />
        <Head>
          <>
            <link rel='icon' href='/favicon.ico' />

            <meta name='theme-color' content='#4f46e5' />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content='Lossless' />

            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content={title} />
            <meta property='og:url' content={url} />
            <meta property='og:type' content='website' />
            <meta property='og:image' content={`${url}/socialMedia.png`} />
            <meta property='og:rich_attachment' content='true' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />

            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:site' content={twitterHandle} />
            <meta property='twitter:image' content={`${url}/socialMedia.png`} />
            <meta property='twitter:url' content={url} />
            <meta property='twitter:creator' content={twitterHandle} />
          </>
        </Head>

        <body className='bg-body'>
          <Main />
          <NextScript />
          {/* <script src='/paper.js'></script> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
