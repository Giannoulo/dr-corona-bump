import React from "react";

import { useSelector } from "react-redux";
import { selectCount } from "../Redux/counterSlice";
import { selectLives } from "../Redux/livesSlice";

import { calculateScore } from "../Utils/ControlsFunctions";

const Controls = () => {
  let timeleft = 20;

  const count = useSelector(selectCount);
  const lives = useSelector(selectLives);
  return (
    <div className="container" id="controls-div">
      <span>{`Score: ${calculateScore(count)} Time: ${timeleft}s Lives: ${lives}`}</span>
    </div>
  );
};
export default Controls;
