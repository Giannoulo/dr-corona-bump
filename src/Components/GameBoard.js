import React, { useState, useEffect } from "react";
import { getBoardIcons } from "../Utils/GameBoardFunctions";

const GameBoard = () => {
  const [targetClicked, setTargetClicked] = useState(0);
  const [iconsJSX, setIconsJSX] = useState("");
  useEffect(() => {
    const incrementTargetClicks = () => {
      setTargetClicked(targetClicked + 1);
    };
    setIconsJSX(getBoardIcons(20, incrementTargetClicks));
  }, [targetClicked]);

  return (
    <div className="container" id="game-board-div">
      {iconsJSX}
    </div>
  );
};
export default GameBoard;
