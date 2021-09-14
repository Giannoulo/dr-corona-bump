import React from "react";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import GameBoard from "./Components/GameBoard";
import TopScore from "./Components/TopScore";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Controls />
      <GameBoard />
      <TopScore />
    </div>
  );
};

export default App;
