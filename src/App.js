import React, {useState} from "react";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import GameBoard from "./Components/GameBoard";
import TopScore from "./Components/TopScore";
import InstallButton from "./Components/InstallButton";
import GameOver from "./Components/GameOver";

const App = () => {
  const [playGame, setPlayGame] = useState("start");
  const [oldScore, setOldScore] = useState(0);
  const [newScore, setNewScore] = useState(0);

  const playCallback = (playGame, oldScore, newScore) => {
    setPlayGame(playGame);
    setOldScore(oldScore);
    setNewScore(newScore);
  };
  return (
    <div className="App">
      <Header />
      <InstallButton />
      {playGame ? (
        <>
          <GameOver
            playGame={playGame}
            oldScore={oldScore}
            newScore={newScore}
            playCallback={playCallback}
          />
        </>
      ) : (
        <>
          <Controls playCallback={playCallback} />
          <GameBoard />
          <TopScore />
        </>
      )}
    </div>
  );
};

export default App;
