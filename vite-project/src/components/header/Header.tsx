import Toggle from "../toggle/toggle";
import "./Header.css";
import searchIcon from "./assets/search.svg";
import mapIcon from "./assets/mapIcon.svg";
import mapIconOff from "./assets/mapIconOff.svg";
import listIcon from "./assets/iconList.svg";
import listIconOff from "./assets/iconListOff.svg";

interface HeaderProps {
  title?: string;
  inputText?: string;
  imgUrl?: string;
  imgUrl1?: string;
  imgUrl2?: string;
  useToggle?: boolean;
}

function Header({ title, inputText, imgUrl, imgUrl1, imgUrl2, useToggle }: HeaderProps) {
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
          <Toggle img1On={mapIcon} img1Off={mapIconOff} text1="Mapa" img2On={listIcon} img2Off={listIconOff} text2="Lista"></Toggle>
        )}

        <section className="right-Header">
          {inputText && (
            <input type="text" placeholder={inputText} className="input-Src" />
          )}
          <img src={searchIcon} className="searchIcon"/>
          <div className="icons-container">

            <button className="sino">
              {imgUrl1 && (
                <img src={imgUrl1} alt="Sino de notificação" className="sino" />
              )}
            </button>
            <button className="perfil">
              {imgUrl2 && (
                <img src={imgUrl2} alt="Icone de perfil" className="perfil" />
              )}
            </button>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
