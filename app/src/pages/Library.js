import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';


const Library = () => {

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


  return (
    <div style={{ paddingLeft: '35px' }}>

      <h2>Uploaded Videos</h2>
      {videos.map((videoUrl, index) => (
        <video key={index} width="400px" controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default withAuthenticator(Library);