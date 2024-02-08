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

import { Auth, API, Storage, graphqlOperation } from "aws-amplify";
import { createInAppMessaging, createShareVideo, createVideoList } from '../graphql/mutations';


const Upload = () => {
  const fileInput = useRef(null);
  const [videos, setVideos] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const cloudFrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected'

  
  const uploadVideo = async () => {
    const file = fileInput.current.files[0];
    const videoContentType = 'video/mp4';
    const credentials = await Auth.currentCredentials(); // fetch current 
    const user = await Auth.currentAuthenticatedUser();

    console.log("User:"+ user.username+", UserID:"+ credentials.identityId+", VideoName:"+ file.name);
    // Auth.currentAuthenticatedUser()
    //       .then(user => {
    //         const username = user.username;
    //         const email = user.attributes.email;
    //         console.log('Username:', username);
    //         console.log('Email:', email);
    //       })
    //       .catch(err => console.log(err));


    try {
      // Use the put method to upload the video file.
      await Storage.put(file.name, file, {
        level: 'protected',
        contentType: videoContentType
      });
      console.log('Successfully uploaded video');
      // Empty array means this effect will only run once
      // // Call the createShareVideo mutation
      const link = `${cloudFrontUrl}/${credentials.identityId}/${file.name}`;
      console.log('Link:', link);
      await API.graphql(graphqlOperation(createVideoList, { input: { User: user.username, UserID: credentials.identityId, VideoName: file.name, VideoLink: link } }));
      
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