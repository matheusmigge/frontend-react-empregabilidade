import "../toggle/toggle.css";

interface ToggleProps {
  text1: string;
  text2: string;
}

function Toggle({ text1, text2}: ToggleProps) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" className="inputToggle" />
        <span className="slider"></span>
        <div className="text text-left">{text1}</div>
        <div className="text text-right">{text2}</div>
      </label>
    </>
  );
}

export default Toggle;
