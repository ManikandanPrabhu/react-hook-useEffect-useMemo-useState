import { useState, useMemo } from "react";
import Child from "./child";

const App = () => {
  const [count, setCount] = useState(0);
  const [i, setI] = useState(2);

  // the count injected is the dependency, which would be watched,
  // and for other values in the component, this is not updated.
  // Here for updation in I is not reflected in the memoChild, but
  // the updation in count is reflected
  const memoChild = useMemo(() => {
    return <Child></Child>;
  }, [count]);

  return (
    <>
      <div className="App">
        <h1>Counter data: </h1>
        <button onClick={() => setCount(count + 1)}> Increment </button>
        <span style={{ padding: "5px" }}>count is : {count}</span>
        <button onClick={() => setCount(count - 1)}> Decrement </button>
      </div>
      <div className="App">
        <h1>I data: </h1>
        <button onClick={() => setI(i + 1)}> Increment </button>
        <span style={{ padding: "5px" }}>i value is : {i}</span>
        <button onClick={() => setI(i - 1)}> Decrement </button>
      </div>
      <div className="App">
        <h1> Without Memo </h1>
        <Child></Child>
        <h1> With Memo </h1>
        {memoChild}
      </div>
    </>
  );
};

export default App;
