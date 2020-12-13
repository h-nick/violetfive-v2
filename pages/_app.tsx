import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';
import '../styles/global.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossOrigin="anonymous"
      />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default App;
