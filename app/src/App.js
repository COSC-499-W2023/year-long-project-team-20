import React from 'react';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, View } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';
import 'App.css';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <h2>Video Player</h2>
      {/* Placeholder image */}
      <img src="https://unsplash.com/photos/woman-standing-under-tree-FVh_yqLR9eA"/>
    </div>
  );
};

const VideoList = () => {
  return (
    <div className="video-list">
      <h2>Received Videos</h2>
      {receivedVideos.map((video, index) => (
        <div key={index} className="video-list-item">
          <span className="sender">{video.sender}</span>
          <span className="title">{video.title}</span>
        </div>
      ))}
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
      <Button onClick={() => console.log('Go to Settings')}>Settings</Button>
      <Button onClick={signOut}>Sign Out</Button>
      <div className="main-container">
        <VideoList />
        <VideoPlayer />
      </div>
    </View>
  );
}

export default withAuthenticator(App);
