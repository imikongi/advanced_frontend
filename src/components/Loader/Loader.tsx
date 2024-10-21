import React from 'react';
import * as classes from './Loader.module.scss'


const Loader: React.FunctionComponent = () => (
  <div className={classes.wrapper}>
    <div className={classes.spinner}/>
  </div>
);

export default Loader;