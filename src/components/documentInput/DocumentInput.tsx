import React from 'react';
import './documentInput.scss';

const DocumentInput = ({ underlineLength, text }) => {
    return (
        <div className="custom-input" style={{minWidth: `${underlineLength}px`}}>{text}</div>
    );
};

export default DocumentInput;