import "./styles.css";
import { useState } from "react";
import Content from "./Content";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const increase2 = () => {
    setCount2((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Content count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me!</button>
      <button onClick={increase2}>Click me2!</button>
    </div>
  );
}
