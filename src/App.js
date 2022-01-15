import { useReducer, useState } from "react";
import reducer from "./reducer";

const App = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="App">
        <h1>Counter Example by Hooks</h1>
        <button onClick={() => setCount(count + 1)}> Increment </button>
        <span style={{ padding: "5px" }}>count is : {count}</span>
        <button onClick={() => setCount(count - 1)}> Decrement </button>
      </div>
      <div className="App">
        <h1>Counter Example by Hooks with Reducer</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment{" "}
        </button>
        <span style={{ padding: "5px" }}>count is : {state}</span>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement{" "}
        </button>
      </div>
    </>
  );
};

export default App;
