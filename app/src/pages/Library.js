import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  TextField
} from "@aws-amplify/ui-react";
import { Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { createInAppMessaging } from '../graphql/mutations';
import { listInAppMessagings } from '../graphql/queries';

const Library = () => {

  const [videos, setVideos] = useState([]);
  const [username, setUsername] = useState(null);
  const [receivedVideos, setReceivedVideos] = useState([]);

  useEffect(() => {
    fetchVideos();

    Auth.currentAuthenticatedUser()
      .then(user => {
        setUsername(user.username);
        fetchReceivedVideos(user.username)
          .then(videos => setReceivedVideos(videos))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  const fetchVideos = async () => {
    try {
      const credentials = await Auth.currentCredentials(); // fetch current authenticated user credentials including identityId
      const identityId = credentials.identityId;
      const response = await Storage.list('', { level: 'protected' });
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

  async function fetchReceivedVideos(username) {
    try {
      const result = await API.graphql(graphqlOperation(listInAppMessagings));
      const receivedVideos = result.data.listInAppMessagings.items.filter(message => message.to === username);
      console.log('Received videos:', receivedVideos);
      return receivedVideos.map(video => ({
        url: video.link,
        from: video.from,
        description: video.Description
      }));
    } catch (error) {
      console.error('Error fetching received videos:', error);
    }
  }

  const getSignedUrl = async (fileKey) => {
    try {
      const signedUrl = await Storage.get(fileKey);
      console.log('Signed URL:', signedUrl);
      return signedUrl;
    } catch (error) {
      console.error('Error getting signed URL:', error);
    }
  };

  async function sendMessage(from, to, link, description) {
    const newMessage = {
      from,
      to,
      link,
      Description: description,
    };

    try {
      const result = await API.graphql(graphqlOperation(createInAppMessaging, { input: newMessage }));
      console.log('Message sent:', result.data.createInAppMessaging);
      alert('Message sent successfully');
      return result.data.createInAppMessaging;
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }




  // This function is called when delet video button is clicked
  const deleteVideos = async (video) => {

    try {
      console.log('Button clicked for video:', video.title);
      //prompt user to confirm whether to proceed with delete or not
      const confirmDelete = window.confirm('Are you sure you want to delete this video?');

      if (confirmDelete) {
        //Logic for what should happen when the user confirms deletion
        console.log('User confirmed deletion of video:', video.title);
        // await waits for Storage.remove to delete the video from the S3 bucket
        await Storage.remove(video.title, { level: 'protected' })
        console.log(video.title + ' deleted')
        window.alert('Video successfully deleted');
        //refresh the page
        window.location.reload();
      } else {
        // Handle if user cancels deletion
        console.log('Deletion cancelled by user');
        return;
      }
    }
    // error with deletion process
    catch (error) {
      console.error('Error deleting video:', error);
      window.alert('Error deleting video. Please try again later.');
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
          <Button onClick={() => deleteVideos(video)} className="delete-video">Delete Video</Button>
          <form onSubmit={(event) => {
            event.preventDefault();
            sendMessage(username, event.target.elements.to.value, video.url, event.target.elements.description.value);
            console.log(username, event.target.elements.to.value, video.url, event.target.elements.description.value);
          }}>
            <label>
              To:
              <input type="text" name="to" required />
            </label>
            <label>
              Description:
              <textarea name="description" />
            </label>
            <Button type="submit">Send Video</Button>
          </form>
        </div>
      ))}
      <h2>Received Videos</h2>
      {receivedVideos.map((video, index) => (
        <div key={index}>
          <video width="400px" controls>
            <source src={video.url} type="video/mp4" />
          </video>
          <p>From: {video.from}</p>
          <p>Description: {video.description}</p>
        </div>
      ))}

    </div>
  );
};

export default withAuthenticator(Library);