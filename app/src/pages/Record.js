import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import Recorder from "../components/RecordVideo";

const Record = () => {
  const fileInput = useRef();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const credentials = await Auth.currentCredentials(); // fetch current authenticated user credentials including identityId
      const identityId = credentials.identityId;
      console.log('identityId:', identityId)
      const response = await Storage.list('', { level: 'protected' });
      console.log('response:', response);
      const cloudFrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected/';
      const videoUrls = response.results.map(video => `${cloudFrontUrl}${identityId}/${video.key}`);
      console.log('videoUrls:', videoUrls);
      setVideos(videoUrls);
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
      fetchVideos();
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
      {videos.map((videoUrl, index) => (
        <video key={index} width="400px" controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default withAuthenticator(Record);