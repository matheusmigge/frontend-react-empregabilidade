import "./FiltersBar.css";
import { useState } from "react";
import FilterButton from "../filter-button/FilterButton";
import SymbolButton from "../symbol-button/SymbolButton";
import statusIcon from "./assets/status.svg"
import companyIcon from "./assets/company.svg"
import titleIcon from "./assets/description.svg"
import jobTypeIcon from "./assets/job-type.svg"
import jobModeIcon from "./assets/briefcase.svg"
import distanceIcon from "./assets/map-pin.svg"
import chevron from "./assets/chevron-right.svg"

function FiltersBar() {

    const [openedBar, setOpenedBar] = useState(false);

    const toggleBar = () => {
        setOpenedBar(!openedBar);
        console.log(openedBar);

    };

    return (
        <div className={`filters-bar ${openedBar ? 'open' : ''}`}>

            <div className="buttons-container">
                <FilterButton iconUrl={statusIcon} text={"Status"} openedBar={openedBar} toggleBar={toggleBar}></FilterButton>
                <FilterButton iconUrl={companyIcon} text={"Empresa"} openedBar={openedBar} toggleBar={toggleBar}></FilterButton>
                <FilterButton iconUrl={titleIcon} text={"Título"} openedBar={openedBar} toggleBar={toggleBar}></FilterButton>
                <FilterButton iconUrl={jobTypeIcon} text={"Contratação"} openedBar={openedBar} toggleBar={toggleBar}></FilterButton>
                <FilterButton iconUrl={jobModeIcon} text={"Modalidade"} openedBar={openedBar} toggleBar={toggleBar}></FilterButton>
                <FilterButton iconUrl={distanceIcon} text={"Distância"} openedBar={openedBar} toggleBar={toggleBar}></FilterButton>
            </div>

            <SymbolButton imageUrl={chevron} className="symbol-button" onClick={toggleBar}></SymbolButton>
        </div>
    )
}

export default FiltersBar
