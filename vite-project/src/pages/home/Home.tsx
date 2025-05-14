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
import { getDistanceFromLatLonInKm } from "../../utils/distance";

function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationRequested, setLocationRequested] = useState(false);
  const { userType, userData, setUserType, setUserData } = useAuth();

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

    console.log("Usuário logado:", userData);
    console.log("Tipo de usuário:", userType);
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
    // remover isso depois ###############################################################################################
    if (!userType) {
      setUserType("candidate");
      setUserData({
        "id": "1",
        "firstName": "João",
        "lastName": "Silva",
        "cpf": "123.456.789-00",
        "email": "joao.silva@example.com",
        "phoneNumber": "+55 81 98765-4321",
        "dateOfBirth": "1990-03-15",
        "password": "SenhaSegura123",
        "address": {
          "cep": "50720400",
          "addressType": "1ª",
          "addressName": "Travessa Virgílio Campelo",
          "address": "1ª Travessa Virgílio Campelo",
          "state": "PE",
          "district": "Madalena",
          "lat": "-8.05552",
          "lng": "-34.91507",
          "city": "Recife",
          "cityIbge": "2611606",
          "ddd": "81"
        },
        "linkedInURL": "https://linkedin.com/in/joaosilva",
        "portfolioURL": "https://portfolio.joaosilva.com",
        "resume": {
          "professionalSummary": "Desenvolvedor de software experiente com especialização em desenvolvimento full-stack e gerenciamento de projetos.",
          "experiences": [
            {
              "experience": {
                "company": "TechCorp",
                "role": "Desenvolvedor Full-Stack",
                "startDate": "2018-06-01",
                "endDate": "2022-12-31",
                "summaryOfDuties": "Desenvolveu aplicações web escaláveis; Colaborou com equipes multifuncionais para entregar projetos no prazo."
              }
            },
            {
              "experience": {
                "company": "InnovaTech",
                "role": "Desenvolvedor Frontend",
                "startDate": "2015-01-01",
                "endDate": "2018-05-31",
                "summaryOfDuties": "Projetou interfaces de usuário; Otimizou desempenho e acessibilidade de plataformas web."
              }
            }
          ],
          "education": [
            {
              "institution": "Universidade Federal de Pernambuco",
              "degree": "Bacharelado em Ciência da Computação",
              "startDate": "2011-02-01",
              "endDate": "2015-12-15"
            }
          ],
          "coursesAndCertifications": [
            {
              "course": {
                "institution": "Coursera",
                "title": "Desenvolvimento Full-Stack",
                "completionYear": 2021
              }
            },
            {
              "course": {
                "institution": "Udemy",
                "title": "React Avançado e Redux",
                "completionYear": 2020
              }
            }
          ],
          "skillsAndCompetencies": [
            "React",
            "Node.js",
            "TypeScript",
            "Metodologias Ágeis",
            "Resolução de Problemas"
          ],
          "languages": [
            {
              "language": "Português",
              "proficiencyLevel": "Fluente"
            },
            {
              "language": "Inglês",
              "proficiencyLevel": "Avançado"
            }
          ]
        }
      });
    }
    // remover isso depois ###############################################################################################
  }, [setUserData, setUserType, userType]);

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
            let distance = "";
            if (
              userData &&
              userData.address &&
              job.address &&
              job.address.lat &&
              job.address.lng
            ) {
              distance = getDistanceFromLatLonInKm(
                parseFloat(userData.address.lat),
                parseFloat(userData.address.lng),
                parseFloat(job.address.lat),
                parseFloat(job.address.lng)
              ).toFixed(1).replace('.',','); // 1 casa decimal e troca ponto por vírgula
            }

            return (
              <Link key={job.id} to="/vacancy" className="linkStyle">
                <Card
                  companyName={job.company.name}
                  logoName={job.company.logoUrl}
                  jobTitle={job.title}
                  available={job.jobAvailable}
                  info={job.workModel}
                  radiusDistance={distance ? `${distance} km` : "N/A"}
                />
              </Link>);
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

