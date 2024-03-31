import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button } from "@aws-amplify/ui-react";

import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { createInAppMessaging } from "../graphql/mutations";
import { listInAppMessagings } from "../graphql/queries";
import Swal from "sweetalert2";
import Modal from "react-modal";
import "../css/Library.css";
import ToggleButton from "../components/ToggleButton";

Modal.setAppElement("#root");

const Library = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]); // this state is used to manage user's uploaded videos
  const [username, setUsername] = useState(null);
  const [receivedVideos, setReceivedVideos] = useState([]);
  const [activeView, setActiveView] = useState("Uploaded Videos"); // default view is Uploaded videos.

  // this function handles the state of active view
  const handleActiveView = (view) => {
    setActiveView(view);
  };

  // this useEffect fetches received videos and is executed on the inital mount of the app and whenever the state of the received Video changes
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUsername(user.username);
        fetchReceivedVideos(user.username)
          .then((videos) => setReceivedVideos(videos))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    console.log("fetch received being executed");
  }, []);

  // this useEffect is executed on the inital mount of the app and whenever the state of the uploadedVideo changes
  useEffect(() => {
    fetchUploadedVideos();
    console.log("fetch uploaded being executed");
  }, []);

  // function for fetching uploaded videos
  const fetchUploadedVideos = async () => {
    try {
      const credentials = await Auth.currentCredentials(); // fetch current authenticated user credentials including identityId
      const identityId = credentials.identityId;
      const response = await Storage.list("", { level: "protected" });
      console.log(response);

      const cloudFrontUrl = "https://dglw8nnn1gfb2.cloudfront.net/protected/";
      const videoUrls = response.results.map((video) => ({
        url: `${cloudFrontUrl}${identityId}/${video.key}`,
        title: video.key,
        eTag: video.eTag,
      }));
      console.log("videoUrls:", videoUrls);
      setUploadedVideos(videoUrls);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // function for fetching uploaded videos
  async function fetchReceivedVideos(username) {
    try {
      const result = await API.graphql(graphqlOperation(listInAppMessagings));
      const receivedVideos = result.data.listInAppMessagings.items.filter(
        (message) => message.to === username
      );
      const validVideos = [];
      console.log("Received videos:", receivedVideos);
      for (const video of receivedVideos) {
        try {
          const response = await fetch(video.link);
          if (response.ok) {
            validVideos.push({
              url: video.link,
              from: video.from,
              description: video.Description,
            });
          }
        } catch (error) {
          console.error("Error fetching video:", error);
        }
      }

      return validVideos;
    } catch (error) {
      console.error("Error fetching received videos:", error);
    }
  }

  // const getSignedUrl = async (fileKey) => {
  //   try {
  //     const signedUrl = await Storage.get(fileKey);
  //     console.log("Signed URL:", signedUrl);
  //     return signedUrl;
  //   } catch (error) {
  //     console.error("Error getting signed URL:", error);
  //   }
  // };

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

  // This function is used for delete a video from s3 bucket
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
          Swal.fire("Deleted!", "Your video has been deleted.", "success");
          // previously we were doing a hard page reload to refresh the list of videos. however we can simply call the fetchUploadedVideos function that will retreive the current list of uploaded videos and update the state of uploadedVideos which will cause the whole library component to rerender. This is much faster than doing a hard page reload.
          fetchUploadedVideos();
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
    <div>
      <div className="display-options">
        <ToggleButton
          leftTitle="Uploaded Videos"
          rightTitle="Received Videos"
          activeView={activeView}
          onToggle={handleActiveView} // changed name of prop to match naming conventions of handling functions related to state. In this case our state that is being updated is activeView. Therfore, the prop function name that updates the state should be handleActiveView
        />
      </div>

      {/*Here we need to render the active views. there are two views that could be rendered. Uploaded videos or received videos. it should directly return the whole view  */}
      {/* first step is to decide what is the active view*/}
      {activeView === "Uploaded Videos" ? (
        // if active view is uploaded videos, then we need to render the uploaded videos collection
        <>
          <UploadedVideosCollection
            uploadedVideos={uploadedVideos} // passing the array of uploaded videos
            deleteVideos={deleteVideos} // passing the delete video function
            sendMessage={sendMessage} // passing the sendMessage function
            username={username} // passing the userName value
          />
        </>
      ) : (
        <>
          <h2>Received Videos</h2>
          <ReceivedVideosCollection
            receivedVideos={receivedVideos} // passing the array of received videos
          ></ReceivedVideosCollection>
        </>
      )}
    </div>
  );
};

export default withAuthenticator(Library);

// this component function is responsible for rendering a collection of uploaded video cards/tiles
function UploadedVideosCollection({
  uploadedVideos, //
  deleteVideos,
  sendMessage,
  username,
}) {
  return (
    <div>
      <h2>Uploaded Videos</h2>
      <div className="videos">
        {uploadedVideos.map((video, index) => (
          <UploadedVideoCard
            video={video}
            index={index}
            deleteVideos={deleteVideos}
            sendMessage={sendMessage}
            username={username}
            key={video.title + "-" + video.eTag}
          />
        ))}
      </div>
    </div>
  );
}

// this component function is responsible for rendering a collection of received video cards/tiles
function ReceivedVideosCollection({ receivedVideos }) {
  return (
    <div className="videos">
      {receivedVideos.map((video, index) => (
        <RecVideoCard video={video} key={video.title + "-" + video.url} /> // key prop was undefined previously. I added it to as we may need it later to manage state of received videos
      ))}
    </div>
  );
}

// this component renders one video card/tile for each uploaded video
function UploadedVideoCard({
  video, // video object
  index,
  deleteVideos, // function for deleting video
  sendMessage,
  username,
}) {
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
      <Button onClick={openModal} className="send-video">
        Send Video
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Send Video Modal"
      >
        <button onClick={closeModal} id="x-button">
          X
        </button>

        <form onSubmit={handleSubmit} className="send-form">
          <h2>Send Video</h2>
          <p>{video.title}</p>
          <input
            type="text"
            name="to"
            required
            placeholder="Receiver's username"
          />
          <br />
          <textarea name="description" placeholder="Description" />
          <Button type="submit">Send Video</Button>
        </form>
      </Modal>
    </div>
  );
}

// this component renders one video card/tile for each received video
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
