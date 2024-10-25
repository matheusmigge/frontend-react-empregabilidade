import "./Header.css"
// import Menu from "./assets/Menu.svg"
// import Notification from "./assets/bell.svg"
// import Profile from "./assets/Ellipse 1.svg"

interface HeaderProps {
  titulo: string;
  className?: string
  imgUrl?: string
  imgUrl1?: string;
  imgUrl2?: string;
}



function Header ({titulo, className, imgUrl, imgUrl1, imgUrl2}: HeaderProps) {

  return(
    <>
      <header className="header-container">
        <section className="left-Header">
              <img src={imgUrl} alt="Menu Hamburguer" className="menu" />
              <h2>{titulo}</h2>
        </section>

        <section className={className}>
            {/* O toggle fica aqui */}
        </section>

        <section className="right-Header">
              <input type="text" placeholder="Pesquisar..." className="input-Src"/>      
              <img src={imgUrl1} alt="Sino de notificação" className="sino" />
              <img src={imgUrl2} alt="Icone de perfil" className="perfil" />
        </section>
      </header>
    </>
  )
}

export default Header;