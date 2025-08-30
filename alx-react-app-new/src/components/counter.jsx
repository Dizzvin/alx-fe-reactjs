import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>{count}</h3>
       <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ margin: "5px", padding: "10px" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
