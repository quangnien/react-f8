import {
    SET_TODO_INPUT,
    ADD_TODO,
    REMOVE_TODO,
    SET_UPDATE_INDEX,
    UPDATE_TODO
  } from "./constants";
  
  const initState = {
    todos: [],
    todoInput: "",
    updateIndex: false
  };
  
  function Reducer(state, action) {
    switch (action.type) {
      case SET_TODO_INPUT:
        return {
          ...state,
          todoInput: action.payload
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case REMOVE_TODO:
        const newTodos = [...state.todos];
  
        newTodos.splice(action.payload, 1);
        return {
          ...state,
          todos: newTodos
        };
      case SET_UPDATE_INDEX:
        return {
          ...state,
          updateIndex: action.payload
        };
      case UPDATE_TODO:
        const updateList = [...state.todos];
        if (action.payload === "") {
          return {
            ...state,
            todos: updateList,
            updateIndex: false
          };
        } else {
          updateList[state.updateIndex] = action.payload;
          return {
            ...state,
            todos: updateList
            // updateIndex: false
          };
        }
      default:
        throw new Error("Invalid action type");
    }
  }
  
  export { initState };
  export default Reducer;
  