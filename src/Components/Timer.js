import React, { useState, useEffect } from "react";
import { saveTopScoreLocaly } from "../Utils/ControlsFunctions";

const Timer = (props) => {
  const [time, setTime] = useState(10);

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
      saveTopScoreLocaly(props.count);
    }
  });

  return <span>{time}</span>;
};
export default Timer;
