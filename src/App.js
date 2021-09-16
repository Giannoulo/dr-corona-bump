import React from "react";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import GameBoard from "./Components/GameBoard";
import TopScore from "./Components/TopScore";
import InstallButton from "./Components/InstallButton";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Controls />
      <GameBoard />
      <TopScore />
      <InstallButton />
    </div>
  );
};

export default App;
