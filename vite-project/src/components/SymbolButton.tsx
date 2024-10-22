import "../styles/components-css/SymbolButton.css"

interface SymbolButtonProps {
    imageUrl: string;
    className?: string;
    alt?: string;
    onClick?: () => void;
}

function SymbolButton({ imageUrl, className, alt, onClick }: SymbolButtonProps) {
    return (
        <div className="container">
            <button className={className} onClick={onClick}>
                <img src={imageUrl} alt={alt} />
            </button>
        </div>
    )
}

export default SymbolButton
