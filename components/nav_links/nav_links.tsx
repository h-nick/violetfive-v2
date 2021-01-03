import { FC } from 'react';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface FCProps {
  _className?: string,
  show: () => void
}

const NavLinks: FC<FCProps> = ({ _className, show }) => {
  const { locale } = useRouter();
  const { formatMessage } = useIntl();

  const t = (id: string): string => formatMessage({ id });

  const toLocale: string = locale === 'en' ? 'es' : 'en';
  const toLocaleHref: string = locale === 'en' ? '/es' : '/';

  return (
    <>
      <a
        href="/"
        title={t('navHomet')}
        className={_className}
      >
        {t('navHome')}
      </a>

      <a
        href="https://blog.violetfive.com"
        target="_blank"
        rel="noreferrer noopener"
        title="Blog"
        className={_className}
      >
        BLOG
      </a>

      <button
        className={clsx(_className, 'button-reset')}
        onClick={show}
        type="button"
      >
        {t('contacth')}
      </button>

      <Link href={toLocaleHref} locale={toLocale}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          title={t('navLangt')}
          className={_className}
        >
          {t('navLang')}
        </a>
      </Link>
    </>
  );
};

export default NavLinks;
