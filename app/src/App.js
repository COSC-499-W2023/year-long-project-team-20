import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Text,
  Flex,
  AmplifyProvider
} from "@aws-amplify/ui-react";


import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Record from "./pages/Record";
import Root from "./pages/Root"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Set up paths for the different pages shown in the nav bar
const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root/>, 
    children: [
      {path: '/', element: <Home />}, //initially user will be sent to the home page
      {path: '/profile', element: <Profile/>},
      {path: '/record', element: <Record/>},
      {path: '/about', element: <About/>}
    ],
  },

]);


function App() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState({ username: '', email: '' });

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUser(user);
        setEditableUser({ username: user.username, email: user.attributes.email });
      })
      .catch(err => console.log(err));
  }, []);

  const editUser = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    setEditableUser({ ...editableUser, [event.target.name]: event.target.value });
  };

  const saveChanges = async () => {
    // Save changes to the user's information here
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(currentUser, {
        'email': editableUser.email,
        // Note: 'username' cannot be updated as it's an immutable attribute.
      });
      // Update the user state
      setUser({ ...user, attributes: { ...user.attributes, email: editableUser.email } });
      
    // Then exit edit mode
    setIsEditing(false);
    } catch (error) {
      console.error("Error updating user attributes", error);
    }
  };

  const deleteUser = async () => {
    const confirmation = window.confirm("Are you sure you want to delete your account?")
    if (confirmation){
    try {
      await Auth.currentAuthenticatedUser();
      await Auth.deleteUser();
    } catch (error) {
      console.error("Error deleting user", error);
    }
  }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return <RouterProvider router={router}/>;

}

export default withAuthenticator(App);