import {classNames} from 'shared/lib/classNames/classNames';
import * as classes from './AppLink.module.scss'
import {FunctionComponent, PropsWithChildren} from 'react';
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

  interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
  }

  export const AppLink: FunctionComponent<PropsWithChildren<AppLinkProps>> = (props) => {
    const {className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps} = props

    return (
      <Link
        to={to}
        className={classNames(classes.AppLink, {}, [className, classes[theme]])}
        {...otherProps}
      >
          {children}
      </Link>
    );
  };