import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ReactElement } from 'react';
import '../styles/global.scss';
import en from '../locales/en';
import es from '../locales/es';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const locales = {
    en,
    es,
  };
  type LocalesType = keyof typeof locales;

  const { locale = 'en', defaultLocale } = useRouter();

  const localeKey = locale as LocalesType ?? 'en';
  const currentLocaleStrings = locales[localeKey];

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="x-default" href="https://violetfive.com" />
        <link rel="alternate" hrefLang="en" href="https://violetfive.com" />
        <link rel="alternate" hrefLang="es" href="https://violetfive.com/es" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        />
      </Head>

      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={currentLocaleStrings}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
};

export default App;
