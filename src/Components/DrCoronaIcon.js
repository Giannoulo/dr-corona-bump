import React from "react";
import drCorona from "../Assets/dr-corona-2.svg";

import {useDispatch, useSelector} from "react-redux";
import {resetCount, selectCount} from "../Redux/counterSlice";
import {selectLives, decrementLives, resetLives} from "../Redux/livesSlice";

const DrCoronaIcon = (props) => {
  const dispatch = useDispatch();
  const lives = useSelector(selectLives);
  const count = useSelector(selectCount);

  return (
    <div className="tile-divs">
      <img
        draggable="false"
        src={drCorona}
        alt="dr-corona-icon"
        className="game-icon"
        onClick={() => {
          if (lives > 0 && count > 0) {
            dispatch(decrementLives());
          } else {
            dispatch(resetCount());
            dispatch(resetLives());
          }
        }}
      />
    </div>
  );
};
export default DrCoronaIcon;
