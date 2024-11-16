import "./Header.css";

interface HeaderProps {
  title?: string;
  inputText?: string;
  imgUrl?: string;
  imgUrl1?: string;
  imgUrl2?: string;
}

function Header({ title, inputText, imgUrl, imgUrl1, imgUrl2 }: HeaderProps) {
  return (
    <>
      <header className="header-container">
        <section className="left-Header">
          <button className="menu">
            {imgUrl && (
              <img src={imgUrl} alt="Menu Hamburguer" className="menu" />
            )}
          </button>
          {title && <h2 className="title-Header">{title}</h2>}
        </section>

        <section className="mid-Header">{/* O toggle fica aqui */}</section>

        <section className="right-Header">
          {inputText && (
            <input type="text" placeholder={inputText} className="input-Src" />
          )}
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
        </section>
      </header>
    </>
  );
}

export default Header;
