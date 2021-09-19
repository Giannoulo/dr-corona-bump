import React from "react";
import {useSelector} from "react-redux";
import {selectCount} from "../Redux/counterSlice";

const GameOver = (props) => {
  const count = useSelector(selectCount);

  const newTopScore = () => {
    const topScore = parseInt(localStorage.getItem("topScore"));
    const newScore = count ** 2;
    if (newScore > topScore) {
      return (
        <>
          <div className="game-over-modal-text">Congratulations! You've set a new record!</div>
          <div className="game-over-modal-scores">
            Top score: {topScore} New Top Score: {newScore}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="game-over-modal-text">Common... You can do better!</div>
          <div className="game-over-modal-scores">
            Top score: {topScore} Score: {newScore}
          </div>
        </>
      );
    }
  };
  return (
    <div id="gameover-div">
      {props.playGame === "start" ? (
        <>
          <h1>Start Game</h1>
          <div className="game-over-modal-text">
            Welcome to Dr Corona the game! The doctor needs your help to fight the coronovirus. You
            have 30 seconds to eradicate as many as you can!
          </div>
          <button onClick={() => props.playCallback(null)}>Let's Go!</button>
        </>
      ) : (
        <>
          <h1>Game Over!</h1>
          {newTopScore()}
          <button onClick={() => props.playCallback(null)}>Try Again!</button>
        </>
      )}
    </div>
  );
};

export default GameOver;
