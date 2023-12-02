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
      downloadVideo();
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

  return (
    <div style={{ paddingTop: '35px', paddingBottom: '35px' }} >
      <video muted ref={videoRef} autoPlay />
      
      <div>
        <Button onClick={startRecording} disabled={recording} className="start-button">Start Recording</Button>
        <Button onClick={stopRecording} disabled={!recording} className="stop-button">Stop Recording</Button>
        <Button onClick={playRecording} disabled={recordedChunks.length === 0 || recording}>Play Video</Button>
      </div>
    </div>
  );
};

export default Recorder;