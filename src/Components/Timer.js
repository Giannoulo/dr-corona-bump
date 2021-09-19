import React, {useState, useEffect} from "react";
import {saveTopScoreLocaly} from "../Utils/ControlsFunctions";

import {useDispatch} from "react-redux";
import {resetCount} from "../Redux/counterSlice";

const Timer = (props) => {
  const [time, setTime] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      try {
        if (localStorage.getItem("topScore")) {
          const oldScore = parseInt(localStorage.getItem("topScore"));
          props.playCallback("gameOver", oldScore, props.count);
        } else {
          props.playCallback("gameOver", 0);
        }
      } catch (error) {
        console.log("Get local storage item topScore error");
      }
      saveTopScoreLocaly(props.count);
      dispatch(resetCount());
    }
  }, [time, props, dispatch]);

  return <span>{time}</span>;
};
export default Timer;
