import "../styles/components-css/header.css"
import Menu from "../assets/assetsHeader/Menu.svg"
import Notification from "../assets/assetsHeader/bell.svg"
import Profile from "../assets/assetsHeader/Ellipse 1.svg"

interface HeaderProps {
  title: string;
  className?: string;
}

function Header ({title, className}: HeaderProps) {

  return(
    <>
      <header className="header-container">
        <section className="left-Header">
              <img src={Menu} alt="Menu Hamburguer" className={className} />
              <h2>{title}</h2>
        </section>

        <section>
          {/* Aqui fica o toggle */}
        </section>

        <section className={className}>
              <input type="text" placeholder="Pesquisar..." className={className}/>      
              <img src={Notification} alt="Sino de notificação" className={className} />
              <img src={Profile} alt="Icone de perfil" className={className} />
        </section>

       
      </header>
    </>
  )
}

export default Header;