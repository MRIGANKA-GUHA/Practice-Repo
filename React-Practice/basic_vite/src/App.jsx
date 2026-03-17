import { useState } from "react";

function App() {
  const [counter,setCounter]= useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  
    console.log(counter);
  };

  const lessValue = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>React course with Hitesh</h1>
      <h3>Basic Counter</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={lessValue}>Minus Value</button>
      <h4 id="result">Result : {counter}</h4>
    </div>
  );
}

export default App
