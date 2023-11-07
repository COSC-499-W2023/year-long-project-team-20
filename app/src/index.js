import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';
import { Amplify, Storage } from 'aws-amplify';
Amplify.configure(config);

//UPLOADING A VIDEO
// Use the put method to upload the video file. No User Interface as of yet
const putVideo = async (videoFilePath, videoContentType) => {
  try {
    // Use the put method to upload the video file.
    await Storage.put(videoFilePath, /* file object */ null, {
      level: 'protected',
      contentType: videoContentType
    });
    console.log('Successfully uploaded video');
  } catch (error) {
    console.error('Error uploading video:', error);
  }
};

/*
//Usage:
const videoFilePath = 'path/to/video.mp4';
const videoContentType = 'video/mp4';
putVideo(videoFilePath, videoContentType);
*/

const getVideo = async (videoKey) => {
  try {
    const url = await Storage.get(videoKey, {
      level: 'protected',
      contentType: 'video/mp4',
    });
    return url;
  } catch (error) {
    console.error('Error getting video:', error);
    return null;
  }
};

/*
/ Usage:
const videoKey = 'path/to/video.mp4';
getVideo(videoKey)
  .then((url) => {
    if (url) {
      console.log('Video URL:', url);
      // Use the video URL as needed
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
*/

//LIST OF VIDEOS
const listVideos = async (directory) => {
  try {
    const videos = await Storage.list(directory, {
      level: 'protected',
      contentType: 'video/mp4',
    });
    console.log('Videos:', videos);
    return videos;
  } catch (error) {
    console.error('Error listing videos:', error);
    return null;
  }
};

/*
//USAGE:
const videoDirectory = 'path/to/videos';
listVideos(videoDirectory);
*/

//DELETE/REMOVE A VIDEO
const removeVideo = async (videoKey) => {
  try {
    await Storage.remove(videoKey, {
      level: 'protected',
      contentType: 'video/mp4',
    });
    console.log('Video removed successfully');
  } catch (error) {
    console.error('Error removing video:', error);
  }
};

/*
//USAGE:
const videoKey = 'path/to/video.mp4';
removeVideo(videoKey);
*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
