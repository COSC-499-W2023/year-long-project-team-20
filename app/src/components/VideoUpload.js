import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@aws-amplify/ui-react";
import Swal from "sweetalert2";
import { Auth, Storage, API, graphqlOperation } from "aws-amplify";
import { createVideoList } from "../graphql/mutations";
import ProgressBar from './/ProgressBar.js';
import { useUploadProgress } from '../contexts/UploadProgressContext.js';


const VideoUpload = () => {
  const fileInput = useRef(null);
  const cloudFrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected';

  //Get current status of upload bar 
  const { uploadProgress, setUploadProgress, isUploading, setIsUploading, setVideoName } = useUploadProgress();

  //Function extracted from upload.js 
  const uploadVideo = async () => {  
    setVideoName(file.name);
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
        setIsUploading(true)
        // Display a loading alert
        let swalInstance = Swal.fire({
          title: 'Uploading...',
          text: 'Please wait while we upload your video. (This may take a while, we will notify you when it is done!)',
          allowOutsideClick: false,
        });

        //Update the progress bar
        console.log('progress loading: ')
        const progressCallback = (progress) => {
          console.log(`Progress: ${progress.loaded}/${progress.total}`);
          setUploadProgress({ 
            loaded: progress.loaded, 
            total: progress.total,
            percentage: Math.round((progress.loaded / progress.total) * 100)
          });
  
        };

        // Use the put method to upload the video file.
        await Storage.put(file.name, file, {
          level: 'protected',
          contentType: videoContentType,
          progressCallback,
        });

        // Call the createShareVideo mutation
        const link = `${cloudFrontUrl}/${credentials.identityId}/${file.name}`;
        await API.graphql(graphqlOperation(createVideoList, { input: { User: user.username, UserID: credentials.identityId, VideoName: file.name, VideoLink: link } }));

        // Close the loading alert
        swalInstance.close();

        // Display a success message
        Swal.fire({
          title: 'Success!',
          text: 'Your video has been uploaded.',
          icon: 'success',
          confirmButtonText: 'Cool'
        });

        // Log success message
        console.log('Successfully uploaded video');

      } catch (error) {
        setIsUploading(false)
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
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#ededed' }}>
      <input
        aria-label="Choose File"
        type="file"
        accept="video/mp4"
        ref={fileInput}
        data-testid="chooseFile"
      />
      <Button 
        aria-label="Upload Video"
        onClick={uploadVideo}
        data-testid="uploadVideo"
        style={{backgroundColor: 'white' }}
      >
        Upload Video
      </Button>

      <div style={{ marginLeft: '20px', width: '55vw' }}>
        {isUploading &&<ProgressBar percentage={uploadProgress.percentage} />}
      </div>
    
    </div>
  );
};

export default VideoUpload;
