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
  ThemeProvider,
} from "@aws-amplify/ui-react";

import { Auth, API, Storage, graphqlOperation } from "aws-amplify";

import { createInAppMessaging, createShareVideo, createVideoList } from '../graphql/mutations';
import Swal from 'sweetalert2';
import VideoUpload from "../components/VideoUpload";


const Upload = () => {
  const [videoUploads, setVideoUploads] = useState([<VideoUpload key={0} />]);

  const addVideoUpload = () => {
    const newVideoUpload = <VideoUpload key={videoUploads.length} />;
    
    // Update the state to include the new VideoUpload component
    setVideoUploads(videoUploads.concat(newVideoUpload));
  };


  return (
    <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
      <h1>Upload a video from your computer </h1>
      {videoUploads}
      <Button onClick={addVideoUpload}>Upload Another Video</Button>

    </div>
  );
};

export default withAuthenticator(Upload);
