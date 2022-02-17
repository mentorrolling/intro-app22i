import React, { useState } from "react";

const Counter = () => {
  let initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const sumarNumero = () => {
    setCounter(counter + 1);
  };

  const resetNumero = () => {
    setCounter(initialState);
  };

  const restarNumero = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container-counter">
      <h1>Contador</h1>
      <div className="number">
        <h3>{counter}</h3>
      </div>
      <div>
        <button onClick={sumarNumero}>+1</button>
        <button onClick={resetNumero}>Reset</button>
        <button onClick={restarNumero}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
