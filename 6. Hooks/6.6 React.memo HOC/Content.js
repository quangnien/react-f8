import { memo } from "react";

function Content({ count }) {
  console.log("re-render");

  return (
    <div>
      <h1>Hello anh em F8 {count}</h1>
    </div>
  );
}

export default memo(Content);
