import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <p>{number}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
