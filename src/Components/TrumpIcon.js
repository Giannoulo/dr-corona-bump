import React from "react";
import TrumpSvg from "../Assets//trump.svg";
import TrumpSvg2 from "../Assets/trumpIcon2.svg";
import trumpHit from "../Assets/10-BILLION.mp3";

const TrumpIcon = (props) => {
  const playAudio = () => {
    new Audio(trumpHit).play();
  };
  return (
    <div>
      <img
        onClick={
          props.clickCallback === null
            ? null
            : () => {
                props.clickCallback();
                playAudio();
              }
        }
        src={TrumpSvg2}
        alt="Trump icon"
        draggable="false"
        className={`trump-svg ${props.classNameProp}`}
      />
    </div>
  );
};
export default TrumpIcon;
