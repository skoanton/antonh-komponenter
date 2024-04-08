import React, { useState } from "react";


type AccordionProps = {
  title: string;
  content: React.ReactNode;
  theme: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, theme }) => {
  const [show, setShow] = useState(false);

  const getTheme = () => {
    switch (theme) {
      case "dark":
        return "theme-dark";
      case "light":
        return "theme-light";
      default:
        return "";
    }
  };

  return (
    <div className="accordion">
      <div className={`accordion-item ${getTheme()}`}>
        <div className="accordion-title" onClick={() => setShow(!show)}>
          <div>{title}</div>
          <div>{show ? "-" : "+"}</div>
        </div>
        {show && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
