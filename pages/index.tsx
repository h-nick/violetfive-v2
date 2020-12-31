import {
  ReactElement, useState, KeyboardEvent, useRef, useEffect,
} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import Hero from '../components/hero/hero';
import Footer from '../components/footer/footer';
import ServiceText from '../components/service_text/service_text';
import Button from '../components/button/button';
import Contact from '../components/contact/contact';
import classes from './index.module.scss';
import useOnScreen from '../hooks/onscreen';

const Home = (): ReactElement => {
  const [contactModal, setContactModal] = useState(false);
  const { formatMessage } = useIntl();

  const offset = '0px 0px 25px 0px';

  const image1 = useRef<HTMLImageElement | null>(null);
  const image2 = useRef<HTMLImageElement | null>(null);
  const text1 = useRef<HTMLDivElement | null>(null);
  const text2 = useRef<HTMLDivElement | null>(null);

  const mockupIsOnScreen = [
    useOnScreen(image1, false, offset),
    useOnScreen(image2, false, offset),
  ];

  const textIsOnScreen = [
    useOnScreen(text1, false, offset),
    useOnScreen(text2, false, offset),
  ];

  const t = (id: string): string => formatMessage({ id });
  const showModal = (): void => setContactModal(true);
  const closeModal = (): void => setContactModal(false);
  const showModalKey = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') showModal();
  };

  return (
    <>
      <Contact show={contactModal} close={closeModal} />

      <div className={classes.root}>
        <Hero showKey={showModalKey} show={showModal} />

        <div className={clsx(classes.middle, 'mt-10 px-2 px-sm-4 px-xl-4')}>
          <Container className="mb-5" fluid>
            <Row className={clsx(classes.about, 'align-items-center')}>
              <Col xs={12} md={6}>
                <div
                  className={
                    clsx(
                      classes.content,
                      classes.toanim,
                      classes.left,
                      textIsOnScreen[0] && classes.animate, 'm-auto',
                    )
                  }
                  ref={text1}
                >
                  <h2>{t('aboutV5h')}</h2>
                  <p>{t('aboutV5p1')}</p>
                  <p>{t('aboutV5p2')}</p>
                </div>
              </Col>

              <Col xs={12} md={6}>
                <img
                  className={
                    clsx(
                      classes.toanim,
                      classes.right,
                      mockupIsOnScreen[0] && classes.animate,
                      'm-auto d-none d-md-block',
                    )
                  }
                  src="/img/phones_mockup.png"
                  alt=""
                  ref={image1}
                />
              </Col>
            </Row>

            <Row className={clsx(classes.about, 'align-items-center pt-4 pt-sm-5 mt-md-5 pt-md-5')}>
              <Col xs={12} md={6}>
                <img
                  className={
                    clsx(
                      classes.toanim,
                      classes.down,
                      mockupIsOnScreen[1] && classes.animate,
                      'm-auto d-none d-sm-block pb-5 pb-md-0',
                    )
                  }
                  src="/img/hero_mockups.png"
                  alt=""
                  ref={image2}
                />
              </Col>

              <Col xs={12} md={6}>
                <div
                  className={
                    clsx(
                      classes.content,
                      classes.toanim,
                      classes.right,
                      textIsOnScreen[1] && classes.animate,
                      'm-auto text-right pt-3 pt-md-0',
                    )
                  }
                  ref={text2}
                >
                  <h2 className="text-align-right">{t('processh')}</h2>
                  <p className="text-align-right">{t('processp')}</p>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="pt-sm-5 px-md-5">
            <h2 className="text-center">{t('servicesh')}</h2>

            <Row className="mt-5">
              <Col md={10} lg={8}>
                <ServiceText title={t('service1h')} bgText="1">
                  <p>{t('service1p')}</p>
                </ServiceText>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={{ span: 10, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                <ServiceText title={t('service2h')} bgText="2" right>
                  <p>{t('service2p')}</p>
                </ServiceText>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={10} lg={8}>
                <ServiceText title={t('service3h')} bgText="3">
                  <p>{t('service3p')}</p>
                </ServiceText>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={{ span: 10, offset: 2 }} lg={{ span: 8, offset: 4 }}>
                <ServiceText title={t('service4h')} bgText="4" right>
                  <p>{t('service4p')}</p>
                </ServiceText>
              </Col>
            </Row>
          </Container>

          <Container className={clsx(classes.clients, 'mt-5')}>
            <h2 className="text-center mb-5">{t('clientsh')}</h2>

            <Row className="justify-content-center">
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
            </Row>

            <Row className="justify-content-center mt-3">
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
            </Row>

            <Row className="justify-content-center mt-3">
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
              <Col xs={3}>
                <img className="d-block mx-auto" src="https://via.placeholder.com/150" alt="" />
              </Col>
            </Row>
          </Container>

          <Container className={clsx(classes.contact, 'mt-5')} fluid>
            <h2 className="text-center mb-sm-5">{t('contacth')}</h2>
            <img src="/img/contact.svg" alt="" />

            <Row className="align-items-center">
              <Col xs={12} md={{ span: 8, offset: 4 }} lg={{ span: 6, offset: 6 }}>
                <p className="text-sm-right">{t('contactp')}</p>

                <div className={clsx(classes.buttonGroup, 'mt-3 justify-content-sm-end')}>
                  <Button
                    hoverType="color"
                    _onClick={showModal}
                    _onKeyDown={showModalKey}
                    _className="mb-3 mr-3"
                    text={t('button1')}
                  />

                  <Button
                    hoverType="color"
                    _onClick={showModal}
                    _onKeyDown={showModalKey}
                    text={t('button2')}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
