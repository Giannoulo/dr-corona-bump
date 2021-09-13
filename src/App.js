import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import GameBoard from "./Components/GameBoard";

const App = () => {
  const [cursor, setCursor] = useState("unclicked");

  const changeCursor = () => {
    setCursor("clicked");
  };

  useEffect(() => {
    if (cursor === "clicked") {
      setTimeout(() => {
        setCursor("unclicked");
      }, 90);
    }
  }, [cursor]);

  return (
    <div className={`App ${cursor}`} onClick={() => changeCursor()}>
      <Header />
      <Controls />
      <GameBoard />
    </div>
  );
};

export default App;
