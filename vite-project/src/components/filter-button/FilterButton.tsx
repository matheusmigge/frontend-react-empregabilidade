import "./FilterButton.css"
import { useEffect, useState } from "react";
import chevron from "./assets/chevron-down.svg"

interface FilterButtonProps {
    iconUrl: string;
    text: string;
    openedBar?: boolean;
    toggleBar: () => void;
}

function FilterButton({ iconUrl, text, openedBar, toggleBar }: FilterButtonProps) {

    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    useEffect(() => {
        if (!openedBar) {
            setShowFilters(false);
        }
    }, [openedBar]);

    useEffect(() => {
        if (showFilters && !openedBar) {
            toggleBar();
        }
    }, [showFilters, openedBar, toggleBar]);

    return (
        <div className={`filter-button`}>
            <button className={`toggle ${openedBar ? 'open' : ''}`} onClick={toggleFilters}>
                {iconUrl && <img src={iconUrl} />}
                {openedBar && <span>{text}</span>}
                <img src={chevron} alt="chevron icon" />
            </button>

            <form className={`filter-form ${showFilters ? 'open' : ''}`}>
                <label>
                    <input type="checkbox" className="checkbox" name="filter1" />
                    Opção 1
                </label><br />
                <label>
                    <input type="checkbox" className="checkbox" name="filter2" />
                    Opção 2
                </label><br />
                <label>
                    <input type="checkbox" className="checkbox" name="filter3" />
                    Opção 3
                </label><br />
                <button type="submit" className="submit">Aplicar filtros</button>
            </form>
        </div>
    );
}

export default FilterButton;
