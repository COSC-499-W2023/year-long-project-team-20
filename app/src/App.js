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


function App({ signOut }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => console.log(err));
  }, []);

  return (
    <AmplifyProvider>
      
 
     <View padding="all" className="App">
       <Card>
         <Flex direction="column" align="center" gap="1rem">
         <NavBarHeader2 />
       
           <Heading level={1}>Profile</Heading>
           {user && (
             <>
               <Text variant="h2">Username: {user.username}</Text>
               <Text variant="h2">Email: {user.attributes.email}</Text>
               
             </>
           )}
           <Button onClick={signOut} variant="brand">Sign Out</Button>
         </Flex>
       </Card>
     </View>

    </AmplifyProvider>
  );
}
export default withAuthenticator(App);