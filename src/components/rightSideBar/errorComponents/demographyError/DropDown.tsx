import React, { useState } from 'react';
import './demographyError.scss';

const DropDown = ({
  key, value, object, index, span,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="right-sidebar-info" key={key}>
      {/* <span>{span}</span> */}
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {object[Object.keys(value)[index]]}
        </button>
        {isOpen && (
        <div className="dropdown-content">
          <div className="block">
            <span>
              Причина:
              {value[Object.keys(value)[index]].Reason}
            </span>
          </div>
          <div className="block">
            <span>
              Комментарий:
              {value[Object.keys(value)[index]].Comment}
            </span>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
