import React from 'react';
import '../ProgressBar.css'; 

const ProgressBar = (props) => {
  const { percentage } = props; 

  return (
    <div className="progress-bar">
        <p className="progress-bar-text">{`${percentage}%`}</p>
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
         

    </div>
  );
};

export default ProgressBar;
