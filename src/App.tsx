import React, { useState } from 'react';

import './App.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const [showReset, setShowReset] = useState(true);

  const buttonDetails = [
    {
      name: 'Add 1',
      clickHandler: () => { setCount(count + 1); },
    },
    {
      name: 'Remove 1',
      clickHandler: () => { setCount(count - 1); },
    },
    {
      name: 'Multiply by 2',
      clickHandler: () => { setCount(count * 2); },
    },
    {
      name: 'Divide by 2',
      clickHandler: () => { setCount(count / 2); },
    },
    {
      name: 'Clear',
      clickHandler: () => { setCount(0); },
    },
  ];
  const countLastNum = () => {
    const lastNum = count.toString().slice(-1);
    return lastNum === '7';
  };

  return (
    <div className="App">
      <h1 style={countLastNum() ? { color: 'gold' } : { color: 'inherit' }}>
        {count}
      </h1>
      {buttonDetails
        .map(({ name, clickHandler }, index) => (
          <button
            key={Math.random()}
            onClick={() => { clickHandler(); }}
          >
            {name}
          </button>
        ))}
      <button
        className="button"
        key={Math.random()}
        onClick={() => { setShowReset(!showReset); }}
      >
        {showReset ? 'Hide reset' : 'Show reset'}
      </button>
      {showReset && (
      <button className=" button" key={Math.random()} onClick={() => setCount(0)}>
        Reset
      </button>
      )}
    </div>
  );
};
export default App;
