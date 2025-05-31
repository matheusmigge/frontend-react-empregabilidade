import statusIcon from "../assets/jobs-icons/status.svg"
import companyIcon from "../assets/jobs-icons/company.svg"
import titleIcon from "../assets/jobs-icons/description.svg"
import jobTypeIcon from "../assets/jobs-icons/job-type.svg"
import jobModeIcon from "../assets/jobs-icons/briefcase.svg"
import distanceIcon from "../assets/jobs-icons/map-pin.svg"
import { FilterButtonProps } from "../components/filter-button/FilterButton"

const JOB_COLUMNS: Pick<FilterButtonProps, 'iconUrl' | 'text'>[] = [

    { iconUrl: statusIcon, text: "Status" },
    { iconUrl: companyIcon, text: "Empresa" },
    { iconUrl: titleIcon, text: "Título" },
    { iconUrl: jobTypeIcon, text: "Contratação" },
    { iconUrl: jobModeIcon, text: "Modalidade" },
    { iconUrl: distanceIcon, text: "Distância" },

];

export default JOB_COLUMNS;