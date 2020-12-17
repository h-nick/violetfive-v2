import clsx from 'clsx';
import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import threeBars from '@iconify/icons-codicon/three-bars';
import Button from '../button/button';
import classes from './hero.module.scss';

const Hero: FC = () => (
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
            <img className={classes.logo} src="/img/logo_white.png" alt="VioletFive logo" />
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
            <a href="#_" className="bold d-none d-lg-inline">WHO WE ARE</a>
            <a href="#_" className="bold d-none d-lg-inline">OUR SERVICES</a>
            <a href="#_" className="bold d-none d-lg-inline">OUR CLIENTS</a>
            <a href="#_" className="bold d-none d-lg-inline">CONTACT US</a>
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
              _onKeyDown={() => {}}
              _onClick={() => {}}
              _className="mb-3 mr-3"
              text="CONTACT US"
            />
            <Button
              _onKeyDown={() => {}}
              _onClick={() => {}}
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
