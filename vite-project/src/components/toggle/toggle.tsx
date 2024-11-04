import "../toggle/toggle.css";

interface ToggleProps {
  text1: string;
  text2: string;
  img1: string;
  img2: string;
}

function Toggle({ text1, text2,img1,img2 }: ToggleProps) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" className="inputToggle" />
        <span className="slider"></span>
        <div className="text">
          <div className="text-left">
            <img src={img1} alt="icone do mapa" className="iconMap" />
            {text1}
          </div>
          <div className="text text-right">
            {text2}
            <img src={img2} alt="icone da lista" className="iconList" />
          </div>
        </div>
      </label>
    </>
  );
}

export default Toggle;
