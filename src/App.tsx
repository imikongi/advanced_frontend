import React from 'react';
import './styles/index.scss'
import {Link, Outlet} from 'react-router-dom';



const App = () => {
  return (
    <div className="app">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Outlet/> {/* Это место, где будут рендериться компоненты маршрутов */}
      </div>
    </div>
  );
};

export default App;