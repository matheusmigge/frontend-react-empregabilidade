import { useState } from "react";
import "../toggle/toggle.css";

interface ToggleProps {
  text1?: string;
  text2?: string;
  img1On?: string;
  img2On?: string;
  img1Off?: string;
  img2Off?: string;
  onToggle?: (isSwitchOn: boolean) => void;
}

function Toggle({ text1, text2, img1On, img2On, img1Off, img2Off, onToggle }: ToggleProps) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = (setting: boolean) => {
    setIsSwitchOn(setting);
    if (onToggle) onToggle(setting);
  };

  const img1 = !isSwitchOn ? img1On : img1Off;
  const img2 = isSwitchOn ? img2On : img2Off;

  return (
    <>
      <div className="toggleContainer">
        <button
          onClick={() => handleToggle(false)}
          className={`toggleButton ${!isSwitchOn ? "on" : "off"}`}
        >
          {img1 && <img src={img1} alt="Logo do Toggle" className={`logoToggle`} />}

          {text1}
        </button>
        <button
          onClick={() => handleToggle(true)}
          className={`toggleButton ${isSwitchOn ? "on" : "off"}`}
        >
          {img2 && <img src={img2} alt="Logo do Toggle" className={`logoToggle`} />}

          {text2}
        </button>
      </div>
    </>
  );
}

export default Toggle;
