import React from "react";
import VirusSvg from "../Assets/virus.svg";

import {useDispatch} from "react-redux";
import {incrementCount} from "../Redux/counterSlice";

const VirusIcon = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="tile-divs">
      <img
        draggable="false"
        src={VirusSvg}
        alt="Virus Icon"
        className="game-icon"
        onClick={() => {
          dispatch(incrementCount());
          props.clickCallback();
        }}
      />
    </div>
  );
};
export default VirusIcon;
