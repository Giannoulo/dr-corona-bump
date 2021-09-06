import React, { useState } from "react";
import Lottie from "react-lottie";
import tongue from "../Assets/tongue-out.json";

import { useDispatch } from "react-redux";
import { incrementCount } from "../Redux/counterSlice";

const TongueIcon = (props) => {
  const [play, setPlay] = useState(false);

  const dispatch = useDispatch();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: tongue,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      onClick={() => {
        if (!play) {
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
export default TongueIcon;
