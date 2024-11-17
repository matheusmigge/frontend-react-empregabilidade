import "./Home.css";
import "leaflet/dist/leaflet.css"

import FiltersBar from "../../components/filters-bar/FiltersBar";
import Header from "../../components/header/Header";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import menuIcon from "../../components/header/assets/Menu.svg";
import bellIcon from "../../components/header/assets/bell.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";


function Home() {
    return (
        <div className="home">
            <Header imgUrl={menuIcon} title="Vagas Disponíveis" inputText="Pesquisar" imgUrl1={bellIcon} imgUrl2={userIcon} useToggle={true}></Header>

            <div className="main-section">
                <FiltersBar></FiltersBar>

                <div className="content">
                    <MapContainer center={[-8.0618064,-34.871831,21]} zoom={18} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-8.0618064,-34.871831,21]}>
                            <Popup>
                                Pernambuco trabalhando 🚀
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}

export default Home
