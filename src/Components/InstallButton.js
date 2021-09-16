import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const InstallButton = () => {
  useEffect(() => {
    const handle_storePrompt = (e) => {
      e.preventDefault();
      alert("Action Triggered");
    };
    window.addEventListener("beforeinstallprompt", (e) => handle_storePrompt(e));
    return (_) => {
      window.removeEventListener("beforeinstallprompt", (e) => handle_storePrompt(e));
    };
  }, []);

  return (
    <div id="install-button-constainer">
      <FontAwesomeIcon icon={faMobileAlt} /> Install App
    </div>
  );
};

export default InstallButton;
