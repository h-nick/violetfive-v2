import { FC } from 'react';
import clsx from 'clsx';
import { Modal } from 'react-bootstrap';
import classes from './mobile_navbar.module.scss';
import NavLinks from '../nav_links/nav_links';

interface AppProps {
  show: boolean,
  showContact: () => void
  close: () => void
}

const MobileNavbar: FC<AppProps> = ({ close, show = false, showContact }) => (
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

        <NavLinks
          show={showContact}
          _className={clsx(classes.links, 'text-center bold highlight mb-4')}
        />

        <button
          className={clsx(classes.closeButton, 'text-center bold highlight button-reset')}
          onClick={close}
          type="button"
          aria-label="Close Navigation Bar"
        >
          X
        </button>
      </div>
    </Modal>
  </div>
);

export default MobileNavbar;
