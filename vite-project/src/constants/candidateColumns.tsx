import nameIcon from "../assets/candidates-icons/description.svg";
import distanceIcon from "../assets/candidates-icons/map-pin.svg";
import skillsIcon from "../assets/candidates-icons/icon_pricetags.svg";
import compatibilityIcon from "../assets/candidates-icons/icon-park-outline_user-to-user-transmission.svg";
import applicationPhaseIcon from "../assets/candidates-icons/icon_business-progress.svg";
import higherEducationIcon from "../assets/candidates-icons/book.svg";
import certificationsIcon from "../assets/candidates-icons/award.svg";
import formerExperiencesIcon from "../assets/candidates-icons/trending-up.svg";
import { FilterButtonProps } from "../components/filter-button/FilterButton"

const CANDIDATE_COLUMNS: Pick<FilterButtonProps, 'iconUrl' | 'text'>[] = [

    { iconUrl: nameIcon, text: "Nome" },
    { iconUrl: distanceIcon, text: "Distância" },
    { iconUrl: skillsIcon, text: "Habilidades e competências" },
    { iconUrl: compatibilityIcon, text: "Compatibilidade" },
    { iconUrl: applicationPhaseIcon, text: "Fase de Aplicação" },
    { iconUrl: higherEducationIcon, text: "Formação" },
    { iconUrl: certificationsIcon, text: "Certificações" },
    { iconUrl: formerExperiencesIcon, text: "Experiências" },

];

export default CANDIDATE_COLUMNS;