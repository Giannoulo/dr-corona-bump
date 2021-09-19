import DrCoronaIcon from "../Components/DrCoronaIcon";
import VirusIcon from "../Components/VirusIcon";

const getRandomIntNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const createClassNameArray = (numberOfIcons) => {
  const classNameArray = Array.from({length: numberOfIcons}, (element) => "");
  classNameArray[getRandomIntNumber(numberOfIcons)] = "target";
  return classNameArray;
};

// const calculateTileDimensions = () => {
//   const viewWidth = window.innerWidth;
//   const tilePixelSize = Math.min(90, viewWidth / 5);
//   return tilePixelSize;
// };

export const getBoardIcons = (numberOfIcons, clickCallback) => {
  return createClassNameArray(numberOfIcons).map((className, index) => {
    if (className === "target") return <VirusIcon key={index} clickCallback={clickCallback} />;
    else {
      return <DrCoronaIcon key={index} />;
    }
  });
};
