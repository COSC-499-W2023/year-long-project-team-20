import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import {
  ShareVideoForm3
} from '../ui-components';





const Library = () => {

  const [videos, setVideos] = useState([]);
  const [showForm, setShowForm] = useState(false);

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
      {videos.map((video, index) => (
        <div key={index}>
          <video width="400px" controls>
            <source src={video.url} type="video/mp4" />
          </video>
          <p>Title: {video.title}</p>
          <Button onClick={() => deleteVideos(video)}>Delete Video</Button>
          <Button onClick={() => setShowForm(true)}>Share Video</Button>

          {showForm && (
            <ShareVideoForm3
              onSubmit={(fields) => {
                console.log('Form submitted with fields:', fields);
                setShowForm(false);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default withAuthenticator(Library);