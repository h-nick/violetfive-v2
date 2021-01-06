import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ReactElement } from 'react';

/* eslint-disable react/no-danger */
class VioletFive extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-2WZXMZ00FN" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              
              function gtag() {
                dataLayer.push(arguments);
              }
              
              gtag('js', new Date());
              gtag('config', 'G-2WZXMZ00FN');
            `,
            }}
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

export default VioletFive;
