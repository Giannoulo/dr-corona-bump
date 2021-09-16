import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const InstallButton = () => {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", (e) => handleInstallPrompt(e));
    return (_) => {
      window.removeEventListener("beforeinstallprompt", (e) => handleInstallPrompt(e));
    };
  }, []);

  return (
    <div
      id="install-button-constainer"
      className={installPrompt ? "visible" : ""}
      onClick={() => (installPrompt ? installPrompt.prompt() : undefined)}
    >
      <FontAwesomeIcon icon={faMobileAlt} /> Install App
    </div>
  );
};

export default InstallButton;
