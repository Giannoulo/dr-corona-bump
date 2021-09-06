import React from "react";

const Controls = () => {
  let score = 24;
  let lives = 3;
  let timeleft = 20;
  return (
    <div className="container" id="controls-div">
      <span>{`Score: ${score} Time: ${timeleft}s Lives: ${lives}`}</span>
    </div>
  );
};
export default Controls;
