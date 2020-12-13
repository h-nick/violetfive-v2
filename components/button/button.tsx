import { FC } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import chevronDoubleRight from '@iconify/icons-bi/chevron-double-right';
import classes from './button.module.scss';

interface AppProps {
  text: string,
  _className?: string,
  _onClick: () => void,
  _onKeyDown: () => void
}

const Button: FC<AppProps> = ({
  text, _className, _onClick, _onKeyDown,
}) => (
  <div
    className={clsx(classes.root, _className)}
    role="button"
    tabIndex={0}
    onClick={_onClick}
    onKeyDown={_onKeyDown}
  >
    <div className={classes.inner}>
      <span className="bold mr-2">{ text }</span>
      <Icon icon={chevronDoubleRight} />
    </div>
  </div>
);

export default Button;
