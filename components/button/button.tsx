import { FC } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import chevronDoubleRight from '@iconify/icons-bi/chevron-double-right';
import classes from './button.module.scss';

interface AppProps {
  text: string,
  hoverType?: 'standard' | 'color',
  _className?: string,
  _onClick: () => void,
}

const Button: FC<AppProps> = ({
  text, hoverType = 'standard', _className, _onClick,
}) => (
  <button
    className={
      clsx(
        classes.root, hoverType === 'standard' ? classes.standard : classes.color,
        _className,
        'button-reset',
      )
    }
    type="button"
    onClick={_onClick}
  >
    <div className={classes.inner}>
      <span className="bold mr-2">{ text }</span>
      <Icon icon={chevronDoubleRight} />
    </div>
  </button>
);

export default Button;
