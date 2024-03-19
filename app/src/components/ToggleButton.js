import React from 'react';
import '../css/ToggleButton.css'; 

//To be used to allow users to alternate between two views
const ToggleButton = ({ leftTitle, rightTitle, activeView, onToggle }) => {
  
  return (
    <div className="toggle-buttons">
      <button
        onClick={() => onToggle(leftTitle)}
        className={`toggle-button ${activeView === leftTitle ? 'active' : ''}`}
      >
        {leftTitle}
      </button>
      <button
        onClick={() => onToggle(rightTitle)}
        className={`toggle-button ${activeView === rightTitle ? 'active' : ''}`}
      >
        {rightTitle}
      </button>
    </div>
  );
};

export default ToggleButton;
