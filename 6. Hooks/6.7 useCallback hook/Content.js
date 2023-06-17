import { memo } from "react";

function Content({ onIncrease }) {
  console.log("render");
  return (
    <>
      <h2>Hello</h2>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
}
//hi lo
export default memo(Content);
