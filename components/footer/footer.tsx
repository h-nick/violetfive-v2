import clsx from 'clsx';
import { FC } from 'react';
import classes from './footer.module.scss';

const Footer: FC = () => (
  <div className={classes.root}>
    <div className={classes.inner}>
      <img className={classes.logo} src="/img/logo.png" alt="VioletFive footer logo" />

      <h2 className="highlight mt-3">VIOLETFIVE</h2>

      <div className={clsx(classes.links, 'mt-3')}>
        <a href="#_" title="_" className="mr-3">
          <img src="/img/facebook.svg" alt="" />
        </a>
        <a href="#_" title="_" className="mr-3">
          <img src="/img/instagram.svg" alt="" />
        </a>
        <a href="#_" title="_">
          <img src="/img/linkedin.svg" alt="" />
        </a>
      </div>

      <p className={clsx(classes.copyright, 'highlight mt-4')}>Copyright | VioletFive | 2021</p>
    </div>
  </div>
);

export default Footer;
