import "./SymbolButton.css"

interface SymbolButtonProps {
    imageUrl: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

function SymbolButton({ imageUrl, className, type, onClick }: SymbolButtonProps) {
    return (
        <div className={className} >
            <button className="symbol-button" type={type}>
                <img src={imageUrl} onClick={onClick}/>
            </button>
        </div>
    )
}

export default SymbolButton
