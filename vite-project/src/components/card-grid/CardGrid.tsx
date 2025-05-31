import "./CardGrid.css";
import Card from "../card/Card";
import { Job } from "../../types";
import { Link } from "react-router-dom";

interface CardGridProps {
  jobs: Job[];
  cardLayoutMode: "job" | "application";
}

function CardGrid({ jobs, cardLayoutMode }: CardGridProps) {
  return (
    <>
      <div className="card-grid">
        {jobs.map((job) => {

          return (
            <Link key={job.id} to={`/vacancy/${job.id}`} className="linkStyle">
              <Card
                layoutMode={cardLayoutMode}
                topText={job.company.name}
                logoName={job.company.logoUrl}
                jobTitle={job.title}
                available={job.jobAvailable}
                info={job.workModel}
                radiusDistance={``}
                maximumApplications={job.maximumApplications}
                currentApplications={job.currentApplications}
              />
            </Link>);
        })}
      </div>
    </>
  );
}

export default CardGrid;

