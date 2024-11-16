import React, { useState } from 'react';
import './AccordionBox.css';
import arrowVector from '../../assets/arrowVector.svg';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionBox = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="accordionContainer">
      <div className={`accordionHeader ${isOpen ? "open" : "close"}`} onClick={toggleAccordion}>
        <img src={arrowVector} alt="Toggle" style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' }} />
        {title}
      </div>
      <div className="accordionContent">{children}</div>
    </div>
  );
};

export default AccordionBox;
