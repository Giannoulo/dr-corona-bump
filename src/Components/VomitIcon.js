import React, { useState } from "react";
import Lottie from "react-lottie";
import vomit from "../Assets/vomited.json";
import vomitSound from "../Assets/vomit.mp3";

import { useDispatch, useSelector } from "react-redux";
import { resetCount } from "../Redux/counterSlice";
import { selectLives, decrementLives, resetLives } from "../Redux/livesSlice";

const SmileyIcon = (props) => {
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();
  const lives = useSelector(selectLives);

  const playAudio = () => {
    new Audio(vomitSound).play();
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: vomit,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "vomit-icon",
    },
  };
  return (
    <div
      onClick={() => {
        if (!play) {
          playAudio();
          if (lives > 0) {
            dispatch(decrementLives());
          } else {
            dispatch(resetCount());
            dispatch(resetLives());
          }
        }
        setPlay(true);
      }}
    >
      <Lottie
        options={defaultOptions}
        height={70}
        width={70}
        isPaused={false}
        isStopped={!play}
        isClickToPauseDisabled={true}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => setPlay(false),
          },
        ]}
      />
    </div>
  );
};
export default SmileyIcon;
