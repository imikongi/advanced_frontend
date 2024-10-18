import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {

  const [counter, setCounter] = useState<number>(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
  setCounter(counter - 1)
  }

  return (
    <div className={classes.btn}>
      {counter}

      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>
    </div>


);
};
