import "./Home.css";
import FiltersBar from "../../components/filters-bar/FiltersBar";
import Header from "../../components/header/Header";

import menuIcon from "../../components/header/assets/Menu.svg";
import bellIcon from "../../components/header/assets/bell.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";
import Map from "../../components/map/Map";
import Card from "../../components/card/Card";


function Home() {
    return (
        <div className="home">

            <Header imgUrl={menuIcon} title="Vagas Disponíveis" inputText={true} imgUrl1={bellIcon} imgUrl2={userIcon} useToggle={true}></Header>

            <div className="main-section">

                <FiltersBar></FiltersBar>
                <Map />

                <div className="card-list">

                    <Card companyName={"Tec Norte"} logoName={userIcon} jobTitle={"Dev. Front-End Junior"} available={false} info={"Híbrido"} amount={"2/10"}></Card>

                    <Card companyName={"Studio Sul"} logoName={userIcon} jobTitle={"Pessoa Scrum Master"} available={true} info={"Presencial"} amount={"2/10"}></Card>

                    <Card companyName={"Tec Norte"} logoName={userIcon} jobTitle={"Dev. Front-End Junior"} available={false} info={"Híbrido"} amount={"2/10"}></Card>

                    <Card companyName={"Studio Sul"} logoName={userIcon} jobTitle={"Pessoa Scrum Master"} available={true} info={"Presencial"} amount={"2/10"}></Card>

                    <Card companyName={"Tec Norte"} logoName={userIcon} jobTitle={"Dev. Front-End Junior"} available={false} info={"Híbrido"} amount={"2/10"}></Card>

                    <Card companyName={"Studio Sul"} logoName={userIcon} jobTitle={"Pessoa Scrum Master"} available={true} info={"Presencial"} amount={"2/10"}></Card>

                    <Card companyName={"Studio Sul"} logoName={userIcon} jobTitle={"Pessoa Scrum Master"} available={true} info={"Presencial"} amount={"2/10"}></Card>

                    <Card companyName={"Studio Sul"} logoName={userIcon} jobTitle={"Pessoa Scrum Master"} available={true} info={"Presencial"} amount={"2/10"}></Card>
                </div>
            </div>
        </div>
    )
}

export default Home
