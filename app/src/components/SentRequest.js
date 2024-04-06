import React, { useState } from 'react';
import { Button } from "@aws-amplify/ui-react";
import '../css/requestReceived.css';

function SentRequest({ sentTo, description, dueDate, isCompleteInitial, isRead, createdAt }) {
  const [editMode, setEditMode] = useState(false);

  //load description and dueDate from given values
  const [newDescription, setNewDescription] = useState(description);
  const [newDueDate, setNewDueDate] = useState(dueDate);

  //turn on or off edit mode
  const handleEdit = () => {
    setEditMode(!editMode);
  };

  // Update description
  const handleDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  // Update due date
  const handleDueDateChange = (event) => {
    setNewDueDate(event.target.value);
  };

  
  //Has to be updated to change values in database
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New Description:", newDescription);
    console.log("New Due Date:", newDueDate);
    setEditMode(false);
  };

  return (
    <div className="req-card">
      <p className="from">To:  
        <span className="sender"> {sentTo}</span>
      </p>
      
      {!editMode ? (
        <>
          <p className="bold-text">Description: <span className="request-description">{newDescription}</span></p>
          <p className="bold-text">Due Date: <span className="due-date">{newDueDate}</span></p>
          <p className="bold-text">Created At: <span className="created-at">{createdAt}</span></p>
          <p className="bold-text">Status: <span className="status">{isCompleteInitial ? 'Complete' : 'Incomplete'}</span></p>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input 
              type="text" 
              id="littleText" 
              name="littleText" 
              value={newDescription} 
              onChange={handleDescriptionChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
             <input 
               type="date" 
               id="dueDate" 
               name="dueDate" 
               value={newDueDate} 
               onChange={handleDueDateChange} 
               required 
             />
           </div>
      
          <Button type="submit">Submit</Button>
          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </form>
      )}

      {!isRead && <div className="unread-dot"></div>}
    </div>
  );
}

export default SentRequest;
