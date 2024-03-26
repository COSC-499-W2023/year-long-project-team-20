import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import '../css/requestReceived.css'; 
import {API, graphqlOperation} from 'aws-amplify';
import { updateRequestVideo } from '../graphql/mutations';

function RequestCard({ sender, description, dueDate, isCompleteInitial, isRead, createdAt }) {
  const [isComplete, setIsComplete] = useState(isCompleteInitial);
  const [Read, setRead] = useState(isRead);
  const navigate = useNavigate();

  function toggleComplete() {
    setIsComplete(!isComplete);
    updateItemIsCompleted(createdAt);
    cardRead();
  }

  //Check if card is read or not
  const initialCardClass = isComplete ? "read-card" : "req-card";
  const [cardClass, setCardClass] = useState(initialCardClass);

  //sets card as read (must be modified to update card status in database)
  const cardRead = () => {
    setCardClass(prevClass => prevClass === "req-card" ? "read-card" : "req-card"); 
    //navigate("/record")
  };

  const updateItemIsCompleted = async () => {
    try {
      const updatedItem = await API.graphql(graphqlOperation(updateRequestVideo, {
        input: {
          created: createdAt,
          isCompleted: !isComplete,
        }
      }));
      console.log('Item updated: ', updatedItem);
    } catch (error) {
      console.error('Error updating item: ', error);
    }
  };

  const markAsRead = async () => {
    try {
      const updatedItem = await API.graphql(graphqlOperation(updateRequestVideo, {
        input: {
          created: createdAt,
          isRead: !isRead
        },
      }));
      // update the state to reflect the change
      // this will depend on how your state is structured
      console.log('Item updated: ', updatedItem);
      setRead(!Read);
    } catch (error) {
      console.error("Error updating item: ", error);
    }
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

      {!Read && <div className="unread-dot"></div>}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={markAsRead}>Mark/Unmark as Read</Button>
        <Button onClick={() => navigate("/record")}>Record</Button>
      </div>
    </div>
  );
}

export default RequestCard;
