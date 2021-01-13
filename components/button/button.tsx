import { FC } from 'react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import chevronDoubleRight from '@iconify/icons-bi/chevron-double-right';
import classes from './button.module.scss';

interface FCPropsButton {
  text: string,
  hoverType?: 'standard' | 'color' | 'none',
  link?: undefined,
  href?: undefined,
  _className?: string,
  _onClick: () => void,
}

interface FCPropsLink {
  text: string,
  hoverType?: 'standard' | 'color' | 'none',
  link: true,
  href: string,
  _className?: string,
  _onClick?: undefined,
}

const Button: FC<FCPropsButton | FCPropsLink> = ({
  text, hoverType = 'standard', link, href, _className, _onClick,
}) => {
  if (link) {
    return (
      <a
        className={clsx(
          classes.root,
          hoverType === 'standard' && classes.standard,
          hoverType === 'color' && classes.color,
          _className,
        )}
        type="button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.inner}>
          <span className="bold mr-2">{ text }</span>
          <Icon icon={chevronDoubleRight} />
        </div>
      </a>
    );
  }

  return (
    <button
      className={clsx(
        classes.root,
        hoverType === 'standard' && classes.standard,
        hoverType === 'color' && classes.color,
        _className,
        'button-reset',
      )}
      type="button"
      onClick={_onClick}
    >
      <div className={classes.inner}>
        <span className="bold mr-2">{ text }</span>
        <Icon icon={chevronDoubleRight} />
      </div>
    </button>
  );
};

export default Button;
