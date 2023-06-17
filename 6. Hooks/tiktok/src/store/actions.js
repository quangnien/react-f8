import {
    SET_TODO_INPUT,
    ADD_TODO,
    REMOVE_TODO,
    SET_UPDATE_INDEX,
    UPDATE_TODO
  } from "./constants";
  
  export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload
  });
  
  export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
  });
  
  export const removeTodo = (index) => ({
    type: REMOVE_TODO,
    index
  });
  
  export const setUpdateIndex = (payload) => ({
    type: SET_UPDATE_INDEX,
    payload
  });
  
  export const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload
  });
  