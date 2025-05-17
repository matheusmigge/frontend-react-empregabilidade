import "./CandidateMapView.css";

import FiltersBar from "../../../../components/filters-bar/FiltersBar";
import Map from "../../../../components/map/Map";
import Card from "../../../../components/card/Card";

import { Link } from "react-router-dom";
import { Candidate, Job } from "../../../../types";
import { getDistanceFromLatLonInKm } from "../../../../utils/distance";

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
    candidate: Candidate ;
}

function CandidateMapView({ userLocation, jobLocations, jobs, candidate }: CandidateMapViewProps) {
    
    return (
        <div className="candidate-map-view">
            <FiltersBar></FiltersBar>
            <Map userLocation={ userLocation } markerLocations={jobLocations} />

            <div className="card-list">
                {jobs.map((job) => {
                    let distance = "";
                    if (
                        candidate &&
                        candidate.address &&
                        job.address &&
                        job.address.lat &&
                        job.address.lng
                    ) {
                        distance = getDistanceFromLatLonInKm(
                            parseFloat(candidate.address.lat),
                            parseFloat(candidate.address.lng),
                            parseFloat(job.address.lat),
                            parseFloat(job.address.lng)
                        ).toFixed(1).replace('.', ',');
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
    )
}

export default CandidateMapView;