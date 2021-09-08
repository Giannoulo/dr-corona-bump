import React from "react";

import { useSelector } from "react-redux";
import { selectCount } from "../Redux/counterSlice";
import { selectLives } from "../Redux/livesSlice";

import { calculateScore } from "../Utils/ControlsFunctions";
import Timer from "./Timer";

const Controls = () => {
  const count = useSelector(selectCount);
  const lives = useSelector(selectLives);

  return (
    <div className="container" id="controls-div">
      <span>
        {`Score: ${calculateScore(count)} Time: `}
        <Timer />
        {` Lives: ${lives}`}
      </span>
    </div>
  );
};
export default Controls;
