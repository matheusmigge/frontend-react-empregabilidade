import { useAuth } from "../../../context/UseAuth";
import { useEffect, useState } from "react";
import { Application, Company, Job } from "../../../types";
import axios from "axios";
import CompanyCardsView from "./components/CompanyCardsView";
import CompanyMapView from "./components/CompanyMapView";
import AddJobButton from "./components/add-job-button/AddJobButton";
import EmptyContent from "../../../components/empty-content/EmptyContent";

interface HomeCompanyContentProps {
    userLocation?: {
        latitude: number;
        longitude: number;
    } | null;
    viewMode: "view1" | "view2";
}

function HomeCompanyContent({ userLocation, viewMode }: HomeCompanyContentProps) {
    const { userType, userData } = useAuth();
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userType !== "company" || !userData) return null;
                const company = userData as Company;

                const allJobsRes = await axios.get("http://localhost:3000/jobs");
                const allJobs = allJobsRes.data;
                const companyJobs = allJobs.filter((job: { company: { id: string; }; }) => job.company.id == company.id);
                setJobs(companyJobs);

                const allApplicationsRes = await axios.get("http://localhost:3000/applications");
                const allApplications = allApplicationsRes.data;
                const companyApplications = allApplications.filter(
                    (aplication: { job: { company: { id: string } } }) => aplication.job.company.id == company.id
                );
                setApplications(companyApplications);
                setLoading(false);

            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userData, userType]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    const candidateLocations = applications
        .filter((aplication) => aplication.candidate.address?.lat && aplication.candidate.address?.lng)
        .map((aplication) => ({
            latitude: parseFloat(aplication.candidate.address.lat),
            longitude: parseFloat(aplication.candidate.address.lng),
            id: aplication.id.toString(),
            label: `${aplication.candidate.firstName} ${aplication.candidate.lastName} - ${aplication.job.title}`,
        }));

    return (
        <div>
            {applications.length === 0 ? (
                <>
                    <EmptyContent title={"Sua empresa ainda não cadastrou nenhuma vaga."} subtitle="Para cadastrar, clique no ícone ao lado:" />
                    <AddJobButton showArrow={true}/>
                </>

            ) : viewMode === "view1" ? (
                <CompanyCardsView jobs={jobs} />
            ) : (
                <CompanyMapView userLocation={userLocation} candidateLocations={candidateLocations} aplications={applications} />
            )}
        </div>
    )
}

export default HomeCompanyContent;