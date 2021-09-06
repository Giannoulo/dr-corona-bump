import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, reset, selectCount } from "../Redux/counterSlice";

const Controls = () => {
  let score = 24;
  let lives = 3;
  let timeleft = 20;

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="container" id="controls-div">
      <span>{`Score: ${count * 50} Time: ${timeleft}s Lives: ${lives}`}</span>
    </div>
  );
};
export default Controls;
