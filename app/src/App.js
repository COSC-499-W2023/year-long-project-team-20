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

import {
  NavBarHeader2 
 } from './ui-components';


import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Record from "./pages/Record";

import Root from "./pages/Root"
import { Link } from 'react-router-dom'

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root/>,
    children: [
      {path: '/', element: <Home />},
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

  const navbarOverrides = {
    "Home" : {
      style: {
        cursor: "pointer",
      },

      onClick: () => {
        alert("Hello");
      }
    },

    "Profile" : {
      style: {
        cursor: "pointer",
      },

      onClick: () => {
        alert("Hello");
      }
    },

    "Messages" : {
      style: {
        cursor: "pointer",
      },

      onClick: () => {
        alert("Hello");
      }
    }



  }

  return <RouterProvider router={router}/>;
  //(
    // <AmplifyProvider>
      
 
    //  <View padding="all" className="App">
    //    <Card>
    //      <Flex direction="column" align="center" gap="1rem">
    //      <NavBarHeader2 width={"100"} 
    //      overrides = {navbarOverrides}/>
       
    //        <Heading level={1}>Profile</Heading>
    //        {user && (
    //          <>
    //            <Text variant="h2">Username: {user.username}</Text>
    //            <Text variant="h2">Email: {user.attributes.email}</Text>
               
    //          </>
    //        )}



    //        <Button onClick={signOut} variant="brand">Sign Out</Button>
    //      </Flex>
    //    </Card>
    //  </View>

    // </AmplifyProvider>
  //);
}
export default withAuthenticator(App);