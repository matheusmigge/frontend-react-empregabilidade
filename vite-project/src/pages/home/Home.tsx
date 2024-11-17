import FiltersBar from "../../components/filters-bar/FiltersBar"
import Header from "../../components/header/Header"
import "./Home.css"

import menuIcon from "../../components/header/assets/Menu.svg" ;
import bellIcon from "../../components/header/assets/bell.svg"
import userIcon from "../../components/header/assets/Ellipse 1.svg"

function Home() {
    return (
        <div className="home">
            <Header imgUrl={menuIcon} title="Vagas Disponíveis" inputText="Pesquisar" imgUrl1={bellIcon} imgUrl2={userIcon} useToggle={true}></Header>

            <div className="main-section">
                <FiltersBar></FiltersBar>

                <div className="content">
                    <p>Conteúdo rolável da página</p>
                </div>
            </div>
        </div>
    )
}

export default Home
