import "./Header.css";
import Toggle from "../toggle/toggle";
import searchIcon from "./assets/search.svg";
import mapIcon from "./assets/mapIcon.svg";
import mapIconOff from "./assets/mapIconOff.svg";
import listIcon from "./assets/iconList.svg";
import listIconOff from "./assets/iconListOff.svg";
import cardsIcon from "./assets/cardsIcon.svg";
import cardsIconOff from "./assets/cardsIconOff.svg";
import userIcon from "./assets/Ellipse 1.svg";
import bellIcon from "./assets/bell.svg";
import menuIcon from "./assets/Menu.svg";

interface HeaderProps {
  title?: string;
  useMenu?: boolean;
  useNotification?: boolean;
  useProfile?: boolean;
  useToggle?: boolean;
  useSearch?: boolean;
  UserType?: "candidate" | "company";
  onToggleChange?: (mode: "view1" | "view2") => void;
}

function Header({ title, useMenu, useNotification, useProfile, useToggle, useSearch, UserType, onToggleChange }: HeaderProps) {
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
            {useMenu && (
              <img src={menuIcon} alt="Menu Hamburguer" className="menu" />
            )}
          </button>

          {title && <p className="title-Header">{title}</p>}
        </section>

        {useToggle && (
          <Toggle
            img1On={UserType == "candidate" ? mapIcon : cardsIcon}
            img1Off={UserType == "candidate" ? mapIconOff : cardsIconOff}
            text1={UserType == "candidate" ? "Mapa" : "Cards"}
            img2On={UserType == "candidate" ? listIcon : mapIcon}
            img2Off={UserType == "candidate" ? listIconOff : mapIconOff}
            text2={UserType == "candidate" ? "Lista" : "Mapa"}
            onToggle={(isSwitchOn) => onToggleChange?.(!isSwitchOn ? "view1" : "view2")}
          ></Toggle>
        )}

        <section className="right-Header">
          {useSearch && <InputWithIcon />}

          <div className="icons-container">
            <button className="sino">
              {useNotification && (
                <img src={bellIcon} alt="Sino de notificação" className="sino" />
              )}
            </button>
            <button className="perfil">
              {useProfile && (
                <img src={userIcon} alt="Ícone de perfil" className="perfil" />
              )}
            </button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
