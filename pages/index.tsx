import { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import clsx from 'clsx';
import Hero from '../components/hero/hero';
import ServiceText from '../components/service_text/service_text';
import classes from './index.module.scss';

const Home = (): ReactElement => (
  <div className={classes.root}>
    <Hero />

    <div className={clsx(classes.middle, 'mt-5 pt-5 px-2 px-sm-4 m-xl-4')}>
      <Container fluid>
        <Row className={clsx(classes.about, 'align-items-center')}>
          <Col xs={12} md={6}>
            <div className={clsx(classes.content, 'm-auto')}>
              <h2>WE ARE VIOLETFIVE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt
                viverra. Etiam dictum ex in egestas volutpat. Nunc lectus dolor, hendrerit ac
                consequat eget, lobortis non erat. Duis mollis neque sed urna iaculis, a maximus
                dui sagittis.
              </p>
              <p>
                Aenean mollis condimentum augue, quis vulputate sem consequat ac.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Donec sed congue ex. Morbi eu lorem sit amet ante rutrum sodales
                in non urna.
              </p>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <img className="m-auto d-none d-md-block" src="/img/phones_mockup.png" alt="" />
          </Col>
        </Row>

        <Row className={clsx(classes.about, 'align-items-center pt-4 pt-sm-5 mt-md-5 pt-md-5')}>
          <Col xs={12} md={6}>
            <img
              className={clsx(classes.heroMockups, 'm-auto d-none d-sm-block pb-5 pb-md-0')}
              src="/img/hero_mockups.png"
              alt=""
            />
          </Col>

          <Col xs={12} md={6}>
            <div className={clsx(classes.content, 'm-auto text-right pt-3 pt-md-0')}>
              <h2 className="text-align-right">OUR PROCESS</h2>
              <p className="text-align-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt
                viverra. Etiam dictum ex in egestas volutpat. Nunc lectus dolor, hendrerit ac
                consequat eget, lobortis non erat. Duis mollis neque sed urna iaculis, a maximus
                dui sagittis. Aenean mollis condimentum augue, quis vulputate sem consequat ac.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-lg-5 px-md-5">
        <h2 className="text-center">OUR SERVICES</h2>

        <Row className="mt-5">
          <Col md={10} lg={8}>
            <ServiceText title="WEB DESIGN & DEVELOPMENT SERVICES" bgText="1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt
                viverra. Etiam dictum ex in egestas volutpat. Nunc lectus dolor, hendrerit ac
                consequat eget, lobortis non erat. Duis mollis neque sed urna iaculis, a maximus
                dui sagittis. Aenean mollis condimentum augue, quis vulputate sem consequat ac.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </ServiceText>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={{ span: 10, offset: 2 }} lg={{ span: 8, offset: 4 }}>
            <ServiceText title="TECHNICAL & MULTILINGUAL CONTENT WRITING" bgText="2" right>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt
                viverra. Etiam dictum ex in egestas volutpat. Nunc lectus dolor, hendrerit ac
                consequat eget, lobortis non erat. Duis mollis neque sed urna iaculis, a maximus
                dui sagittis. Aenean mollis condimentum augue, quis vulputate sem consequat ac.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </ServiceText>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={10} lg={8}>
            <ServiceText title="PROFESSIONAL COPYWRITING & BLOGS" bgText="3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt
                viverra. Etiam dictum ex in egestas volutpat. Nunc lectus dolor, hendrerit ac
                consequat eget, lobortis non erat. Duis mollis neque sed urna iaculis, a maximus
                dui sagittis. Aenean mollis condimentum augue, quis vulputate sem consequat ac.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </ServiceText>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={{ span: 10, offset: 2 }} lg={{ span: 8, offset: 4 }}>
            <ServiceText title="CREATION OF DIGITAL MAGAZINES & BROCHURES" bgText="4" right>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt
                viverra. Etiam dictum ex in egestas volutpat. Nunc lectus dolor, hendrerit ac
                consequat eget, lobortis non erat. Duis mollis neque sed urna iaculis, a maximus
                dui sagittis. Aenean mollis condimentum augue, quis vulputate sem consequat ac.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas.
              </p>
            </ServiceText>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;
