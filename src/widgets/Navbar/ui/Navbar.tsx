import React, {FunctionComponent} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import * as classes from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string
  }

  export const Navbar: FunctionComponent<NavbarProps> = ({className}) => {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <ThemeSwitcher/>
        <div className={classes.links}>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/">Home</AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
        </div>

      </div>
    );
  };

