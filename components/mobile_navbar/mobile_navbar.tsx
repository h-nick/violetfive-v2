import { FC } from 'react';
import clsx from 'clsx';
import { Modal } from 'react-bootstrap';
import classes from './mobile_navbar.module.scss';

interface AppProps {
  show: boolean,
  close: () => void
}

const MobileNavbar: FC<AppProps> = ({ close, show = false }) => (
  <div className={classes.root}>
    <Modal
      show={show}
      onHide={close}
      backdrop="static"
      dialogClassName={classes.fix}
      backdropClassName={classes.bg}
      contentClassName={classes.content}
    >
      <div className={classes.inner}>
        <div className={clsx(classes.navHeader, 'mb-5')}>
          <img src="/img/logo.png" alt="VioletFive Logo" />
        </div>

        <a
          className={clsx(classes.link, 'text-center bold highlight mb-4')}
          href="#_"
          title=""
        >
          TEST
        </a>
        <a
          className={clsx(classes.link, 'text-center bold highlight mb-4')}
          href="#_"
          title=""
        >
          TESTLINK
        </a>
        <a
          className={clsx(classes.link, 'text-center bold highlight mb-4')}
          href="#_"
          title=""
        >
          TEST
        </a>
        <a
          className={clsx(classes.link, 'text-center bold highlight mb-4')}
          href="#_"
          title=""
        >
          TESTLINK
        </a>
        <button
          className={clsx(classes.link, 'text-center bold highlight')}
          onClick={close}
          type="button"
        >
          TEST
        </button>
      </div>
    </Modal>
  </div>
);

export default MobileNavbar;
