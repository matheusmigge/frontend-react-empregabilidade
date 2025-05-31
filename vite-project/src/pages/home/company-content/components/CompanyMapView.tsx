import "./CompanyMapView.css"
import FiltersBar from "../../../../components/filters-bar/FiltersBar";
import CANDIDATE_COLUMNS from "../../../../constants/candidateColumns";
import Map from "../../../../components/map/Map";
import { Application } from "../../../../types";
import { Link } from "react-router-dom";
import Card from "../../../../components/card/Card";
import { getJobDistance } from "../../../../utils/distance";

interface CompanyMapViewProps {
    userLocation?: {
        latitude: number,
        longitude: number,
    } | null,
    candidateLocations: {
        latitude: number,
        longitude: number,
        id: string,
        label: string
    }[],
    aplications: Application[];
};

function CompanyMapView({ userLocation, aplications, candidateLocations }: CompanyMapViewProps) {
    return (
        <div className="company-map-view">
            <FiltersBar columns={CANDIDATE_COLUMNS}></FiltersBar>
            <Map userLocation={userLocation} markerLocations={candidateLocations} />

            <div className="card-list">
                {aplications.map((aplication) => {

                    return (
                        <Link key={aplication.id} to={`/vacancy/${aplication.job.id}`} className="linkStyle">
                            <Card
                                layoutMode="application"
                                topText={`${aplication.candidate.firstName} ${aplication.candidate.lastName}`}
                                logoName={aplication.job.company.logoUrl}
                                jobTitle={aplication.job.title}
                                available={aplication.job.jobAvailable}
                                info={aplication.job.workModel}
                                radiusDistance={`${getJobDistance(aplication.candidate, aplication.job)}`}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CompanyMapView;