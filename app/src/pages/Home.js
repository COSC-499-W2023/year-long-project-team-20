import { Outlet } from "react-router-dom";
import logo from "../logo.svg";
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


//Once logged in, user will be sent here
const Home = ({ signOut }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      Auth.currentAuthenticatedUser()
        .then(user => setUser(user))
        .catch(err => console.log(err));
    }, []);


  return (
    <div>             
           {user && (
             <>
              <Heading level={1}>Welcome Back {user.username}!</Heading>
              <span></span>
              <Text variant="h2">New messages will appear here</Text>              
             </>
           )}
           
    </div>
  );
};

export default withAuthenticator (Home);
