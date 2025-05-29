import "./TextualButton.css";

interface TextButtonProps {
  text: string;
  className?: string;
  imageUrl?: string;
  type?: "button" | "submit" | "reset";
  onClick?: ()=> void;
}

function TextualButton({ text, className, imageUrl, type, onClick }: TextButtonProps) {
  return (
    <div className="textual-button-container">
      <button className={className} onClick={onClick} type={type}>
      {imageUrl && <img src={imageUrl} />}
      {text}
      </button>
    </div>
  );
}

export default TextualButton;
