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
    // Ask for permission to access user's camera and audio
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
      mediaStream.current = stream;

      // Allow the user to see a preview of the video before they hit record
      videoRef.current.srcObject = stream;
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = function (e) {
        if (e.data.size > 0) {
          setRecordedChunks((prevChunks) => [...prevChunks, e.data]);
        }
      };
    });


    //Mute preview (prevents echo sound)
    videoRef.current.muted = true;

    return () => {
      // stop recording and release media stream 
      if (mediaRecorder.current) {
        mediaRecorder.current.stop();
        mediaStream.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  //Begins recording 
  const startRecording = () => {
    setIsUploading(false);
    //clear any previous recordings 
     setRecordedChunks([]);
     videoRef.current.srcObject = mediaStream.current;

    if (mediaRecorder.current) {
      mediaRecorder.current.start(1000);
      setRecording(true);
    }
  };

  //Stop recording 
  const stopRecording = () => {

    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setRecording(false);
      videoRef.current.pause();
      
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
    setIsUploading(true);
    try {
      // Store the recorded video in blob
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });

      // Generate a unique name for the video
      const fileName = `recorded_video_${new Date().toISOString()}.mp4`;

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
    <div>
    <div >      
      {
        recordedChunks.length > 0 ? (
          recording ? 
            <h1 className="recording-text">Recording Now in Progress...</h1> : 
            <h1 className="stop-text">Recording Ended</h1>
        ) : (
          <h1>Record a Video</h1>
        )
      }
       <video ref={videoRef} autoPlay muted={recording} />
      
      <div className="video-buttons">
        <Button onClick={startRecording} disabled={recording} className="start-button">Start Recording</Button>

        { recordedChunks.length > 0 && (recording ? 
        <Button onClick={stopRecording} disabled={false} className="stop-button">Stop Recording </Button> : 
        <Button onClick={stopRecording} disabled={true} className="stop-button">Stop Recording </Button> 
        )} 
          
      </div>

      <div className="after-recorded-buttons">
        <Button onClick={playRecording} disabled={recordedChunks.length === 0 || recording} className="play-button">Play Video</Button>
        <Button onClick={uploadVideo} disabled={recordedChunks.length === 0 || recording} className="save-button">Upload </Button>
        <Button onClick={downloadVideo} disabled={recordedChunks.length === 0 || recording} className="download-button">Download </Button>
        </div>
      <div>

      </div>
    </div>
    <div>
      {isUploading && <ProgressBar percentage={uploadProgress.percentage} />}
    </div>
    </div>

  );
};

export default withAuthenticator(Recorder);