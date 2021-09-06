import TrumpIcon from "../Components/TrumpIcon";
import SmileyIcon from "../Components/SmileyIcon";

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
      // return <TrumpIcon classNameProp={className} key={index} clickCallback={clickCallback} />;
      return <SmileyIcon key={index} classNameProp={className} />;
    else {
      return <SmileyIcon key={index} classNameProp={className} />;
      // return <TrumpIcon classNameProp={className} key={index} clickCallback={null} />;
    }
  });
};
