import "./Header.css";
import Toggle from "../toggle/toggle";
import searchIcon from "./assets/search.svg";
import mapIcon from "./assets/mapIcon.svg";
import mapIconOff from "./assets/mapIconOff.svg";
import listIcon from "./assets/iconList.svg";
import listIconOff from "./assets/iconListOff.svg";

interface HeaderProps {
  title?: string;
  imgUrl?: string;
  imgUrl1?: string;
  imgUrl2?: string;
  useToggle?: boolean;
  inputText?: boolean;
  onToggleChange?: (mode: "view1" | "view2") => void;
}

function Header({ title, imgUrl, imgUrl1, imgUrl2, useToggle, inputText, onToggleChange }: HeaderProps) {
  const InputWithIcon = () => (
    <div className="input-with-icon">
      <input type="text" placeholder="Pesquisar..." className="input-Src" />
      <img src={searchIcon} className="searchIcon" alt="Search Icon" />
    </div>
  );

  return (
    <>
      <header className="header-container">
        <section className="left-Header">
          <button className="menu">
            {imgUrl && (
              <img src={imgUrl} alt="Menu Hamburguer" className="menu" />
            )}
          </button>

          {title && <p className="title-Header">{title}</p>}
        </section>

        {useToggle && (
          <Toggle
            img1On={mapIcon}
            img1Off={mapIconOff}
            text1="Mapa"
            img2On={listIcon}
            img2Off={listIconOff}
            text2="Lista"
            onToggle={(isSwitchOn) => onToggleChange?.(!isSwitchOn ? "view1" : "view2")}
          ></Toggle>
        )}

        <section className="right-Header">
          {inputText && <InputWithIcon />}

          <div className="icons-container">
            <button className="sino">
              {imgUrl1 && (
                <img src={imgUrl1} alt="Sino de notificação" className="sino" />
              )}
            </button>
            <button className="perfil">
              {imgUrl2 && (
                <img src={imgUrl2} alt="Ícone de perfil" className="perfil" />
              )}
            </button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
