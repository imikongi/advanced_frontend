import React, {FunctionComponent, PropsWithChildren, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import * as classes from './Sidebar.module.scss'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';


  interface SidebarProps {
    className?: string
  }

  export const Sidebar: FunctionComponent<PropsWithChildren<SidebarProps>> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const handleToggle = () => {
      setCollapsed(prevState => !prevState)
    }

    return (
      <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
        <button onClick={handleToggle}>toggle</button>
        <div className={classes.switchers}>
          <ThemeSwitcher/>
        </div>
      </div>
    );
  };