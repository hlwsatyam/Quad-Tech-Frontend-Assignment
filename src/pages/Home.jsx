import React, { lazy } from "react";
import TaskListing from "../components/TaskListing";
const TaskAdding = lazy(() => import("../components/TaskAdding"));

const Home = () => {
  return (
    <div className="container py-6 px-4  ">
      <TaskAdding />
      <TaskListing />
    </div>
  );
};

export default Home;
