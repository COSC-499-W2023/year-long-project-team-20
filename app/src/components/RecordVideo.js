import React, { useState, useRef, useEffect } from 'react';

const Recorder2 = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef();

  const mediaRecorder = useRef(null);
  const mediaStream = useRef(null);

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
    if (mediaRecorder.current) {
      mediaRecorder.current.start(1000);
      setRecording(true);
    }
  };

  //Stop recording and download the video content
  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      videoRef.current.srcObject = null;
      setRecording(false);

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
  };

  
  const playRecording = () => {

    //Check that the video is longer than 0 seconds
    if (recordedChunks.length > 0) {

    //Store the recorded video in blob and set it to play back
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      videoRef.current.src = url;

    }
  };

  return (
    <div>
      <video muted ref={videoRef} autoPlay />
      <div>
        <button id="startButton" onClick={startRecording} disabled={recording}>
          Start Recording
        </button>
        <button id="stopButton" onClick={stopRecording} disabled={!recording}>
          Stop Recording
        </button>
        <button id="playButton" onClick={playRecording} disabled={recordedChunks.length === 0}>
          Play Recording
        </button>

      </div>
    </div>
  );
};

export default Recorder2;
