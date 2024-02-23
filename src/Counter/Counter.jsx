import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleReverse = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleForward = () => {
    setCount(count + 1);
  };

  return (
    <div id="box">
      <div>
        <p>{count}</p>
        <button onClick={handleReverse}>BACK</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleForward}>NEXT</button>
      </div>
    </div>
  );
}

export default Counter;
