import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducers/taskSlice";
import { styles } from "../style";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.svg";

const TaskInput = () => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (userInput.trim() !== "") {
      dispatch(addTask({ id: Date.now(), data: userInput.trim() }));
      setUserInput("");
    }
  };

  return (
    <div className={`${styles.flexCenter} flex-col w-full min-h-screen`}>
      <img
        src={back}
        onClick={() => navigate("/")}
        className={` absolute top-[1rem] ss:top-[2rem] right-[2rem] w-[1.6rem] ss:w-[2rem] cursor-pointer`}
        alt="back"
      />
      {/* <img
        src={back}
        onClick={() => navigate("/taskList")}
        className={`absolute top-[2rem] right-[2rem] w-[2rem] cursor-pointer rotate-180 `}
        alt="forward"
      /> */}

      <input
        className={` ${styles.text2} w-[80%] sm:w-[70%] md:w-[50%] h-[4rem] p-[1rem] rounded-xl text-center outline-coolPink text-coolPurple`}
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        placeholder="Add Items here ✍️"
      />
      <div className={`${styles.flexCenter} flex-col ss:flex-row mt-[1rem]`}>
        <button
          className={`bg-secondary ${styles.btn1}  text-white`}
          onClick={handleAddTask}
        >
          Add
        </button>
        <button
          className={`bg-yellow-400 hover:bg-yellow-400/70 ${styles.btn1} my-[0.5rem] text-white`}
          onClick={() => navigate("/taskList")}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
