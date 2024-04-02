import {
  addTodo,
  changeTodoTaskStatus,
  changeTodoTaskTextStatus,
  deleteTodo,
} from "./Constraints";
import { v4 as uuid } from "uuid";
const initialState = JSON.parse(localStorage.getItem("todos")) || [];
export const Reducer = (state = initialState, action) => {
  if (action.type === addTodo) {
    const newData = {
      iscompleted: false,
      todoId: uuid(),
      text: action.payload,
    };
    const latestState = [newData, ...state];

    localStorage.setItem("todos", JSON.stringify(latestState));
    return latestState;
  } else if (action.type === deleteTodo) {
    const filteredData = state.filter((item) => item.todoId !== action.payload);
    localStorage.setItem("todos", JSON.stringify(filteredData));
    return filteredData;
  } else if (action.type === changeTodoTaskStatus) {
    const updatedState = state.map((item) =>
      item.todoId === action.payload
        ? { ...item, iscompleted: !item.iscompleted }
        : item
    );
    localStorage.setItem("todos", JSON.stringify(updatedState));
     
    return updatedState;
  } else if (action.type === changeTodoTaskTextStatus) {
    const updatedState = state.map((item) =>
      item.todoId === action.payload ? { ...item, text: action.newText } : item
    );
    localStorage.setItem("todos", JSON.stringify(updatedState));
     
    return updatedState;
  } else {
    
    return state;
  }
};
