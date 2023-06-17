import { useState, useRef } from "react";

export default function App() {
  
  const [count, setCount] = useState(60);

  // Giải quyết được bài toán mỗi lần render thì tạo ra các phạm vi mới
  // mà ko liên quan đến phạm vi của render cũ
  // Tức là biến timerId sẽ được tạo ra ở những vùng nhớ khác nhau 
  // Hay còn hiểu là tạo ra 1 biến toàn cục
  let timerId = useRef()

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log('Start -> ', timerId.current)
  };

  const handleStop = () => {
    clearInterval(timerId.current);

    console.log('Stop -> ', timerId.current)
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Play </button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}