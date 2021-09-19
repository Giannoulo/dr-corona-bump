import React from "react";

import {useSelector} from "react-redux";
import {selectCount} from "../Redux/counterSlice";
import {selectLives} from "../Redux/livesSlice";

import {calculateScore} from "../Utils/ControlsFunctions";
import Timer from "./Timer";

const Controls = (props) => {
  const count = useSelector(selectCount);
  const lives = useSelector(selectLives);

  return (
    <div className="container" id="controls-div">
      <span>
        {`TIME: `}
        <Timer count={count} playCallback={props.playCallback} />
        {`  POINTS: ${calculateScore(count)}`}
        {`  LIVES: ${lives}`}
      </span>
    </div>
  );
};
export default Controls;
