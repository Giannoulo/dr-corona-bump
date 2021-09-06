import VomitIcon from "../Components/VomitIcon";
import TongueIcon from "../Components/TongueIcon";

const getRandomIntNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const createClassNameArray = (numberOfIcons) => {
  const classNameArray = Array.from({ length: numberOfIcons }, (element) => "");
  classNameArray[getRandomIntNumber(numberOfIcons)] = "target";
  return classNameArray;
};

export const getTrumpIcons = (numberOfIcons, clickCallback) => {
  return createClassNameArray(numberOfIcons).map((className, index) => {
    if (className === "target")
      return <TongueIcon key={index} classNameProp={className} clickCallback={clickCallback} />;
    else {
      return <VomitIcon key={index} classNameProp={className} />;
    }
  });
};
