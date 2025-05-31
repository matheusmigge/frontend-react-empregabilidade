import "./MyApplications.css"
import Header from "../../components/header/Header";
import CandidateTableView from "../home/candidate-content/components/CandidateTableView";
import { useAuth } from "../../context/UseAuth.ts";
import { Candidate, Job } from "../../types/index.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import EmptyContent from "../../components/empty-content/EmptyContent";
import TextualButton from "../../components/textual-button/TextualButton";
import { useNavigate } from "react-router-dom";


function MyApplications() {
    const { userType, userData, setUserData, setUserType } = useAuth();
    const [loading, setLoading] = useState(true);
    const [userApplicationsJobs, setUserApplicationsJobs] = useState<Job[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        // if(!userData && !userType) {
        //   alert("Você não está logado. Por favor, faça login para acessar esta página.");
        //   window.location.href = "/entrance";
        // }

        if (!userData && !userType) {
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

        if(userType === "company") {
          window.location.href = "/entrance";
        }
    }, [setUserData, setUserType, userData, userType]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (userType !== "candidate" || !userData) return null;
                const candidate = userData as Candidate;

                const allApplicationsRes = await axios.get("http://localhost:3000/applications");
                const allApplications = allApplicationsRes.data;
                const candidateApplicationsJobs = allApplications
                    .filter((aplication: { candidate: { id: string } }) => aplication.candidate.id == candidate.id)
                    .map((application: { job: Job }) => application.job);
                setUserApplicationsJobs(candidateApplicationsJobs);
                setLoading(false);

            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [setUserData, setUserType, userData, userType]);

    return (
        <div className="my-applications">
            <Header title="Minhas candidaturas" useSearch useNotification useProfile useMenu />

            {loading === true ? (
                <div>Carregando...</div>
            ) : (userApplicationsJobs.length === 0 ? (
                <>
                    <EmptyContent title={"Você ainda não possui candidaturas."} />
                    <TextualButton text={"Buscar oportunidades"} onClick={() => navigate("/home")}></TextualButton>
                </>
            ) : userType === "candidate" && userData && (
                <CandidateTableView jobs={userApplicationsJobs} candidate={userData as Candidate} />
            ))}

        </div>
    );
}

export default MyApplications;