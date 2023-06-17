import { useReducer } from "react";

//  Các bước thực hiện (so sánh giữa useState vs useReducer)

// Các bước sử dụng useState
// 1. InitState: 0
// 2. Actions: Thực hiện logic

// Các bước sử dụng useReducer
// 1. InitState: 0
// 2. Actions: Thực hiện logic
// 3. Reducer: Tạo ra reducer
// 4. Dispatch: Kích hoạt actions (lần đầu chạy không gọi reducer mà gán giá trị initState cho count)

// Init State
const initState = 0;

// Actions 
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button 
        onClick={() => dispatch(DOWN_ACTION)}
      >Down</button>
      <button 
        onClick={() => dispatch(UP_ACTION)}
      >Up</button>
    </div>
  );
}
