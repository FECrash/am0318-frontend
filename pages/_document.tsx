import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class YowardDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <meta property="og:title" />
          <meta property="og:image" />
          <meta property="og:description" />
          <meta property="og:url" />
          <meta name="description" />
          <meta name="keywords" />
          <link
            href="https//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="preload"
            as="style"
          />
          <link
            href="https//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default YowardDocument;
