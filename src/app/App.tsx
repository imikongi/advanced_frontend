import React from 'react';
import './styles/index.scss'
import {Outlet} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {Navbar} from 'widgets/Navbar';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <div>
        <Navbar/>
        <Outlet/>
        <button onClick={toggleTheme}>CHANGE THEME</button>
      </div>
    </div>
  );
};

export default App;