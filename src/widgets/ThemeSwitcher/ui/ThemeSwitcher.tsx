import {FunctionComponent} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import * as classes from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import SunIcon from 'shared/assets/icons/sun.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'
import {Button, ThemeButton} from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string
  }

  export const ThemeSwitcher: FunctionComponent<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(classes.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}>
        {theme === Theme.LIGHT ? <SunIcon/> : <MoonIcon/>}
      </Button>
    );
  };