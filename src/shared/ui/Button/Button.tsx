import {ButtonHTMLAttributes, FunctionComponent, PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import * as classes from './Button.module.scss'

export enum ThemeButton {
  CLEAR= 'clear'
}


  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
  }
  
  export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = (props) => {
    const {className, children, theme,...otherProps} = props

    return (
      <button
        className={classNames(classes.Button, {}, [className, classes[theme]])}
        {...otherProps}
      >
        {children}
      </button>
    );
  };