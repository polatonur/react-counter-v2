import "./App.css";
import counter from "./assets/img/counterv2.png";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([{ no: 0 }]);

  const addCounterHandler = () => {
    const newCounter = [...counters];
    newCounter.push({
      no: counters.length,
    });
    setCounters(newCounter);
  };
  console.log(counters);
  return (
    <div className="body">
      <header>
        <img src={counter} alt="counter" /> <span>React Counter v2</span>
      </header>

      <button
        onClick={addCounterHandler}
        style={{ visibility: counters.length === 3 && "hidden" }}
      >
        Add counter
      </button>

      <div className="counters">
        {counters.map((counter, index) => (
          <Counter key={index} />
        ))}
      </div>
      <footer>
        {" "}
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
          <a href="https://github.com/polatonur">Onur</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
