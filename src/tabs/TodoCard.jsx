import React, { memo, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  ChangeTodoStatusAction,
  ChangeTodoTextAction,
  DeleteTodoAction,
} from "../redux/Action";

const TodoCard = memo(({ todo }) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DeleteTodoAction(todo.todoId));
  };

  const changeTaskStatus = () => {
    dispatch(ChangeTodoStatusAction(todo.todoId));
  };
  const updateTextHandler = () => {
    if (isUpdateClicked) {
      dispatch(ChangeTodoTextAction(todo.todoId, newText));
    }
    setIsUpdateClicked(!isUpdateClicked);
  };

  return (
    <div className="my-1   font-bold rounded-xl py-3 px-2 bg-yellow-500/85">
      <p>
        {isUpdateClicked ? (
          <input
            onChange={(e) => setNewText(e.target.value)}
            type="text"
            value={newText}
            className="w-full outline-none rounded px-2 py-1 "
            placeholder="Update Your Task"
          />
        ) : (
          ""
        )}
      </p>
      {!isUpdateClicked ? (
        <div class="  border rounded overflow-hidden break-words">
          <p class="p-4">{todo.text}</p>
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center flex-wrap space-x-3 mt-2 ">
        <Button
          onPress={updateTextHandler}
          className="bg-orange-700 transition hover:bg-amber-600 rounded-full font-semibold text-[12px] sm:text-sm py-1 px-4 text-white"
          label="Update"
        />
        <Button
          onPress={handleDelete}
          className="bg-orange-700 transition hover:bg-amber-600 rounded-full font-semibold text-[12px] sm:text-sm py-1 px-4 text-white"
          label="Delete"
        />
        <span>Completed: </span>
        <input
          className=""
          onChange={changeTaskStatus}
          type="checkbox"
          checked={todo.iscompleted}
          name=""
          id=""
        />
      </div>
    </div>
  );
});

export default TodoCard;
