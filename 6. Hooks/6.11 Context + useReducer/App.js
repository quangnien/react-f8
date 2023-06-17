import { useStore, actions } from "./store";
import { useRef, useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [state, dispatch] = useStore();
  const { todos, todoInput, updateIndex } = state;
  const inputRef = useRef();

  const handleSetTodo = (e) => {
    dispatch(actions.setTodoInput(e.target.value));
    setError(false);
  };

  const hanldAdd = () => {
    if (todoInput === "") {
      setError(true);
    } else {
      dispatch(actions.addTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    }
  };

  const handleEdit = (index) => {
    dispatch(actions.setUpdateIndex(index));
    dispatch(actions.setTodoInput(todos[index]));
    inputRef.current.focus();
  };

  const handleUpdate = () => {
    if (todoInput === "") {
      setError(true);
    } else {
      dispatch(actions.updateTodo(todoInput));
      dispatch(actions.setTodoInput(""));
      inputRef.current.focus();
    }
  };

  const cancelUpdate = () => {
    dispatch(actions.updateTodo(""));
    dispatch(actions.setTodoInput(""));
    inputRef.current.focus();
  };

  const handleShowError = () => {
    inputRef.current.focus();
    return "Please enter something...";
  };

  console.log(todos);
  return (
    <div style={{ padding: 20 }}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => handleSetTodo(e)}
      />
      <button onClick={updateIndex === false ? hanldAdd : handleUpdate}>
        {updateIndex === false ? "Add" : "Update"}
      </button>
      {updateIndex !== false && <button onClick={cancelUpdate}>x</button>}
      <p>{error && handleShowError()}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => {
                dispatch(actions.removeTodo(index));
              }}
            >
              Remove
            </button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
