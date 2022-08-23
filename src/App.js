import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1> Hidden text</h1>}
    </div>
  );
}

export default App;
