import React, { lazy } from "react";
import { useSelector } from "react-redux";
const TodoCard = lazy(() => import("../tabs/TodoCard"));

const TaskListing = () => {
  const allTask = useSelector((s) => s);

  return (
    <div>
      <h2 className="text-left text-2xl font-bold mt-5">Your Todo List</h2>
      <div className="">
        {allTask?.map((todo, idx) => (
          <TodoCard key={idx * idx} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TaskListing;
