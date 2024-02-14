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
import { createVideoList } from '../graphql/mutations';


const Upload = () => {
  const fileInput = useRef(null);
  const [videos, setVideos] = useState([]);
  const cloudfrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected';

  const uploadVideo = async () => {
    const file = fileInput.current.files[0];
    const videoContentType = 'video/mp4';
    const credentials = await Auth.currentCredentials(); // fetch current usercredentials
    const user = await Auth.currentAuthenticatedUser();

    try {
      // Use the put method to upload the video file.
      await Storage.put(file.name, file, {
        level: 'protected',
        contentType: videoContentType
      });
      console.log('Successfully uploaded video');
  
      const link = `${cloudfrontUrl}/${credentials.identityId}/${file.name}`;

      try{
        await API.graphql(graphqlOperation(createVideoList, { input: { User: user.username, UserID: credentials.identityId, VideoName: file.name, VideoLink: link } }));
      }catch(e){
        console.log("Error Updating Video List: ", e);
      }
      
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