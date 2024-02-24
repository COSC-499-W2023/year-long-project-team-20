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
  ThemeProvider
} from "@aws-amplify/ui-react";

import { Auth, API, Storage, graphqlOperation } from "aws-amplify";
import { createInAppMessaging, createShareVideo, createVideoList } from '../graphql/mutations';
import Swal from 'sweetalert2';


const Upload = () => {
  const fileInput = useRef(null);
  const [videos, setVideos] = useState([]);
  const cloudFrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected';

  const uploadVideo = async () => {
    const file = fileInput.current.files[0];
    const videoContentType = 'video/mp4';
    const credentials = await Auth.currentCredentials(); // fetch current 
    const user = await Auth.currentAuthenticatedUser();

    // Confirm if the user wants to upload the video
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to upload the video to your cloud?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, upload it!',
      cancelButtonText: 'No, cancel'
    });

    if (result.isConfirmed) {
      try {
        // Display a loading alert
        let swalInstance = Swal.fire({
          title: 'Uploading...',
          text: 'Please wait while we upload your video. (This may take a while, we will notify you when it is done!)',
          allowOutsideClick: false,
        });

        // Use the put method to upload the video file.
        await Storage.put(file.name, file, {
          level: 'protected',
          contentType: videoContentType
        });

        // Call the createShareVideo mutation
        const link = `${cloudFrontUrl}/${credentials.identityId}/${file.name}`;
        await API.graphql(graphqlOperation(createVideoList, { input: { User: user.username, UserID: credentials.identityId, VideoName: file.name, VideoLink: link } }));

        // Close the loading alert and display a success message
        swalInstance.close();
        Swal.fire({
          title: 'Success!',
          text: 'Your video has been uploaded.',
          icon: 'success',
          confirmButtonText: 'Cool'
        });

        console.log('Successfully uploaded video');

      } catch (error) {
        console.error('Error uploading video:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error uploading your video.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    } else {
      console.log('User cancelled the upload');
    }
  };
  return (
    <div style={{ paddingLeft: '35px' }}>
      <h1>Upload a video from your computer </h1>
      <input 
        aria-label ="Choose File"
        type="file" 
        accept="video/mp4" 
        ref={fileInput}
        data-testid="chooseFile" />
        
      <Button
        aria-label ="Upload Video" // the aria label attribute provides a label ("Upload Video") to dsecribe the buttons purpose, making it accessible to users who rely on screen readers
        onClick={uploadVideo}
        data-testid="uploadVideo"
        >Upload Video
        </Button>

      {/* Other components like Recorder, etc. can be placed here */}

    
    </div>
  );
};


export default withAuthenticator(Upload);