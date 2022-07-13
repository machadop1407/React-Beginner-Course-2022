import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
