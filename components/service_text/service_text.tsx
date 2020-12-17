import { FC, ReactChild } from 'react';
import clsx from 'clsx';
import classes from './service_text.module.scss';

interface AppProps {
  children: ReactChild,
  bgText: string,
  title: string,
  right?: boolean
}

interface StyleProps {
  transform?: string,
  left?: string,
  right?: string
}

const ServiceText: FC<AppProps> = ({
  children, bgText, title, right = false,
}) => {
  const styling: StyleProps = {};

  if (right) {
    styling.right = '0';
    // styling.transform = 'translate(-50%, -50%)';
  } else {
    styling.left = '0';
    // styling.transform = 'translate(50%, -50%)';
  }
  return (
    <div className={clsx(classes.root, right && 'text-sm-right')}>
      <h3 className={clsx(classes.title, right && 'text-sm-right', 'text-center text-sm-left')}>
        {title}
      </h3>
      <span style={styling} className={classes.bgText}>{bgText}</span>
      {children}
    </div>
  );
};

export default ServiceText;
