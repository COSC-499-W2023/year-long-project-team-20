import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";
import { Storage, API, graphqlOperation, Storage } from 'aws-amplify';
import { createInAppMessaging } from '../graphql/mutations';
import { listInAppMessagings } from '../graphql/queries';
import Swal from 'sweetalert2';

const Library = () => {

  const [videos, setVideos] = useState([]);

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


  // This function is called when delet video button is clicked
  const deleteVideos = async (video) => {

    try {
        console.log('Button clicked for video:', video.title);
        //prompt user to confirm whether to proceed with delete or not
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this video!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then(async (result) => {
          if (result.isConfirmed) {
            //Logic for what should happen when the user confirms deletion
            console.log('User confirmed deletion of video:', video.title);
            // await waits for Storage.remove to delete the video from the S3 bucket
            await Storage.remove(video.title, { level: 'protected' })
            console.log(video.title + ' deleted')
            Swal.fire('Deleted!', 'Your video has been deleted.', 'success')
              .then(() => {
                //refresh the page
                window.location.reload();
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Handle if user cancels deletion
            console.log('Deletion cancelled by user');
            Swal.fire('Cancelled', 'Your video is safe :)', 'error');
          }
        });
      } catch (error) {
          console.error('Error deleting video:', error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting your video.',
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      }
  

  return (
    <div style={{ paddingLeft: '35px' }}>
      <h2>Uploaded Videos</h2>
      {videos.map((video, index) => (
        <div key={index}>
          <video width="400px" controls>
            <source src={video.url} type="video/mp4" />
          </video>
          <p>Title: {video.title}</p>
          <Button onClick={() => deleteVideos(video)} className ="delete-video">Delete Video</Button>
        </div>
      ))}
    </div>
  );
};

export default withAuthenticator(Library);
