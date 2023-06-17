
// App.js

// import { useState } from "react";
// import Content from "./Content";
// import "./styles.css";

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="App">
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );
// }


import { useLayoutEffect, useState } from "react";

export default function Content() {
  const [counter, setCounter] = useState(0);
  useLayoutEffect(() => {
    if (counter > 3) {
      setCounter(0);
    }
  }, [counter]);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Run</button>
    </div>
  );
}
