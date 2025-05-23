import "./FiltersBar.css";
import { useState } from "react";
import FilterButton, { FilterButtonProps } from "../filter-button/FilterButton";
import SymbolButton from "../symbol-button/SymbolButton";
import chevron from "./assets/chevron-right.svg"

interface FiltersBarProps {
    columns: Pick<FilterButtonProps, 'iconUrl' | 'text'>[];
}

function FiltersBar({ columns }: FiltersBarProps) {

    const [openedBar, setOpenedBar] = useState(false);

    const toggleBar = () => {
        setOpenedBar(!openedBar);
        console.log(openedBar);

    };

    return (
        <div className={`filters-bar ${openedBar ? 'open' : ''}`}>

            <div className="buttons-container">

                {columns.map((item, index) => (
                    <FilterButton key={index} iconUrl={item.iconUrl} text={item.text} openedBar={openedBar} toggleBar={toggleBar} />
                ))}
            </div>

            <SymbolButton imageUrl={chevron} className="symbol-button" onClick={toggleBar}></SymbolButton>
        </div>
    )
}

export default FiltersBar
