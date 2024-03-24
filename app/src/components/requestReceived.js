import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import '../css/requestReceived.css'; 

function RequestCard({ sender, description, dueDate, isCompleteInitial, isRead }) {
  const [isComplete, setIsComplete] = useState(isCompleteInitial);
  const navigate = useNavigate();

  function toggleComplete() {
    setIsComplete(!isComplete);
    cardRead();
  }

  //Check if card is read or not
  const initialCardClass = isRead ? "read-card" : "req-card";
  const [cardClass, setCardClass] = useState(initialCardClass);

  //sets card as read (must be modified to update card status in database)
  const cardRead = () => {
    setCardClass(prevClass => prevClass === "req-card" ? "read-card" : "req-card"); 
    //navigate("/record")
  };

  return (
    <div className={cardClass}>
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

      <Button onClick={() => navigate("/record")}>Record</Button>

    </div>
  );
}

export default RequestCard;
