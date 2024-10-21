import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT

const ThemeProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)



  const defaultProps = useMemo(() => (
      {
        theme,
        setTheme
      }
    )
  , [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;