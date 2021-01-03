import clsx from 'clsx';
import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useIntl } from 'react-intl';
import threeBars from '@iconify/icons-codicon/three-bars';
import Button from '../button/button';
import classes from './hero.module.scss';
import NavLinks from '../nav_links/nav_links';

interface FCProps {
  show: () => void,
  showNavbar: () => void
}

const Hero: FC<FCProps> = ({ show, showNavbar }) => {
  const { formatMessage } = useIntl();

  const t = (id: string): string => formatMessage({ id });

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

              <button
                className={clsx(classes.navbarButton, 'd-lg-none d-inline p-2 ml-3 button-reset')}
                type="button"
                onClick={showNavbar}
              >
                <Icon icon={threeBars} style={{ color: 'white' }} />
                <span className="bold ml-1">
                  {t('navDrawer')}
                </span>
              </button>

              <NavLinks show={show} _className={clsx(classes.links, 'bold d-none d-lg-inline')} />
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
                _onClick={show}
                _className="mb-3 mr-3"
                text={t('button1')}
              />
              <Button
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
