
import { Outlet } from "react-router-dom";
import logo from "../logo.svg";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import "../App.css";
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

  return (
    <View padding="all" className="App">
      <Card>
        <Flex direction="column" align="center" gap="1rem">
          <Heading level={1}>Profile</Heading>
          {user && (
            <>
              {isEditing ? (
                <>
                  <input name="username" value={editableUser.username} onChange={handleInputChange} />
                  <input name="email" value={editableUser.email} onChange={handleInputChange} />
                  <Button onClick={saveChanges}>Save Changes</Button>
                </>
              ) : (
                <>
                  <Text variant="h2">Username: {user.username}</Text>
                  <Text variant="h2">Email: {user.attributes.email}</Text>
                  <Button onClick={editUser}>Edit Profile</Button>
                </>
              )}
              <Button onClick={signOut} variant="brand">Sign Out</Button>
              <Button onClick={deleteUser} className="delete-button" variant="destructive">Delete Profile</Button>
            </>
          )}
        </Flex>
      </Card>
    </View>
  );
}

export default withAuthenticator(App);