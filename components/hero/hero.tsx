import clsx from 'clsx';
import { FC, KeyboardEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import threeBars from '@iconify/icons-codicon/three-bars';
import Button from '../button/button';
import classes from './hero.module.scss';

interface AppProps {
  show: () => void,
  showKey: (e: KeyboardEvent) => void
  showNavbar: () => void
}

const Hero: FC<AppProps> = ({ show, showKey, showNavbar }) => {
  const { locale } = useRouter();
  const { formatMessage } = useIntl();

  const t = (id: string): string => formatMessage({ id });

  const toLocale: string = locale === 'en' ? 'es' : 'en';
  const toLocaleHref: string = locale === 'en' ? '/es' : '/';

  return (
    <div className={classes.root}>
      <img className={classes.blob} src="/img/top_blob.svg" alt="Background blob design" />

      <Container className="py-5 pl-3 pl-md-5" fluid>
        <Row>
          <Col>
            <div className={clsx(
              classes.navbar,
              'd-block d-lg-flex justify-content-lg-between align-items-lg-center',
            )}
            >
              <a href="/" title={t('navHomet')}>
                <img className={classes.logo} src="/img/logo_white.png" alt="VioletFive logo" />
              </a>

              <div className={clsx(classes.navbarButton, 'd-lg-none d-inline p-2 ml-3')}>
                <Icon icon={threeBars} style={{ color: 'white' }} />
                <span
                  onClick={showNavbar}
                  onKeyDown={() => {}}
                  tabIndex={0}
                  className="bold ml-1"
                  role="button"
                >
                  {t('navDrawer')}
                </span>
              </div>

              <a href="/" title={t('navHomet')} className="bold d-none d-lg-inline">{t('navHome')}</a>

              <a
                href="https://blog.violetfive.com"
                target="_blank"
                rel="noreferrer noopener"
                title="Blog"
                className="bold d-none d-lg-inline"
              >
                BLOG
              </a>

              <div
                onClick={show}
                onKeyDown={showKey}
                role="button"
                tabIndex={0}
                title={t('navContactt')}
                className="bold d-none d-lg-inline"
              >
                <span className={classes.contact}>{t('contacth')}</span>
              </div>

              <Link href={toLocaleHref} locale={toLocale}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  title={t('navLangt')}
                  className="bold d-none d-lg-inline"
                >
                  {t('navLang')}
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h1 className={classes.firstText}>AT V5 WE:</h1>
            <h1>
              <span className="highlight">DESIGN</span>
              {' '}
              WEBSITES
            </h1>
            <h1>
              <span className="highlight">BUILD</span>
              {' '}
              APPLICATIONS
            </h1>
            <h1>
              <span className="highlight">WRITE</span>
              {' '}
              WEB CONTENT
            </h1>
            <h1>
              <span className="highlight">CREATE</span>
              {' '}
              AWESOME BLOGS
            </h1>
          </Col>
        </Row>
        <Row className="pt-3 mb-10">
          <Col xs={12}>
            <div className={clsx(classes.buttonGroup, 'pt-3')}>
              <Button
                _onKeyDown={showKey}
                _onClick={show}
                _className="mb-3 mr-3"
                text={t('button1')}
              />
              <Button
                _onKeyDown={showKey}
                _onClick={show}
                _className="mb-3 mr-3"
                text={t('button2')}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
