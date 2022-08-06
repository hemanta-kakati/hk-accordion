import React, { useState } from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const Accordion = ({ question }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { title, info } = question;

  return (
    <div
      className={`question ${isOpen && "active"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h5>
        {isOpen ? (
          <MdOutlineArrowDropUp className="fs-2 mb-1" />
        ) : (
          <MdOutlineArrowDropDown className="fs-2 mb-1" />
        )}
        {title}
      </h5>

      {isOpen && (
        <div className="info">
          <p className="lead p-4">{info}</p>
          <button className="button primary">Learn More</button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
