

import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(50);

  const increment = () => {
    setCount(count + 50);
  };

  const decrement = () => {
    setCount(count - 50);
  };

  return (
    < div >
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

    </div >
  );

};

export default CounterComponent;