import { useReducer, useRef } from "react";

// export default nên ko cần nằm trong {}, export lẻ mới cần
import reducer, { initState } from "./reducer";

import { addJob, setJob, deleteJob } from "./action";
import logger from "./logger";

export default function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const { job, jobs } = state;
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo"
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
