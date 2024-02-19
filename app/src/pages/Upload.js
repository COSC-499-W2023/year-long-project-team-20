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

import { Storage } from "aws-amplify";


const Upload = () => {
  const fileInput = useRef(null);
  const [videos, setVideos] = useState([]);

  const uploadVideo = async () => {
    const file = fileInput.current.files[0];
    const videoContentType = 'video/mp4';

    try {
      // Use the put method to upload the video file.
      await Storage.put(file.name, file, {
        level: 'protected',
        contentType: videoContentType
      });
      console.log('Successfully uploaded video');
      // If successful, you might want to update your video list
      setVideos(prevVideos => [...prevVideos, file.name]);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div style={{ paddingLeft: '35px' }}>
      <h1>Upload a video from your computer </h1>
      <input type="file" accept="video/mp4" ref={fileInput} />
      <Button onClick={uploadVideo}>Upload Video</Button>

      {/* Other components like Recorder, etc. can be placed here */}

    
    </div>
  );
};


export default withAuthenticator(Upload);