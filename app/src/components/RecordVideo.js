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
import { Storage } from 'aws-amplify';

const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef();

  const mediaRecorder = useRef(null);
  const mediaStream = useRef(null);

  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);


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
    try {
      // Store the recorded video in blob
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });
  
      // Generate a unique name for the video
      const fileName = `recorded_video_${new Date().toISOString()}.mp4`;
  
      // Upload the video to storage
      await uploadToStorage(blob, fileName);

    } catch (error) {

    }
  };
  
  const uploadToStorage = async (blob, fileName) => {
    try {
      // Use the put method to upload the video file.
      await Storage.put(fileName, blob, {
        level: 'protected',
        contentType: 'video/mp4',
      });
  
      alert('Successfully uploaded video');
      console.log('Successfully uploaded video to storage put');
    } catch (error) {
      alert('Error uploading video');
      console.error('Error uploading video to storage: put', error);
    }

  };

  return (
    <div style={{ paddingTop: '2em', paddingBottom: '2em'}} >
      
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
  );
};

export default Recorder;