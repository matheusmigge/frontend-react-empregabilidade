import "./textualbutton.css";

interface TextButtonProps {
  text: string;
  className?: string;
  imageUrl?: string;
  onClick?: ()=> void;
}

function TextualButton({ text, className, imageUrl, onClick }: TextButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {imageUrl && <img src={imageUrl} />}
      {text}
    </button>
  );
}

export default TextualButton;
