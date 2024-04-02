import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodoAction } from "../redux/Action";

const TaskAdding = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const changeHander = (e) => setText(e.target.value);

  const addTask = () => {
    if (text == "") return;
    dispatch(AddTodoAction(text));
    setText("");
  };
  const pressHandler = (e) => {
    if (text == "") return;
    if (e.keyCode === 13) {
      dispatch(AddTodoAction(text));
      setText("");
    }
  };
  return (
    <div className=" border-b-2 mb-5 pb-6">
      <input
        onChange={changeHander}
        onKeyUp={pressHandler}
        type="text"
        name="addText"
        value={text}
        placeholder="Add Task"
        className="w-full bg-orange-700 placeholder:font-bold text-white font-semibold  placeholder:text-white rounded-xl   px-3 outline-none sm:py-3 py-4  hover:outline-none mb-4  "
      />
      <div className="text-center">
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskAdding;
