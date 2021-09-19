import React from "react";

const GameOver = (props) => {
  const newTopScore = () => {
    const newScore = props.newScore ? props.newScore ** 2 : 0;
    if (newScore > props.oldScore) {
      return (
        <>
          <div className="game-over-modal-text">Congratulations! You've set a new record!</div>
          <div className="game-over-modal-scores">
            Top score: {props.oldScore} {"\n"} New Top Score: {newScore}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="game-over-modal-text">Common... You can do better!</div>
          <div className="game-over-modal-scores">
            Top score: {props.oldScore} {"\n"}Score: {newScore}
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
