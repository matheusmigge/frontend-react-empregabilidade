import "./CompanyCardsView.css"
import FiltersBar from "../../../../components/filters-bar/FiltersBar";
import CardGrid from "../../../../components/card-grid/CardGrid";
import JOB_COLUMNS from "../../../../constants/jobColumns";
import { Job } from "../../../../types";
import AddJobButton from "./add-job-button/AddJobButton";

interface CompanyCardsViewProps {
    jobs: Job[];
}

function CompanyCardsView({ jobs }: CompanyCardsViewProps) {

    return (
        <div className="company-cards-view">
            <FiltersBar columns={JOB_COLUMNS} />

            <CardGrid jobs={jobs} cardLayoutMode={"job"}></CardGrid>

            <AddJobButton/>
        </div>
    )
}

export default CompanyCardsView;