export const calculateScore = (counter) => {
  return counter ** 2;
};

export const saveTopScoreLocaly = (counter) => {
  const score = calculateScore(counter);
  if (localStorage.getItem("topScore")) {
    if (parseInt(score) > parseInt(localStorage.getItem("topScore"))) {
      localStorage.setItem("topScore", score);
    }
  } else {
    localStorage.setItem("topScore", score);
  }
};
