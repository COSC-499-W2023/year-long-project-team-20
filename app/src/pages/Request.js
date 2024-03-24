import "@aws-amplify/ui-react/styles.css";
import React, { useState } from 'react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import ToggleButton from '../components/ToggleButton';
import RequestCard from '../components/requestReceived';
import "../css/Request.css";

const Request = () => {
    
    //Set default view 
    const [activeView, setActiveView] = useState('Send a Request');

    const handleToggle = (view) => {
        setActiveView(view);
    };

  //Placeholder function to be updated, runs when submit button is pressed
  const sendRequest = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const littleText = event.target.littleText.value;
    const dueDate = event.target.dueDate.value; 
    console.log("Username: ", username, ", Your Text: ", littleText, ", Due Date: ", dueDate);
  };
  

  //changes view returned depending on which toggle button is selected
  return (
    <div className="toggle-views">
      <div className="custom-toggle">
        <ToggleButton 
          leftTitle="Send a Request"
          rightTitle="Requests Received"
          activeView={activeView}
          onToggle={handleToggle}
        />
      </div>


      <div className="views">
        {activeView === 'Send a Request' ? (
          <div>
            <h1>Submit Your Video Request</h1>
            <form id="userForm" onSubmit={sendRequest}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
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
        ) : (
          <div>
            <h1>Requests Received</h1>
            <div style={{ width: '100%' }}>
              
              {/* Modify to grab requests sent to this user from database  */}
              
              <RequestCard
                sender="John Doe"
                description="Complete the following video"
                dueDate="2024-03-25"
                isCompleteInitial={false}
                isRead={false}
              />
              
              <RequestCard
                sender="Bob Smith"
                description="Complete the following video"
                dueDate="2024-03-25"
                isRead={true}
              />

              


            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuthenticator(Request);
