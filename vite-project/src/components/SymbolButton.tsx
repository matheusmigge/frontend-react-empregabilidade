import "../styles/components-css/SymbolButton.css"

interface SymbolButtonProps {
    imageUrl: string;
    className?: string;
    alt?: string;
}

function SymbolButton({ imageUrl, className, alt }: SymbolButtonProps) {
    return (
        <div>
            <button>
                <img src={imageUrl} className={className} alt={alt}/>
            </button>
        </div>
    )
}

export default SymbolButton
