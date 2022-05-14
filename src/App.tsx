import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement, increment, incrementByAmount, multiply, divide, reset,
} from './components/Counter/counterSlice';
import { AppDispatch, RootState } from './store';

const App = () => {
  const count = useSelector((state:RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div style={{ padding: '50px' }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1 style={{ fontSize: '50px' }}>{count}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(multiply())}
        >
          Multiply by 7
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(divide())}
        >
          Divide by 2
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(reset(0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default App;
