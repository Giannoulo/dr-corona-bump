import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const InstallButton = () => {
  return (
    <div id="install-button-constainer">
      <FontAwesomeIcon icon={faMobileAlt} /> Install
    </div>
  );
};

export default InstallButton;
