import "./Header.css"
import Menu from "./assets/Menu.svg"
import Notification from "./assets/bell.svg"
import Profile from "./assets/Ellipse 1.svg"

interface HeaderProps {
  title: string;
  className?: string;
}

function Header ({title, className}: HeaderProps) {

  return(
    <>
      <header className="header-container">
        <section className="left-Header">
              <img src={Menu} alt="Menu Hamburguer" className="menu" />
              <h2>{title}</h2>
        </section>

        <section>
          {/* Aqui fica o toggle */}
        </section>

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