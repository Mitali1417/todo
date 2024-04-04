import React, { useState } from "react";
import { styles } from "../style";
import { useNavigate } from "react-router-dom";
import add from "../assets/add.svg";

const Hero = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${styles.flexCenter} flex-col md:flex-row min-h-screen w-full `}
      >
        <div
          className={`${styles.flexCenter} flex-col w-full text-center min-h-[50vh] lg:h-[30rem]`}
        >
          <h1
            className={`${styles.heroHeading} font-Mons font-bold text-white  `}
          >
            to<span className={`text-yellow-400`}>do</span>
          </h1>
          <h2 className={`${styles.text1} font-bold text-white`}>
            get your own work done on time.
          </h2>
        </div>
        <button
          onClick={() => navigate("/taskInput")}
          className={`${styles.flexCenter} flex-col h-[40vh] md:h-[70vh] w-full mx-[2rem] rounded-3xl backdrop-blur-2xl bg-gradient-to-tr from-secondary/70 to-tertiary/70 shadow-2xl `}
        >
          <img src={add} className={`w-[20%]`} alt="" />
        </button>
      </div>
    </>
  );
};

export default Hero;
