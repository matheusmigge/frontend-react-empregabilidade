import "../styles/components-css/FilterButton.css"
import chevron from "../assets/assetsFilterButton/chevron-down.svg"
import { useState } from "react";

interface FilterButtonProps {
    iconUrl: string;
    text: string;
    iconAlt?: string;
    expandedBar?: boolean;
}

function FilterButton({ iconUrl, text, iconAlt, expandedBar }: FilterButtonProps) {

    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className={`button-container ${showFilters ? 'open' : ''}`}>
            <button className={`toggle ${expandedBar ? 'open' : ''}`} onClick={toggleFilters}>
                {iconUrl && <img src={iconUrl} alt={iconAlt} />}
                {expandedBar && text}
                <img src={chevron} alt="chevron icon" />
            </button>

            <form className={`filter-form ${showFilters ? 'open' : ''}`}>
                <label>
                    <input type="checkbox" name="filter1" />
                    Opção 1
                </label><br />
                <label>
                    <input type="checkbox" name="filter2" />
                    Opção 2
                </label><br />
                <label>
                    <input type="checkbox" name="filter3" />
                    Opção 3
                </label><br />
                <button type="submit" className="submit" style={{ marginTop: '10px' }}>Aplicar filtros</button>
            </form>
        </div>
    );
}

export default FilterButton;
