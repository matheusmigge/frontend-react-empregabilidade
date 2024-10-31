import "./SymbolButton.css"

interface SymbolButtonProps {
    imageUrl: string;
    className?: string;
    onClick?: () => void;
}

function SymbolButton({ imageUrl, className, onClick }: SymbolButtonProps) {
    return (
        <div className={className} >
            <button className="symbol-button">
                <img src={imageUrl} onClick={onClick}/>
            </button>
        </div>
    )
}

export default SymbolButton
