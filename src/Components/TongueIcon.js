import React, { useState } from "react";
import Lottie from "react-lottie";
import tongue from "../Assets/tongue-out.json";
import lickSound from "../Assets/lick.mp3";

import { useDispatch } from "react-redux";
import { incrementCount } from "../Redux/counterSlice";

const TongueIcon = (props) => {
  const [play, setPlay] = useState(false);
  const dispatch = useDispatch();

  const playAudio = () => {
    new Audio(lickSound).play();
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: tongue,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "tongue-icon",
    },
  };
  return (
    <div
      onClick={() => {
        if (!play) {
          playAudio();
          dispatch(incrementCount());
        }
        setPlay(true);
        setTimeout(() => {
          props.clickCallback();
        }, 300);
      }}
    >
      <Lottie
        className="vomit-lottie"
        options={defaultOptions}
        speed={4}
        height={props.pixelSize}
        width={props.pixelSize}
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
export default TongueIcon;
