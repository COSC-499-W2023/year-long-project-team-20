import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from 'react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import ToggleButton from '../components/ToggleButton';
import RequestCard from '../components/requestReceived';
import Swal from 'sweetalert2';
import "../css/Request.css";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createRequestVideo } from '../graphql/mutations';
import { requestVideosByToAndDuedate } from '../graphql/queries';
import { useViewContext } from '../context/ViewContext.js';
import SentRequest from "../components/SentRequest.js";
import RequestForm from "../components/RequestForm.js";

const Request = () => {


  const [items, setItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10);
  const user = Auth.currentAuthenticatedUser();

  //Load view selected from context
  const { viewSelections, updateViewSelection } = useViewContext();
  const [activeView, setActiveView] = useState(viewSelections.requestPage);
  
  //store changed view in context
  const handleToggle = (view) => {
    setActiveView(view);
    updateViewSelection('requestPage', view);
  };

  useEffect(() => {
    fetchReceivedVideos(user.username);
  }, []);

  async function fetchReceivedVideos(){
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user.username);
      const result = await API.graphql(graphqlOperation(requestVideosByToAndDuedate, {
        to: user.username
      }));
      let items = result.data.requestVideosByToAndDuedate.items;
      setItems(items);
      console.log(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
  };

  useEffect(() => {
    console.log(itemsToShow);
  }, [itemsToShow]);

  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 10);
  };

  const showPreviousItems = () => {
    setItemsToShow(itemsToShow - 10);
  };
  //Placeholder function to be updated, runs when submit button is pressed
  const sendRequest = async (event) => {
    const user = await Auth.currentAuthenticatedUser();
    event.preventDefault();
    const username = event.target.username.value;
    const littleText = event.target.littleText.value;
    const dueDate = event.target.dueDate.value; 
    const isEmail = event.target.isEmail.checked;
    //check if isEmail is checked, if it is, then set toEmail to username, else set toEmail to null

    console.log("Username: ", username, ", Your Text: ", littleText, ", Due Date: ", dueDate);
    await API.graphql(graphqlOperation(createRequestVideo, {input: {created: new Date().toISOString(), duedate: dueDate, from: user.username, to: username, isRead: false, isCompleted: false, message: littleText, fromEmail: user.attributes.email, toEmail: isEmail ? username : null}}));
  
    //show the user an alert if the graphql operation was successful
    Swal.fire({
      title: 'Success!',
      text: 'Your request has been sent.',
      icon: 'success',
      confirmButtonText: 'Close'
    });
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
            

            <RequestForm sendRequest={sendRequest} />
            
            <div className="sent-vids-container">
            <h1>Sent Videos</h1>

            {/* Update to pull sent requests from database*/}
            <SentRequest
              sentTo="Jill"
              description="Please provide a summary video."
              dueDate= "2023-03-31"
              isCompleteInitial={false}
              isRead={true}
              createdAt="2023-03-31"
            />
            </div>

          </div>
        ) : (
          <div>
            <h1>Requests Received</h1>
            <div style={{ width: '100%' }}>
              
              {items.slice(itemsToShow-10, itemsToShow).map((item, index) => (
                <RequestCard
                  key={index}
                  sender={item.from}
                  description={item.message}
                  dueDate={item.duedate}
                  isCompleteInitial={item.isCompleted}
                  isRead={item.isRead}
                  createdAt={item.created}
                />
                
              ))}
              {items.length > itemsToShow && (
                <button onClick={showMoreItems} className="show-more-button">Next Page</button>
              )}
              {itemsToShow > 10 && (
                <button onClick={showPreviousItems} className="show-prev-button">Previous Page</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withAuthenticator(Request);
