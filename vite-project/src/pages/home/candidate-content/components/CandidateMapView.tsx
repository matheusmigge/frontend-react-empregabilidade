import "./CandidateMapView.css";

import FiltersBar from "../../../../components/filters-bar/FiltersBar";
import Map from "../../../../components/map/Map";
import Card from "../../../../components/card/Card";

import { Link } from "react-router-dom";
import { Candidate, Job } from "../../../../types";
import { getJobDistance } from "../../../../utils/distance";
import JOB_COLUMNS from "../../../../constants/jobColumns";

interface CandidateMapViewProps {
    userLocation?: {
        latitude: number,
        longitude: number,
    } | null,
    jobLocations: {
        latitude: number,
        longitude: number,
        id: string,
        label: string
    }[],
    jobs: Job[],
    candidate: Candidate;
}

function CandidateMapView({ userLocation, jobLocations, jobs, candidate }: CandidateMapViewProps) {

    return (
        <div className="candidate-map-view">
            <FiltersBar columns={JOB_COLUMNS}></FiltersBar>
            <Map userLocation={userLocation} markerLocations={jobLocations} />

            <div className="card-list">
                {jobs.map((job) => {

                    return (
                        <Link key={job.id} to={`/vacancy/${job.id}`} className="linkStyle">
                            <Card
                                layoutMode="job"
                                topText={job.company.name}
                                logoName={job.company.logoUrl}
                                jobTitle={job.title}
                                available={job.jobAvailable}
                                info={job.workModel}
                                radiusDistance={`${getJobDistance(candidate, job)}`}
                            />
                        </Link>);
                })}
            </div>
        </div>
    )
}

export default CandidateMapView;