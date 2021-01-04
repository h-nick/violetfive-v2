import { FC, ReactChild } from 'react';
import clsx from 'clsx';
import classes from './service_text.module.scss';

interface FCProps {
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

const ServiceText: FC<FCProps> = ({
  children, bgText, title, right = false,
}) => {
  const styling: StyleProps = {};

  if (right) {
    styling.right = '0';
  } else {
    styling.left = '-2%';
  }
  return (
    <div className={clsx(classes.root, right && 'text-sm-right')}>
      <h3 className={clsx(right && 'text-sm-right', 'text-center text-sm-left')}>
        {title}
      </h3>
      <span style={styling} className={clsx(classes.bgText, 'd-none d-sm-block')}>{bgText}</span>
      {children}
    </div>
  );
};

export default ServiceText;
