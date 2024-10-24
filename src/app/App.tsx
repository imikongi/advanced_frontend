import React from 'react';
import './styles/index.scss'
import {Outlet} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <div>
        <Navbar/>
        <div className={'content-page'}>
          <Sidebar/>
          <div className={'page-wrapper'}>
            <Outlet/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;