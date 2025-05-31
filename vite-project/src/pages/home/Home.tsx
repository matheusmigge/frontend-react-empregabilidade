import "./Home.css";
import HomeCandidateContent from "./candidate-content/HomeCandidateContent.tsx";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/UseAuth.ts";
import HomeCompanyContent from "./company-content/HomeCompanyContent.tsx";


function Home() {
  const { userType, userData, setUserType, setUserData } = useAuth();
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationRequested, setLocationRequested] = useState(false);
  const [viewMode, setViewMode] = useState<"view1" | "view2">("view1");

  useEffect(() => {
    // if(!userData && !userType) {
    //   alert("Você não está logado. Por favor, faça login para acessar esta página.");
    //   window.location.href = "/entrance";
    // }

    if (!userData && !userType) {
      // setUserType("candidate");
      // setUserData({
      //   "id": "1",
      //   "firstName": "João",
      //   "lastName": "Silva",
      //   "cpf": "123.456.789-00",
      //   "email": "joao.silva@example.com",
      //   "phoneNumber": "+55 81 98765-4321",
      //   "dateOfBirth": "1990-03-15",
      //   "password": "SenhaSegura123",
      //   "address": {
      //     "cep": "50720400",
      //     "addressType": "1ª",
      //     "addressName": "Travessa Virgílio Campelo",
      //     "address": "1ª Travessa Virgílio Campelo",
      //     "state": "PE",
      //     "district": "Madalena",
      //     "lat": "-8.05552",
      //     "lng": "-34.91507",
      //     "city": "Recife",
      //     "cityIbge": "2611606",
      //     "ddd": "81"
      //   },
      //   "linkedInURL": "https://linkedin.com/in/joaosilva",
      //   "portfolioURL": "https://portfolio.joaosilva.com",
      //   "resume": {
      //     "professionalSummary": "Desenvolvedor de software experiente com especialização em desenvolvimento full-stack e gerenciamento de projetos.",
      //     "experiences": [
      //       {
      //         "experience": {
      //           "company": "TechCorp",
      //           "role": "Desenvolvedor Full-Stack",
      //           "startDate": "2018-06-01",
      //           "endDate": "2022-12-31",
      //           "summaryOfDuties": "Desenvolveu aplicações web escaláveis; Colaborou com equipes multifuncionais para entregar projetos no prazo."
      //         }
      //       },
      //       {
      //         "experience": {
      //           "company": "InnovaTech",
      //           "role": "Desenvolvedor Frontend",
      //           "startDate": "2015-01-01",
      //           "endDate": "2018-05-31",
      //           "summaryOfDuties": "Projetou interfaces de usuário; Otimizou desempenho e acessibilidade de plataformas web."
      //         }
      //       }
      //     ],
      //     "education": [
      //       {
      //         "institution": "Universidade Federal de Pernambuco",
      //         "degree": "Bacharelado em Ciência da Computação",
      //         "startDate": "2011-02-01",
      //         "endDate": "2015-12-15"
      //       }
      //     ],
      //     "coursesAndCertifications": [
      //       {
      //         "course": {
      //           "institution": "Coursera",
      //           "title": "Desenvolvimento Full-Stack",
      //           "completionYear": 2021
      //         }
      //       },
      //       {
      //         "course": {
      //           "institution": "Udemy",
      //           "title": "React Avançado e Redux",
      //           "completionYear": 2020
      //         }
      //       }
      //     ],
      //     "skillsAndCompetencies": [
      //       "React",
      //       "Node.js",
      //       "TypeScript",
      //       "Metodologias Ágeis",
      //       "Resolução de Problemas"
      //     ],
      //     "languages": [
      //       {
      //         "language": "Português",
      //         "proficiencyLevel": "Fluente"
      //       },
      //       {
      //         "language": "Inglês",
      //         "proficiencyLevel": "Avançado"
      //       }
      //     ]
      //   }
      // });
      setUserType("company");
      setUserData({
        "id": "1",
        "name": "TechCorp",
        "cnpj": "12.345.678/0001-90",
        "logoUrl": "https://i.ibb.co/6X65zND/company1.png",
        "phoneNumber": "+55 11 1234-5678",
        "adminAccountEmail": "admin@techcorp.com",
        "adminAccountPassword": "AdminPass123",
        "managerAccountEmail": "manager@techcorp.com",
        "managerAccountPassword": "ManagerPass123",
        "hrManagerAccountEmail": "hrmanager@techcorp.com",
        "hrManagerAccountPassword": "HRPass123",
        "accountCreationDate": "2023-05-15"
      });
    }
  }, [setUserData, setUserType, userData, userType]);

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

  return (
    <div className="home" onClick={handleRequestLocation}>
      <Header
        title={userType === "candidate" ? "Vagas" : "Suas vagas"}
        useSearch={true}
        useToggle={true}
        useMenu={true}
        useNotification={true}
        useProfile={true}
        UserType="company"
        onToggleChange={(mode) => {
          setViewMode(mode);
        }}
      />

      {userType === "candidate" && <HomeCandidateContent userLocation={userLocation} viewMode={viewMode} />}
      {userType === "company" && <HomeCompanyContent userLocation={userLocation} viewMode={viewMode} />}
    </div>
  );
}

export default Home;