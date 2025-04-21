import "./Home.css";
import FiltersBar from "../../components/filters-bar/FiltersBar";
import Header from "../../components/header/Header";

import menuIcon from "../../components/header/assets/Menu.svg";
import bellIcon from "../../components/header/assets/bell.svg";
import userIcon from "../../components/header/assets/Ellipse 1.svg";
import Map from "../../components/map/Map";
import Card from "../../components/card/Card";

import { Job, Candidate } from "../../types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsRes, candidatesRes] = await Promise.all([
          axios.get("http://localhost:3000/jobs"),
          axios.get("http://localhost:3000/candidates"),
        ]);

        setJobs(jobsRes.data);
        setCandidates(candidatesRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const loggedUser = candidates[0];

  const userLocation = {
    latitude: parseFloat(loggedUser.address.lat),
    longitude: parseFloat(loggedUser.address.lng),
  };

  const markerLocations = jobs
    .filter((job) => job.address?.lat && job.address?.lng)
    .map((job) => ({
      latitude: parseFloat(job.address.lat),
      longitude: parseFloat(job.address.lng),
      id: job.id.toString(),
      label: job.title,
    }));

  return (
    <div className="home">
      <Header
        imgUrl={menuIcon}
        title="Vagas Disponíveis"
        inputText={true}
        imgUrl1={bellIcon}
        imgUrl2={userIcon}
        useToggle={true}
      ></Header>

      <div className="main-section">
        <FiltersBar></FiltersBar>
        <Map userLocation={userLocation} markerLocations={markerLocations} />

        <div className="card-list">
          {jobs.map((job) => {
            return (
              <Link key={job.id} to="/vacancy" className="linkStyle">
                <Card
                  companyName={job.company.name}
                  logoName={job.company.logoUrl}
                  jobTitle={job.title}
                  available={job.jobAvailable}
                  info={job.workModel}
                  amount={`${job.currentApplications}/${job.maximumApplications}`}
                />
              </Link>);
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

