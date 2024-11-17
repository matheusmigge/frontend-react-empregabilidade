import "./Home.css";
import FiltersBar from "../../components/filters-bar/FiltersBar";
import Header from "../../components/header/Header";

import menuIcon from "../../components/header/assets/Menu.svg";
import bellIcon from "../../components/header/assets/bell.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";
import Map from "../../components/map/Map";


function Home() {
    return (
        <div className="home">
            <Header imgUrl={menuIcon} title="Vagas Disponíveis" inputText="Pesquisar" imgUrl1={bellIcon} imgUrl2={userIcon} useToggle={true}></Header>

            <div className="main-section">

                <FiltersBar></FiltersBar>
                <Map/>
            </div>
        </div>
    )
}

export default Home
