import React, { useState } from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement, increment, incrementByAmount, multiply, divide, reset,
} from './components/Counter/counterSlice';
import { create, remove } from './components/ToDoList/toDoSlice';
import { AppDispatch, RootState } from './store';

const App = () => {
  const count = useSelector((state:RootState) => state.counter.count);
  const todos = useSelector((state: RootState) => state.todos.value);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');

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
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => (setInputValue(e.target.value))}
          />
          <button
            onClick={() => {
              dispatch(create(inputValue));
              setInputValue('');
            }}
          >
            Add
          </button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <li>
              {todo}
              <button
                onClick={() => { dispatch(remove(i)); }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
export default App;
