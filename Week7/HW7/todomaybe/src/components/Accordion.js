import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  //When it's toggled it becomes open, the state becomes the opposite
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={toggleAccordion}>
        {title}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
