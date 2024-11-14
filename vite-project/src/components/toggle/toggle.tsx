import { useState } from "react";
import "../toggle/toggle.css";

interface ToggleProps {
  text1: string;
  text2: string;
  img1?: string;
  img2?: string;
}

function Toggle({ text1, text2, img1, img2 }: ToggleProps) {
  const [isOn, setIsOn] = useState(false);
  const [On, setOn] = useState(true);

  const ToggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    setOn((prevState) => !prevState);

  };
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
