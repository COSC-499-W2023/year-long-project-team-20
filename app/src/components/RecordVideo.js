import React, { useState, useRef, useEffect } from 'react';
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
import "@aws-amplify/ui-react/styles.css";
import "../css/RecordVideo.css"
import ProgressBar from './/ProgressBar.js';

import { Auth, API, Storage, graphqlOperation } from "aws-amplify";
import { createInAppMessaging, createShareVideo, createVideoList } from '../graphql/mutations';
import Swal from 'sweetalert2';

const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef();

  const mediaRecorder = useRef(null);
  const mediaStream = useRef(null);

  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);

  const cloudFrontUrl = 'https://dglw8nnn1gfb2.cloudfront.net/protected';
  const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 0, percentage: 0 });
  const [isUploading, setIsUploading] = useState(false);



  useEffect(() => {

    startCamera();
  
    return () => {
      // Stop any media tracks if they exist
      if (mediaStream.current) {
        mediaStream.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  //Connect to users camera 
  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
      mediaStream.current = stream;
      videoRef.current.srcObject = stream;

      // Mute the video preview to prevent echo
      videoRef.current.muted = true; 
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
        }
      };
    });
  };



  //Begin recording 
  const startRecording = () => {
    setIsUploading(false);
    setRecordedChunks([]);
    if (!mediaStream.current) startCamera(); 
    if (mediaRecorder.current && mediaStream.current) {
      mediaRecorder.current.start(1000);
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setRecording(false);
      videoRef.current.pause();
      // Disconnect the camera after stopping the recording
      if (mediaStream.current) {
        mediaStream.current.getTracks().forEach((track) => track.stop());
        mediaStream.current = null;
      }
    }
  };

  const downloadVideo = () => {
      // Store the recorded video in blob
      const blob = new Blob(recordedChunks, {
      type: 'video/mp4',
      });

      //let user download video 
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'record.mp4';
      a.click();
  }


  
  const playRecording = () => {
    //Stop showing stream from user's camera
    videoRef.current.srcObject = null;

    //Check that the video is longer than 0 seconds
    if (recordedChunks.length > 0) {

    //Store the recorded video in blob and set it to play back
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      setRecordedVideoUrl(url); 
      videoRef.current.src = url;
      videoRef.current.play();

    }
  };

  const uploadVideo = async () => {
    
    try {
      // Store the recorded video in blob
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });

      // Generate a unique name for the video
      let fileName = `recorded_video_${new Date().toISOString()}.mp4`;
      fileName = fileName.replace(/:/g, "-"); 
    

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
        setIsUploading(true);
        // Display a loading alert
        let swalInstance = Swal.fire({
          title: 'Uploading...',
          text: 'Please wait while we upload your video. (This may take a while, we will notify you when it is done!)',
          allowOutsideClick: false,
        });
        
        // Upload the video to storage
        await uploadToStorage(blob, fileName);

        console.log('Successfully uploaded video');
        Swal.fire({ 
          title: 'Success!',
          text: 'Your video has been uploaded.',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      } else {
        console.log('User cancelled the upload');
      }

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
  };
  
  const uploadToStorage = async (blob, fileName) => {
    const credentials = await Auth.currentCredentials(); // fetch current 
    const user = await Auth.currentAuthenticatedUser();
    try {
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
      await Storage.put(fileName, blob, {
        level: 'protected',
        contentType: 'video/mp4',
        progressCallback,
      });

      // Empty array means this effect will only run once
      // // Call the createShareVideo mutation
      const link = `${cloudFrontUrl}/${credentials.identityId}/${fileName}`;
      await API.graphql(graphqlOperation(createVideoList, { input: { User: user.username, UserID: credentials.identityId, VideoName: fileName, VideoLink: link } }));
  

    } catch (error) {
      console.error('Error uploading video to storage:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error uploading your video.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }

  };

  return (
    <div className="center-container">
      {
        recordedChunks.length > 0 ? (
          recording ? 
            <h1 className="recording-text">Recording Now in Progress...</h1> : 
            <h1 className="stop-text">Recording Ended</h1>
        ) : (
          <h1 style={{ paddingLeft: "35px" }}>Record a Video</h1>
        )
      }
      <div className="video-container">
        <video className="video-responsive" ref={videoRef} autoPlay muted={recording} />
        <div className="buttons-container">
          <div className="button-group">
            <Button onClick={startRecording} disabled={recording} className="start-button">Start Recording</Button>
            {recordedChunks.length > 0 && (recording ? 
              <Button onClick={stopRecording} disabled={false} className="stop-button">Stop Recording</Button> : 
              <Button onClick={stopRecording} disabled={true} className="stop-button">Stop Recording</Button>
            )}
            <Button onClick={playRecording} disabled={recordedChunks.length === 0 || recording} className="play-button">Play Video</Button>
          </div>
          <div className="button-group">
            <Button onClick={uploadVideo} disabled={recordedChunks.length === 0 || recording} className="save-button">Upload</Button>
            <Button onClick={downloadVideo} disabled={recordedChunks.length === 0 || recording} className="download-button">Download</Button>
          </div>

          <div className="button-group" style={{ width: '130vw' }}> 
          { isUploading &&
          <ProgressBar percentage={uploadProgress.percentage} />
          }</div>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
};

export default withAuthenticator(Recorder);