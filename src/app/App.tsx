import React from 'react';
import './styles/index.scss'
import {Link, Outlet} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/className';
import {useTheme} from 'app/providers/ThemeProvider';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>CHANGE THEME</button>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Outlet/>
      </div>
    </div>
  );
};

export default App;