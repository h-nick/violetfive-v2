import {
  FC, useState, useRef, useEffect,
} from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import Image from 'next/image';
import Hero from '../components/hero/hero';
import Footer from '../components/footer/footer';
import ServiceText from '../components/service_text/service_text';
import Button from '../components/button/button';
import Contact from '../components/contact/contact';
import classes from './index.module.scss';
import useOnScreen from '../hooks/onscreen';
import MobileNavbar from '../components/mobile_navbar/mobile_navbar';

const Home: FC = () => {
  const [contactModal, setContactModal] = useState<boolean>(false);
  const [mobileNavbarShow, setMobileNavbarShow] = useState<boolean>(false);
  const [apiIOSupported, setApiIOSupported] = useState<boolean>(false);
  const { formatMessage } = useIntl();

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      setApiIOSupported(true);
    }
  });

  const offset = '100% 0px 25px 0px';

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
  const showNavbar = (): void => setMobileNavbarShow(true);
  const closeNavbar = (): void => setMobileNavbarShow(false);

  return (
    <>
      <Head>
        <title>V5 - VioletFive</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#5f1f6a" />
        <meta name="description" content={t('meta')} />
      </Head>

      <div className={clsx(apiIOSupported && classes.animationSupported)}>
        <MobileNavbar show={mobileNavbarShow} close={closeNavbar} showContact={showModal} />

        <Contact show={contactModal} close={closeModal} />

        <div className={classes.root}>
          <Hero show={showModal} showNavbar={showNavbar} />

          <div className={clsx(classes.middle, 'mt-10 px-2 px-sm-4 px-xl-4')}>
            <Container className="mb-5" fluid>
              <Row className={clsx(classes.about, 'align-items-center')}>
                <Col xs={12} md={6}>
                  <div
                    className={clsx(
                      classes.content,
                      classes.toanim,
                      classes.left,
                      textIsOnScreen[0] && classes.animate, 'm-auto',
                    )}
                    ref={text1}
                  >
                    <h2>{t('aboutV5h')}</h2>
                    <p>{t('aboutV5p1')}</p>
                    <p>{t('aboutV5p2')}</p>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div
                    className={clsx(
                      classes.toanim,
                      classes.right,
                      mockupIsOnScreen[0] && classes.animate,
                      'm-auto d-none d-md-block',
                    )}
                    ref={image1}
                  >
                    <Image
                      src="/img/phones_mockup.png"
                      alt=""
                      width={791}
                      height={980}
                      priority
                      quality={100}
                    />
                  </div>
                </Col>
              </Row>

              <Row className={clsx(classes.about, 'align-items-center pt-4 pt-sm-5 mt-md-5 pt-md-5')}>
                <Col xs={12} md={6}>
                  <div
                    className={clsx(
                      classes.toanim,
                      classes.down,
                      mockupIsOnScreen[1] && classes.animate,
                      'm-auto d-none d-sm-block pb-5 pb-md-0',
                    )}
                    ref={image2}
                  >
                    <Image
                      src="/img/hero_mockups.png"
                      alt=""
                      width={1124}
                      height={755}
                      priority
                      quality={100}
                    />
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div
                    className={clsx(
                      classes.content,
                      classes.toanim,
                      classes.right,
                      textIsOnScreen[1] && classes.animate,
                      'm-auto text-right pt-3 pt-md-0',
                    )}
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

            <Container className={clsx(classes.clients, 'mt-5 py-md-5')}>
              <h2 className="text-center mb-5">{t('clientsh')}</h2>

              <Row className="justify-content-center align-items-center">
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client1.png"
                      alt=""
                      width={222}
                      height={200}
                      quality={95}
                    />
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client2.png"
                      alt=""
                      width={350}
                      height={186}
                      quality={95}
                    />
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client3.png"
                      alt=""
                      width={694}
                      height={525}
                      quality={95}
                    />
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center align-items-center mt-5">
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client4.png"
                      alt=""
                      width={308}
                      height={118}
                      quality={95}
                    />
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client5.png"
                      alt=""
                      width={368}
                      height={102}
                      quality={95}
                    />
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client6.png"
                      alt=""
                      width={273}
                      height={127}
                      quality={95}
                    />
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center align-items-center mt-5">
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client7.png"
                      alt=""
                      width={463}
                      height={358}
                      quality={95}
                    />
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client8.png"
                      alt=""
                      width={272}
                      height={129}
                      quality={95}
                    />
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-flex justify-content-center align-content-center px-lg-4">
                    <Image
                      src="/img/client9.png"
                      alt=""
                      width={200}
                      height={76}
                      quality={95}
                    />
                  </div>
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
                      text={t('button1')}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
