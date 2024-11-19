import statusIcon from "./assets/status.svg"
import companyIcon from "./assets/company.svg"
import titleIcon from "./assets/description.svg"
import jobTypeIcon from "./assets/job-type.svg"
import jobModeIcon from "./assets/briefcase.svg"
import distanceIcon from "./assets/map-pin.svg"
import { FilterButtonProps } from "../filter-button/FilterButton"

const FILTERS_BAR_ITEMS: Pick<FilterButtonProps, 'iconUrl' | 'text'>[] = [
    
    { iconUrl: distanceIcon, text: "Distância" },
    { iconUrl: statusIcon, text: "Status" },
    { iconUrl: companyIcon, text: "Empresa" },
    { iconUrl: titleIcon, text: "Título" },
    { iconUrl: jobTypeIcon, text: "Contratação" },
    { iconUrl: jobModeIcon, text: "Modalidade" },

];

export default FILTERS_BAR_ITEMS;