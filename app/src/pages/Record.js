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
import { Storage } from 'aws-amplify';
import {
    CTASection 
   } from '../ui-components';

//import Recorder from "../components/Recorder";
import Recorder from "../components/RecordVideo";

const Record = () => {
  const fileInput = useRef();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const videoData = await Storage.list('');
      const videoKeys = videoData.map(video => video.key);
      setVideos(videoKeys);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

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
    <div style={{ paddingLeft: '35px' }}>
    <h1>Record a Video or Upload a Video </h1>
      <input type="file" accept="video/mp4" ref={fileInput} />
      <Button onClick={uploadVideo} >Upload Video</Button>

      <Recorder />
      
      <TextField
      size="large" 
      width="25%" 
      placeholder="Enter a valid email"
      label="Share your video"
      outerEndComponent={<Button>Share Video</Button>}
      />
      <h2>Video List</h2>
      {videos.map((video, index) => (
        <p key={index}>{video}</p>
      ))}
    </div>
  ); 
};

export default withAuthenticator(Record);