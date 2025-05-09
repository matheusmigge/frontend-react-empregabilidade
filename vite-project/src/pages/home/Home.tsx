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
import { useAuth } from "../../context/AuthContext";

function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationRequested, setLocationRequested] = useState(false);

  const handleRequestLocation = () => {
    if (!locationRequested) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLocationRequested(true); // Atualiza o estado para indicar que a localização foi obtida
          },
          (error) => {
            console.error("Erro ao obter localização:", error);
            setUserLocation(null); // Define como null caso o usuário negue a permissão
            setLocationRequested(true); // Atualiza o estado mesmo em caso de erro
          }
        );
      } else {
        console.error("Geolocalização não é suportada pelo navegador.");
        setUserLocation(null);
        setLocationRequested(true);
      }
    }
  };

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

  const markerLocations = jobs
    .filter((job) => job.address?.lat && job.address?.lng)
    .map((job) => ({
      latitude: parseFloat(job.address.lat),
      longitude: parseFloat(job.address.lng),
      id: job.id.toString(),
      label: job.title,
    }));

  return (
    <div className="home" onClick={handleRequestLocation}>
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

