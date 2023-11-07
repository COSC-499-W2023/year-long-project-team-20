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
  Flex
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(err => console.log(err));
  }, []);

  return (
    <View padding="all" className="App">
      <Card>
        <Flex direction="column" align="center" gap="1rem">
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
  );
}
export default withAuthenticator(App);