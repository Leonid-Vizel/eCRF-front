import React from 'react';
import './circleFirst.scss';

const CircleNoDropDown = ({ status }) => {
  let circleStatus = '';
  switch (status) {
    case 'success': {
      circleStatus = 'success';
      break;
    }
    case 'error': {
      circleStatus = 'error';
      break;
    }
  }

  return (
    <div className="circleNoDropDown">
      <div className={`first-circle ${circleStatus}`} />
    </div>
  );
};

export default CircleNoDropDown;
