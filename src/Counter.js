import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est à : {count} </p>
      <input
        type="text"
        value={isNaN(count) ? setCount(0) : count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <div>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}
 -m 
export default Counter;
