import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Text,
  Flex,
  TextField,
  AmplifyProvider,
  ThemeProvider
} from "@aws-amplify/ui-react";

import { Auth, API, Storage, graphqlOperation } from "aws-amplify";
import { createInAppMessaging, createShareVideo, createVideoList } from '../graphql/mutations';


const Upload = () => {
  const fileInput = useRef(null);
  const [videos, setVideos] = useState([]);
  const cloudFrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected';

  const uploadVideo = async () => {
    const file = fileInput.current.files[0];
    const videoContentType = 'video/mp4';
    const credentials = await Auth.currentCredentials(); // fetch current 
    const user = await Auth.currentAuthenticatedUser();

    try {
      // Use the put method to upload the video file.
      await Storage.put(file.name, file, {
        level: 'protected',
        contentType: videoContentType
      });
      // Empty array means this effect will only run once
      // // Call the createShareVideo mutation
      const link = `${cloudFrontUrl}/${credentials.identityId}/${file.name}`;
      await API.graphql(graphqlOperation(createVideoList, { input: { User: user.username, UserID: credentials.identityId, VideoName: file.name, VideoLink: link } }));
      alert('Successfully uploaded video');
      console.log('Successfully uploaded video');

    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video:');
    }
  };

  return (
    <div style={{ paddingLeft: '35px' }}>
      <h1>Upload a video from your computer </h1>
      <input 
        aria-label ="Choose File"
        type="file" 
        accept="video/mp4" 
        ref={fileInput}
        data-testid="chooseFile" />
        
      <Button
        aria-label ="Upload Video" // the aria label attribute provides a label ("Upload Video") to dsecribe the buttons purpose, making it accessible to users who rely on screen readers
        onClick={uploadVideo}
        data-testid="uploadVideo"
        >Upload Video
        </Button>

      {/* Other components like Recorder, etc. can be placed here */}

    
    </div>
  );
};


export default withAuthenticator(Upload);