import React, {FC, FunctionComponent, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
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