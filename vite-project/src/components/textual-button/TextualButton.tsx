import "./TextualButton.css";

interface TextButtonProps {
  text: string;
  className?: string;
  imageUrl?: string;
  onClick?: ()=> void;
}

function TextualButton({ text, className, imageUrl, onClick }: TextButtonProps) {
  return (
    <div className="textual-button-container">
      <button className={className} onClick={onClick}>
      {imageUrl && <img src={imageUrl} />}
      {text}
      </button>
    </div>
  );
}

export default TextualButton;
