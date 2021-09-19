import React, {useState} from "react";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import GameBoard from "./Components/GameBoard";
import TopScore from "./Components/TopScore";
import InstallButton from "./Components/InstallButton";
import GameOver from "./Components/GameOver";

const App = () => {
  const [playGame, setPlayGame] = useState("start");
  return (
    <div className="App">
      {playGame ? (
        <>
          <Header />
          <GameOver playGame={playGame} playCallback={setPlayGame} />
        </>
      ) : (
        <>
          <Header />
          <Controls playCallback={setPlayGame} />
          <GameBoard />
          <TopScore />
          <InstallButton />
        </>
      )}
    </div>
  );
};

export default App;
