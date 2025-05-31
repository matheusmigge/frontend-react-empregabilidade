import "./AddJobButton.css";
import { useNavigate } from "react-router-dom";
import SymbolButton from "../../../../../components/symbol-button/SymbolButton";
import plusIcon from "../../../../../assets/plus.svg"
import arrowImg from "../../../../../assets/arrow-tutorial.svg";

interface AddJobButtonProps {
    showArrow?: boolean;
}

function AddJobButton({ showArrow = false }: AddJobButtonProps) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/newVacancy");
    };

    return (
        <div className="add-job-button">

            {showArrow && (
                <img src={arrowImg} className="arrow" />
            )}

            <SymbolButton imageUrl={plusIcon} onClick={handleClick} />
        </div>
    );
};

export default AddJobButton;