import React, { useState } from "react";
import Lottie from "react-lottie";
import vomit from "../Assets/vomited.json";

import { useSelector, useDispatch } from "react-redux";
import { increment, reset, selectCount } from "../Redux/counterSlice";

const SmileyIcon = (props) => {
  const [play, setPlay] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: vomit,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div onClick={() => setPlay(true)}>
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
