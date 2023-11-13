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


function App({ signOut }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => console.log(err));
  }, []);

  return <RouterProvider router={router}/>;

}
export default withAuthenticator(App);