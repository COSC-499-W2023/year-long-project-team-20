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
import { API, graphqlOperation } from 'aws-amplify';
import { createVideo } from '../graphql/mutations.js';
import { generateClient } from "aws-amplify/api";


const client = generateClient()

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

  const [username, setUsername] = useState('');

  const handleShareVideo = (username, videoLink) => {
    // Get the current date
    const date = new Date().toISOString();

    console.log(`Sharing video ${videoLink} with ${username}`);

    // Call the sendVideo function
    sendVideo(username, videoLink, date);


  };

  const sendVideo = async (username, videoLink, date) => {
    try {
      console.log('Sending video to API...');
      const result = await API.graphql(graphqlOperation(createVideo, {
        input: {
          sentBy: Auth.user.username,
          link: videoLink,
          Date: date
        }
      }));
      console.log('Video shared successfully:', result);
    } catch (error) {
      console.error('Error sharing video:', error);
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
        placeholder="Enter a valid username"
        label="Share your video"
        outerEndComponent={<Button>Share Video</Button>}
      />
      <h2>Video List</h2>
      {videos.map((videoUrl, index) => (
        <div key={index}>
          <video width="400px" controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
          <TextField
            size="large"
            width="25%"
            placeholder="Enter a valid username"
            label="Share your video"
            value = {username}
            onChange={(event)=>setUsername(event.target.value)}
            outerEndComponent={<Button onClick={() => handleShareVideo( username ,videoUrl)}>Share Video</Button>}
          />
        </div>
      ))}
    </div>
  );
};

export default withAuthenticator(Record);