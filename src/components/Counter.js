import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <div className="upper">
        <div
          style={{ visibility: counter === 0 && "hidden" }}
          onClick={() => setCounter(counter - 1)}
          className="col-1"
        >
          <span>-</span>
        </div>
        <div className="col-2">{counter}</div>
        <div
          style={{ visibility: counter === 10 && "hidden" }}
          onClick={() => setCounter(counter + 1)}
          className="col-3"
        >
          <span>+</span>
        </div>
      </div>
      <div className="bottom">
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
