import "./Home.css";
import FiltersBar from "../../components/filters-bar/FiltersBar";
import Header from "../../components/header/Header";

import menuIcon from "../../components/header/assets/Menu.svg";
import bellIcon from "../../components/header/assets/bell.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";
import Map from "../../components/map/Map";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

import jobData from "../../data/jobs.json";
import companyData from "../../data/companies.json";
import candidateData from "../../data/candidates.json";

function Home() {

    const loggedUser = candidateData.candidates[0];

            <Header imgUrl={menuIcon} title="Vagas Disponíveis" inputText={true} imgUrl1={bellIcon} imgUrl2={userIcon} useToggle={true}></Header>


    const jobsWithDetails = jobData.jobs.map((job) => {

        const company = companyData.companies.find(
            (company) => company.CompanyId === job.CompanyId
        );

        return {
            ...job,
            CompanyName: company?.CompanyName || "Empresa desconhecida",
            LogoURL: company?.LogoURL || userIcon,
        };
    });

    const userLocation = {
        latitude: parseFloat(loggedUser.Address.lat),
        longitude: parseFloat(loggedUser.Address.lng),
    }

                <div className="card-list">
                    <Link to="/vacancy" className="linkStyle">
                    <Card companyName={"Tec Norte"} logoName={userIcon} jobTitle={"Dev. Front-End Junior"} available={false} info={"Híbrido"} amount={"2/10"}></Card>
                    </Link>

    const markerLocations = jobsWithDetails.map((job) => ({
        latitude: parseFloat(job.Address.lat),
        longitude: parseFloat(job.Address.lng),
        id: job.jobId.toString(),
        label: job.Title
    }));

    return (
        <div className="home">

            <Header imgUrl={menuIcon} title="Vagas Disponíveis" inputText="Pesquisar" imgUrl1={bellIcon} imgUrl2={userIcon} useToggle={true}></Header>

            <div className="main-section">

                <FiltersBar></FiltersBar>
                <Map userLocation={userLocation} markerLocations={markerLocations} />

                <div className="card-list">

                    {jobsWithDetails.map((job) => (
                        <Card
                            key={job.jobId}
                            companyName={job.CompanyName}
                            logoName={job.LogoURL}
                            jobTitle={job.Title}
                            available={job.JobAvailable}
                            info={job.WorkModel}
                            amount={`${job.CurrentApplications}/${job.MaximumApplications}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
