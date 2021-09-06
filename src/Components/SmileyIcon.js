import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import vomit from "../Assets/vomited.json";
import trumpHit from "../Assets/10-BILLION.mp3";

const SmileyIcon = (props) => {
  const [play, setPlay] = useState(false);

  const playAudio = () => {
    new Audio(trumpHit).play();
  };
  //   <img
  //   onClick={
  //     props.clickCallback === null
  //       ? null
  //       : () => {
  //           props.clickCallback();
  //           playAudio();
  //         }
  //   }
  //   alt="Trump icon"
  //   draggable="false"
  //   className={`trump-svg ${props.classNameProp}`}
  // />
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: vomit,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    console.log(play);
  }, [play]);
  return (
    <div onClick={() => setPlay(true)}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
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
