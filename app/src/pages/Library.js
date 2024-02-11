import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import VideoCard from "../ui-components/VideoCard";





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
      const videoUrls = response.results.map(video => ({
        url: `${cloudFrontUrl}${identityId}/${video.key}`,
        title: video.key

      }));
      console.log('videoUrls:', videoUrls);
      setVideos(videoUrls);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const getSignedUrl = async (fileKey) => {
    try {
      const signedUrl = await Storage.get(fileKey);
      console.log('Signed URL:', signedUrl);
      return signedUrl;
    } catch (error) {
      console.error('Error getting signed URL:', error);
    }
  };

  const deleteVideos = (video) => {
    // This function is called when a button is clicked for a specific video
    console.log('Button clicked for video:', video.title);
    // Prompt the user to confirm deletion
    const confirmDelete = window.confirm('Are you sure you want to delete this video?');
    if (confirmDelete) {
      // You can add your logic here for what should happen when the user confirms deletion
      console.log('User confirmed deletion of video:', video.title);
      // For example, you can call Storage.remove to delete the video from the S3 bucket
      Storage.remove(video.title, { level: 'protected' })
      console.log(video.title + ' deleted')
      window.alert('Video successfully deleted');
      //refresh the page
      window.location.reload();
    } else {
      // Handle if user cancels deletion
      console.log('Deletion cancelled by user');
      return;
    }
  };

  return (
    <div style={{ paddingLeft: '35px' }}>
      <h2>Uploaded Videos</h2>
     

      

      <VideoCard
        videoSource = {
          <video width="400px" controls>
<source src="https://dglw8nnn1gfb2.cloudfront.net/protected/ca-central-1:dbc1eb3a-03a5-42e7-aa27-08892f9b892a/recorded_video_2024-02-06T20:33:48.308Z.mp4" type="video/mp4"></source>
        </video>
         
        }

      />
      {videos.map((video, index) => (
        <div key={index}>
          <video width="300px" controls>
            <source src={video.url} type="video/mp4" />
          </video>
          <p>Title: {video.title}</p>
          <Button onClick={() => deleteVideos(video)}>Delete Video</Button>
        </div>
      ))}
    </div>
  );
};

export default withAuthenticator(Library);