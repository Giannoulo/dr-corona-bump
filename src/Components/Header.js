import React from "react";
import coronaTitle from "../Assets/dr-corona-title.svg";
import drCoronaTrademark from "../Assets/corona-trademark.svg";

const Header = () => {
  return (
    <div className="container" id="header-row">
      <img src={drCoronaTrademark} alt="dr-corona-trademark" id="dr-corona-trademark" />
      <div id="header-col">
        <img src={coronaTitle} alt="dr-corona-title" id="dr-corona-title" />
      </div>
    </div>
  );
};
export default Header;
