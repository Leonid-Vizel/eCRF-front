import React from 'react';
import './leftSidebarOption.scss';

const LeftSidebarOption = (text, isRed) => (
  <div className={`left-sidebar-option ${isRed && 'left-sidebar-option-red'}`}>
    <span className="left-span-option">{text}</span>
  </div>
);

export default LeftSidebarOption;
