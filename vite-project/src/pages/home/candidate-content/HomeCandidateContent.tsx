import CandidateMapView from "./components/CandidateMapView";
import { useAuth } from "../../../context/UseAuth";
import { useEffect, useState } from "react";
import { Candidate, Job } from "../../../types";
import axios from "axios";
import CandidateTableView from "./components/CandidateTableView";

interface HomeCandidateContentProps {
    userLocation?: {
        latitude: number;
        longitude: number;
    } | null;
    viewMode: "view1" | "view2";
}

function HomeCandidateContent({ userLocation, viewMode }: HomeCandidateContentProps) {
    const { userType, userData } = useAuth();
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState<Job[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobsRes = await axios.get("http://localhost:3000/jobs");
                setJobs(jobsRes.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (userType !== "candidate" || !userData) return null;
    const candidate = userData as Candidate;

    if (loading) {
        return <div>Carregando...</div>;
    }

    const jobLocations = jobs
        .filter((job) => job.address?.lat && job.address?.lng)
        .map((job) => ({
            latitude: parseFloat(job.address.lat),
            longitude: parseFloat(job.address.lng),
            id: job.id.toString(),
            label: job.title,
        }));

    return (
        <div>
            {viewMode === "view1" ? (
                <CandidateMapView
                    userLocation={userLocation}
                    jobLocations={jobLocations}
                    jobs={jobs}
                    candidate={candidate}
                />
            ) : (
                <div>
                    {/* Substitua por seu componente de lista */}
                    <CandidateTableView jobs={jobs} candidate={candidate} />
                </div>
            )}
        </div>
    )
}

export default HomeCandidateContent;