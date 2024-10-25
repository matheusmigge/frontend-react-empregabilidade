import "./textualbutton.css";

interface TextButtonProps {
  text: string;
  className?: string;
  imageUrl?: string;
}

function TextualButton({ text, className, imageUrl }: TextButtonProps) {
  return (
    <button className={className}>
      {imageUrl && <img src={imageUrl} />}
      {text}
    </button>
  );
}

export default TextualButton;
