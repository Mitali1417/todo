import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { styles } from "../style";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import cross from "../assets/cross.svg";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className={`${styles.flexCenter} w-full`}>
      <img
        src={back}
        onClick={() => navigate("/taskInput")}
        className={`absolute top-[2rem] right-[2rem] w-[2rem] cursor-pointer`}
        alt="back"
      />
      <div className={`${styles.flexCenter} flex-wrap mt-[8rem]`}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.taskCard} ${styles.text3} relative`}
          >
            <button
              onClick={() => handleDeleteTask(task.id)}
              className={` ${styles.flexCenter} rounded-full absolute -top-[1rem] -right-[0.5rem] bg-black w-[2rem] h-[2rem] `}
            >
              <img src={cross} className={`w-[1.5rem]`} alt="cross" />
            </button>
            {task.data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
