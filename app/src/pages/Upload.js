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
  AmplifyProvider
} from "@aws-amplify/ui-react";

import { API, Storage, graphqlOperation } from "aws-amplify";
import { createInAppMessaging } from '../graphql/mutations';


const Upload = () => {
  const fileInput = useRef(null);
  const [videos, setVideos] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const uploadEmail = async () => {
    try {
      await API.graphql(graphqlOperation(createInAppMessaging, { input: { email, text: message } }));
      console.log('Successfully uploaded email');
    } catch (error) {
      console.error('Error uploading email:', error);
    }
  };

  return (
    <div style={{ paddingLeft: '35px' }}>
      <h1>Upload a video from your computer </h1>
      <input type="file" accept="video/mp4" ref={fileInput} />
      <Button onClick={uploadVideo}>Upload Video</Button>

      <h2>Share to Email</h2>
      <h5>Enter the email address</h5>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width:'30%'}}/>
      <h5>Enter your message</h5>
      <textarea value={message} onChange={e => setMessage(e.target.value)} rows="5" style={{ width: '75%' }} />
      <Button onClick={uploadEmail}>Share to email</Button>
      {/* Other components like Recorder, etc. can be placed here */}
    </div>
  );
};


export default withAuthenticator(Upload);