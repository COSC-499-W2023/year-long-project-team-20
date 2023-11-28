import React, { useRef } from "react";
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
import { Storage } from 'aws-amplify';
import {
    CTASection 
   } from '../ui-components';

//import Recorder from "../components/Recorder";
import Recorder2 from "../components/RecordVideo";

const Record = () => {
  const fileInput = useRef();

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
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
    <h1>Record</h1>
      <input type="file" accept="video/mp4" ref={fileInput} />
      <Button onClick={uploadVideo}>Upload Video</Button>

      <Recorder2 />
      
      <CTASection></CTASection>
    </div>
  );
};

export default withAuthenticator(Record);