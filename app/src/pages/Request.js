import "@aws-amplify/ui-react/styles.css";
import React, { useState } from 'react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import ToggleButton from '../components/ToggleButton';
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
    console.log("Username: ", username, ", Your Text: ", littleText);
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
                <label htmlFor="littleText">Description:</label>
                <input type="text" id="littleText" name="littleText" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <h1>Requests Received</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuthenticator(Request);
