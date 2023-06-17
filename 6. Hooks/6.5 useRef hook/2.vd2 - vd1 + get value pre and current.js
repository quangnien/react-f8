import { useState, useEffect, useRef } from "react";

export default function App() {

  const [count, setCount] = useState(60);

  let prevCount = useRef();
  const handleStoptoggle = useRef();

  // mỗi lần count thay đổi -> gọi đến hook này
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    handleStoptoggle.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(handleStoptoggle.current);
  };

  console.log(count + ", " + prevCount.current);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Play </button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
