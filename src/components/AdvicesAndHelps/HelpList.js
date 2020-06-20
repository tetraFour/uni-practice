import React from "react";

const HelpList = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <li className="helps-list__item">
      <button onClick={handleOpen} className={isOpen ? "active" : ""}>
        {title}
      </button>
      {isOpen && <p>{content}</p>}
    </li>
  );
};

export default HelpList;
