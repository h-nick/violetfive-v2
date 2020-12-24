import clsx from 'clsx';
import { FC, KeyboardEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import threeBars from '@iconify/icons-codicon/three-bars';
import Button from '../button/button';
import classes from './hero.module.scss';

interface AppProps {
  show: () => void,
  showKey: (e: KeyboardEvent) => void
}

const Hero: FC<AppProps> = ({ show, showKey }) => (
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
            <a href="/" title="Homepage">
              <img className={classes.logo} src="/img/logo_white.png" alt="VioletFive logo" />
            </a>
            <div className={clsx(classes.navbarButton, 'd-lg-none d-inline p-2 ml-3')}>
              <Icon icon={threeBars} style={{ color: 'white' }} />
              <span
                onClick={() => {}}
                onKeyDown={() => {}}
                tabIndex={0}
                className="bold ml-1"
                role="button"
              >
                OPEN NAV
              </span>
            </div>
            <a href="/" title="Homepage" className="bold d-none d-lg-inline">HOMEPAGE</a>

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
              title="Blog"
              className="bold d-none d-lg-inline"
            >
              <span className={classes.contact}>CONTACT</span>
            </div>

            <a
              href="#_"
              title="Change language"
              className="bold d-none d-lg-inline"
            >
              SWITCH TO SPANISH
            </a>
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
              text="CONTACT US"
            />
            <Button
              _onKeyDown={showKey}
              _onClick={show}
              _className="mb-3 mr-3"
              text="GET A QUOTE"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
