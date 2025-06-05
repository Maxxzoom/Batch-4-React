import React, { useState } from "react";

const ClickButton = () => {
  const handleClick = () => {
    alert("Button clicked");
  };
  return <button onClick={handleClick}>Click me</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  // const [currentvalue,updatevalue]=useState(initialValue)

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>


      <ClickButton/>
    </div>
  );
};

export default Counter;
