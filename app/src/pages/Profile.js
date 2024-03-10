import { Outlet } from "react-router-dom";
import logo from "../logo.svg";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import "../css/App.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Text,
  Flex,
  AmplifyProvider,
} from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Swal from "sweetalert2";

function App() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState({ username: "", email: "" });

  const [showValidationCodeUI, setShowValidationCodeUI] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        setEditableUser({
          username: user.username,
          email: user.attributes.email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const editUser = () => {
    setIsEditing(!isEditing);
  };

  //When input is changed allow user to save changes
  const handleInputChange = (event) => {
    setEditableUser({
      ...editableUser,
      [event.target.name]: event.target.value,
    });
    setHasChanges(true);
  };

  //Send verification code to the new email
  async function updateUserEmail() {
    try {
      const user = await Auth.currentAuthenticatedUser();

      //Pass new email
      await Auth.updateUserAttributes(user, {
        email: editableUser.email,
      });

      Swal.fire({
        icon: "info",
        title: "Verification Code Sent",
        text: "A verification code has been sent",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Issue",
        text: "There was an issue, please try again",
      });
      console.log("failed with error", err);
    }
  }

  //Check if user verified code correctly
  async function verifyEmailValidationCode(code) {
    try {
      await Auth.verifyCurrentUserAttributeSubmit("email", code);
      Swal.fire({
        icon: "success",
        title: "Email Verified",
        text: "Email verified successfully",
      }).then(async () => {
        //reload page with updated user info
        const updatedUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setShowValidationCodeUI(false);
        setIsEditing(false);
        window.location.reload();
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Email Verification Failed",
        text: "Failed to verify email",
      });
      setShowValidationCodeUI(false);
      setIsEditing(false);
      window.location.reload();
    }
  }

  //UI that lets user enter their confirmation code
  function ValidationCodeForm() {
    const [validationCode, setValidationCode] = useState(null);
    return (
      <div>
        <label>
          Verification Code:
          <br />
          <input
            onChange={(e) => {
              setValidationCode(e.target.value);
            }}
            type="text"
            name="vc"
          />
        </label>
        <br />
        <Button onClick={() => verifyEmailValidationCode(validationCode)}>
          Confirm Code
        </Button>
      </div>
    );
  }

  const deleteUser = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmation) {
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
                  <Text variant="h2">Username: {user.username}</Text>
                  <input
                    name="email"
                    value={editableUser.email}
                    onChange={handleInputChange}
                  />

                  {/* Check if user needs to validate a code */}

                  {showValidationCodeUI === false && (
                    <Button
                      onClick={async () => {
                        await updateUserEmail();
                        setShowValidationCodeUI(true);
                      }}
                      disabled={!hasChanges}
                    >
                      Save Changes
                    </Button>
                  )}
                  {showValidationCodeUI === true && <ValidationCodeForm />}

                  <Button onClick={editUser}>Cancel</Button>
                </>
              ) : (
                <>
                  <Text variant="h2">Username: {user.username}</Text>
                  <Text variant="h2">Email: {user.attributes.email}</Text>
                  <Button onClick={editUser}>Edit Profile</Button>
                </>
              )}
              <Button onClick={signOut} variant="brand">
                Sign Out
              </Button>
              <Button
                onClick={deleteUser}
                className="delete-button"
                variant="destructive"
              >
                Delete Profile
              </Button>
            </>
          )}
        </Flex>
      </Card>
    </View>
  );
}

export default withAuthenticator(App);
