import "../styles/components-css/header.css"
import Menu from "../assets/assetsHeader/Menu.svg"
import Notification from "../assets/assetsHeader/bell.svg"
import Profile from "../assets/assetsHeader/Ellipse 1.svg"

interface HeaderProps {
  titulo: string;
  btnFilterMap?: string;
  btnFilterList?: string;
  icon1: string;
  icon2: string;
}



function Header ({titulo, btnFilterMap, btnFilterList, icon1, icon2}: HeaderProps) {

  return(
    <>
      <header className="header-container">
        <section className="left-Header">
              <img src={Menu} alt="Menu Hamburguer" className="menu" />
              <h2>{titulo}</h2>
        </section>

        <span className="filterBtn">
              <button type="button" className="buttonFilter"> <img src={icon1} alt="icone do mapa" className="iconFilter" />{btnFilterMap}</button>
              <button type="button" className="buttonFilter"><img src={icon2} alt="" className="iconFilter" />{btnFilterList}</button>
        </span>

        <section className="right-Header">
              <input type="text" placeholder="Pesquisar..." className="input-Src"/>      
              <img src={Notification} alt="Sino de notificação" className="sino" />
              <img src={Profile} alt="Icone de perfil" className="perfil" />
        </section>

       
      </header>
    </>
  )
}

export default Header;