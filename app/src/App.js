import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, View } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      {/* Your video player here */}
      <h2>Video Player</h2>
    </div>
  );
};

const VideoList = () => {
  return (
    <div className="video-list">
      {/* List of videos here */}
      <h2>Video List</h2>
    </div>
  );
};

function App() {
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <View className="App">
      <Button onClick={signOut}>Sign Out</Button>
      <div className="main-container">
        <VideoPlayer />
        <VideoList />
      </div>
    </View>
  );
}

export default withAuthenticator(App);
