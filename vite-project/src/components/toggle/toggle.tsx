import { useState } from "react";
import "../toggle/toggle.css";

interface ToggleProps {
  text1?: string;
  text2?: string;
  img1On?: string;
  img2On?: string;
  img1Off?: string;
  img2Off?: string;
}

function Toggle({ text1, text2, img1On, img2On, img1Off, img2Off }: ToggleProps) {
  const [isOn, setIsOn] = useState(false);
  const [On, setOn] = useState(true);

  const ToggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    setOn((prevState) => !prevState);

  };

  const img1 = isOn ? img1On : img1Off;
  const img2 = On ? img2On : img2Off;

  return (
    <>
      <div className="toggleContainer">
        <button
          onClick={ToggleSwitch}
          className={`toggleButton ${isOn ? "on" : "off"}`}
        >
          {img1 && <img src={img1} alt="Logo do Toggle" className={`logoToggle`} />}

          {text1}
        </button>
        <button
          onClick={ToggleSwitch}
          className={`toggleButton ${On ? "on" : "off"}`}
        >
          {img2 && <img src={img2} alt="Logo do Toggle" className={`logoToggle`} />}

          {text2}
        </button>
      </div>
    </>
  );
}

export default Toggle;
