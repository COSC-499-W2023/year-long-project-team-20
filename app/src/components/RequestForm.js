import React, { useState } from 'react';
import '../css/RequestForm.css'; 

const RequestForm = ({ sendRequest }) => {
  const [isOpen, setIsOpen] = useState(false);

  //expands or collapses form view 
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-container"> 
      <button 
        type="button" 
        className={`collapsible ${isOpen ? 'active' : ''}`} 
        id='expand-request-button'
        onClick={toggleCollapse}
      >
        <h2> Submit a Video Request </h2>

      </button>
      <div className={`content ${isOpen ? 'show' : ''}`}>
    
        <form id="userForm" onSubmit={sendRequest}>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group checkbox-group ">
            <label htmlFor="isEmail">Is this an email?</label>
            <input type="checkbox" id="isEmail" name="isEmail" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="littleText" name="littleText" required />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
