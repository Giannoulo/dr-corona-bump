import React from "react";

const TopScore = () => {
  return (
    <span className="container" id="topscore">
      TOP SCORE: {localStorage.getItem("topScore") ? localStorage.getItem("topScore") : "0"}
    </span>
  );
};
export default TopScore;
