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

const calculateTileDimensions = () => {
  const viewWidth = window.innerWidth;
  console.log(viewWidth);
  const tilePixelSize = Math.min(100, viewWidth / 5);
  console.log(tilePixelSize);
  return tilePixelSize;
};

export const getBoardIcons = (numberOfIcons, clickCallback) => {
  const tilePixelSize = calculateTileDimensions();
  return createClassNameArray(numberOfIcons).map((className, index) => {
    if (className === "target")
      return (
        <TongueIcon
          key={index}
          classNameProp={className}
          clickCallback={clickCallback}
          pixelSize={tilePixelSize}
        />
      );
    else {
      return <VomitIcon key={index} classNameProp={className} pixelSize={tilePixelSize} />;
    }
  });
};
