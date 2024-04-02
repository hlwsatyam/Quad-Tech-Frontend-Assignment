import {
  addTodo,
  changeTodoTaskStatus,
  changeTodoTaskTextStatus,
  deleteTodo,
} from "./Constraints";

export const AddTodoAction = (data) => {
  return {
    type: addTodo,
    payload: data,
  };
};
export const DeleteTodoAction = (id) => {
  return {
    type: deleteTodo,
    payload: id,
  };
};
export const ChangeTodoStatusAction = (id) => {
  return {
    type: changeTodoTaskStatus,
    payload: id,
  };
};
export const ChangeTodoTextAction = (id, newText) => {
  return {
    type: changeTodoTaskTextStatus,
    payload: id,
    newText: newText,
  };
};
