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
//import { FFmpeg } from '@ffmpeg/ffmpeg';
//import { fetchFile, toBlobURL } from '@ffmpeg/util';


const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef();

  const mediaRecorder = useRef(null);
  const mediaStream = useRef(null);

  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);

  // Would allow user to preview shorter sections of their video
  // function previewEdit() {

      // Grab elements
  //   const modifiedVideo = document.getElementById('modified-video');
  //   const originalVideo = document.getElementById(modifiedVideo.dataset.from);

  //   [...originalVideo.children].forEach(child => {
  //       modifiedVideo.appendChild(child.cloneNode());
  //   });

      // Modify start and end time of the video based on video data info
  //   modifiedVideo.duration = Number(modifiedVideo.dataset.end) - Number(modifiedVideo.dataset.start);
  //   modifiedVideo.currentTime = modifiedVideo.dataset.start;

  //   modifiedVideo.addEventListener('timeupdate', (e) => {
  //       if (modifiedVideo.currentTime >= modifiedVideo.dataset.end) {
  //           modifiedVideo.pause();
  //           modifiedVideo.currentTime = modifiedVideo.dataset.start;
  //           if (modifiedVideo.dataset.autoreplay === "true") {
  //               modifiedVideo.play();
  //           }
  //       }
  //   });
  // }
// Associated video element, that function would use
//    <video id="modified-video" width="320" height="240" data-from="original-video" data-start="3" data-end="10" data-autoreplay="true" muted></video

// FFFmpeg 
//
//  const {fetchFile} = new FFmpeg({ log: true })
  
  // //Set up progress bar that loads while video gets trimmed
  // const ffmpeg = new FFmpeg({ progress: (e) => {
  //   var button = document.getElementById("trim-button");
  //   button.textContent = "Processing video" + e.time;

  //   button.disabled = true;

  // }});

  // //trim video
  // const transcode = async () => {
  //   alert("transcoding ");

  //   //grab and store video 
  //   const blob = new Blob(recordedChunks, {
  //     type: 'video/mp4',
  //   });
  //   const name = "trimmedVideo.mp4"
  //   const arrayBuffer = await blob.arrayBuffer();
  //   const uint8Array = new Uint8Array(arrayBuffer);

  //   await ffmpeg.load();
  //   await ffmpeg.writeFile(name, uint8Array);

  //   //Use start/end time from user input to trim video 
  //   const start = document.querySelector(".trim-start").value;
  //   const end = document.querySelector(".trim-end").value;
  //   await ffmpeg.exec('-i', name, '-ss', start, '-to', end, await fetchFile(arrayBuffer))
    
  //   //grab trimmed video and let user play video
  //    const trimmedBlob = await fetchFile('trimmedVideo.mp4');
  //    const trimmedUrl = toBlobURL(trimmedBlob);
  //    setRecordedVideoUrl(trimmedUrl);
  // }

  
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
  
      console.log('Successfully uploaded video');
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  
  const uploadToStorage = async (blob, fileName) => {
    try {
      // Use the put method to upload the video file.
      await Storage.put(fileName, blob, {
        level: 'protected',
        contentType: 'video/mp4',
      });
  
      console.log('Successfully uploaded video to storage');
    } catch (error) {
      console.error('Error uploading video to storage:', error);
    }
  };

  return (
    <div style={{ paddingTop: '35px', paddingBottom: '35px'}} >
      <video id="original-video" ref={videoRef} autoPlay muted={recording} />
      
      <div>
        <Button onClick={startRecording} disabled={recording} className="start-button">Start Recording</Button>
        <Button onClick={stopRecording} disabled={!recording} className="stop-button">Stop Recording</Button>
        
        <Button onClick={playRecording} disabled={recordedChunks.length === 0 || recording} className="play-button">Play Video</Button>
        <Button onClick={uploadVideo} disabled={recordedChunks.length === 0 || recording} className="save-button">Save </Button>
        <Button onClick={downloadVideo} disabled={recordedChunks.length === 0 || recording} className="download-button">Download </Button>
      
      </div>
      
      <Button
       // onClick={previewEdit}
         disabled={recordedChunks.length === 0 || recording}
         style={{fontSize: '1.25em', width: '30%', marginTop: '30px'  }}
         className="trim-button"
        > Trim Video </Button>
        
        <input type="number" placeholder="Start" style={{ width: '100px', marginRight: '10px', marginLeft: '20px'}} className="trim-start"/>
        <input type="number" placeholder="End" style={{ width: '100px', marginRight: '10px' }} className="trim-end"/>    
        
    </div> 

  );
};

export default Recorder;