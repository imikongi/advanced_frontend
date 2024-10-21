import React, {useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Outlet} from 'react-router-dom';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/className';

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