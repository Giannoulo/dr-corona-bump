import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(20);
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
  return <span>{time}</span>;
};
export default Timer;
