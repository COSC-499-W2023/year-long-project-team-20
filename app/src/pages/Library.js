import React, { useRef, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, TextField } from "@aws-amplify/ui-react";

import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createInAppMessaging } from "../graphql/mutations";
import { listInAppMessagings } from "../graphql/queries";
import Swal from "sweetalert2";
import Modal from "react-modal";
import "../css/Library.css";

Modal.setAppElement('#root');

const Library = () => {
  const [videos, setVideos] = useState([]);
  const [username, setUsername] = useState(null);
  const [receivedVideos, setReceivedVideos] = useState([]);
  const [displayOption, setDisplayOption] = useState("uploaded");

  useEffect(() => {
    fetchVideos();

    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUsername(user.username);
        fetchReceivedVideos(user.username)
          .then((videos) => setReceivedVideos(videos))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchVideos = async () => {
    try {
      const credentials = await Auth.currentCredentials(); // fetch current authenticated user credentials including identityId
      const identityId = credentials.identityId;
      const response = await Storage.list("", { level: "protected" });
      const cloudFrontUrl = "https://dglw8nnn1gfb2.cloudfront.net/protected/";
      const videoUrls = response.results.map((video) => ({
        url: `${cloudFrontUrl}${identityId}/${video.key}`,
        title: video.key,
      }));
      console.log("videoUrls:", videoUrls);
      setVideos(videoUrls);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  async function fetchReceivedVideos(username) {
    try {
      const result = await API.graphql(graphqlOperation(listInAppMessagings));
      const receivedVideos = result.data.listInAppMessagings.items.filter(
        (message) => message.to === username
      );
      console.log("Received videos:", receivedVideos);
      return receivedVideos.map((video) => ({
        url: video.link,
        from: video.from,
        description: video.Description,
      }));
    } catch (error) {
      console.error("Error fetching received videos:", error);
    }
  }

  const getSignedUrl = async (fileKey) => {
    try {
      const signedUrl = await Storage.get(fileKey);
      console.log("Signed URL:", signedUrl);
      return signedUrl;
    } catch (error) {
      console.error("Error getting signed URL:", error);
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
      const result = await API.graphql(
        graphqlOperation(createInAppMessaging, { input: newMessage })
      );
      console.log("Message sent:", result.data.createInAppMessaging);
      alert("Message sent successfully");
      return result.data.createInAppMessaging;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  // This function is called when delet video button is clicked
  const deleteVideos = async (video) => {
    try {
      console.log("Button clicked for video:", video.title);
      //prompt user to confirm whether to proceed with delete or not
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this video!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      }).then(async (result) => {
        if (result.isConfirmed) {
          //Logic for what should happen when the user confirms deletion
          console.log("User confirmed deletion of video:", video.title);
          // await waits for Storage.remove to delete the video from the S3 bucket
          await Storage.remove(video.title, { level: "protected" });
          console.log(video.title + " deleted");
          Swal.fire("Deleted!", "Your video has been deleted.", "success").then(
            () => {
              //refresh the page
              window.location.reload();
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Handle if user cancels deletion
          console.log("Deletion cancelled by user");
          Swal.fire("Cancelled", "Your video is safe :)", "error");
        }
      });
    } catch (error) {
      console.error("Error deleting video:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error deleting your video.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div style={{ paddingLeft: "35px" }}>
      <div>
        <Button onClick={() => setDisplayOption('uploaded')}>Uploaded Videos</Button>
        <Button onClick={() => setDisplayOption('received')}>Received Videos</Button>
      </div>
      {displayOption === 'uploaded' ? (
    <>
      <h2>Uploaded Videos</h2>
      <Videos
        videos={videos}
        deleteVideos={deleteVideos}
        sendMessage={sendMessage}
        username={username}
      />
    </>
  ) : (
    <>
      <h2>Received Videos</h2>
      <Videos
        videos={receivedVideos}
      ></Videos>
    </>
  )}
    </div>
  );
};

export default withAuthenticator(Library);


function VideoCard({ video, index, deleteVideos, sendMessage, username }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(
      username,
      event.target.elements.to.value,
      video.url,
      event.target.elements.description.value
    );
    console.log(
      username,
      event.target.elements.to.value,
      video.url,
      event.target.elements.description.value
    );
    closeModal();
  };


  return (
    <div key={index} className="video-card">
      <video controls>
        <source src={video.url} type="video/mp4" />
      </video>
      <p>{video.title}</p>
      <Button onClick={() => deleteVideos(video)} className="delete-video">
        Delete Video
      </Button>
      <Button onClick={openModal} className="send-video">Send Video</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Send Video Modal"
      >
        <button onClick={closeModal} id="x-button">X</button>

        <form onSubmit={handleSubmit} className="send-form">
          <h2>Send Video</h2>
          <p>{video.title}</p>
          <input type="text" name="to" required placeholder="Receiver's username" />
          <br />
          <textarea name="description" placeholder="Description" />
          <Button type="submit">Send Video</Button>
        </form>
      </Modal>
    </div>
  );
}

function RecVideoCard({ video }) {
  return (
    <div className="video-card">
      <video controls>
        <source src={video.url} type="video/mp4" />
      </video>
      <p>{video.title}</p>
      <p>From: {video.from}</p>
      <p className="description">Description: {video.description}</p>
    </div>
  );
}

function Videos({ videos, deleteVideos, sendMessage, username }) {
  if (deleteVideos !== undefined) {
    return (
      <div className="videos">
        {videos.map((video, index) => (
          <VideoCard
            video={video}
            index={index}
            deleteVideos={deleteVideos}
            sendMessage={sendMessage}
            username={username}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="videos">
        {videos.map((video, index) => (
          <RecVideoCard video={video} />
        ))}
      </div>
    );
  }
}