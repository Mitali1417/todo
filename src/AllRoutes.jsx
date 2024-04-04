import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Home from "./sections/Home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/taskInput" element={<TaskInput />} />
        <Route exact path="/taskList" element={<TaskList />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
