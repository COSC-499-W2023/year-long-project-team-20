import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import '../css/requestReceived.css'; 

function RequestCard({ sender, description, dueDate, isCompleteInitial}) {
  const [isComplete, setIsComplete] = useState(isCompleteInitial);
  const navigate = useNavigate();

  const toggleComplete = () => setIsComplete(!isComplete);

  return (
    <div className="req-card">
      <p className="from">From:  
      <span className="sender"> { sender}</span>
      </p>
      
      <p className="bold-text">Description: <span className="request-description">{description}</span></p>
      <p className="bold-text">Due Date: <span className="due-date">{dueDate}</span></p>
      
      <div className="checkbox-div">  
      <label className="checkbox-label">
        <span className="status-text">{isComplete ? 'Complete' : 'Incomplete'}</span>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={toggleComplete}
          className="checkbox"
        />
      </label>
      </div>

      <Button onClick={() => navigate("/record")} >Record</Button>

    </div>
  );
}

export default RequestCard;
