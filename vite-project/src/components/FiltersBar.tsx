import "../styles/components-css/FiltersBar.css";
import FilterButton from "./FilterButton";
import statusIcon from "../assets/assetsFiltersBar/status.svg"
import companyIcon from "../assets/assetsFiltersBar/company.svg"
import titleIcon from "../assets/assetsFiltersBar/description.svg"
import jobTypeIcon from "../assets/assetsFiltersBar/job-type.svg"
import jobModeIcon from "../assets/assetsFiltersBar/briefcase.svg"
import distanceIcon from "../assets/assetsFiltersBar/map-pin.svg"
import SymbolButton from "./SymbolButton";
import chevron from "../assets/assetsFiltersBar/chevron-right.svg"
import { useState } from "react";

function FiltersBar() {

    const [expandBar, setExpandBar] = useState(false);

    const toggleBar = () => {
        setExpandBar(!expandBar);
    };

    return (
        <div className="bar-container">

            <div className={`buttons-container ${expandBar ? 'open' : ''}`}>
                <FilterButton iconUrl={statusIcon} text={"Status"} expandedBar={expandBar}></FilterButton>
                <FilterButton iconUrl={companyIcon} text={"Empresa"} expandedBar={expandBar}></FilterButton>
                <FilterButton iconUrl={titleIcon} text={"Título"} expandedBar={expandBar}></FilterButton>
                <FilterButton iconUrl={jobTypeIcon} text={"Contratação"} expandedBar={expandBar}></FilterButton>
                <FilterButton iconUrl={jobModeIcon} text={"Modalidade"} expandedBar={expandBar}></FilterButton>
                <FilterButton iconUrl={distanceIcon} text={"Distância"} expandedBar={expandBar}></FilterButton>
            </div>

            <SymbolButton imageUrl={chevron} className="chevron-button" onClick={toggleBar}></SymbolButton>
        </div>
    )
}

export default FiltersBar
