import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

//Once logged in, user will be sent here
const Home = ({ signOut }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {user && (
        <>
          <div className="home-container">
            <div className="left-column">
              <h1>Instant and Secure Video Sharing</h1>
              <p className="features-list">
                <ol className="features-list">
                  <li>
                    <strong onClick={() => navigate("/record")}>Record</strong>{" "}
                    or{" "}
                    <strong onClick={() => navigate("/upload")}>Upload</strong>{" "}
                    a Video
                  </li>
                  <li>Save the Video</li>
                  <li>Share your Video</li>
                  <li>
                    View Your{" "}
                    <strong onClick={() => navigate("/library")}>
                      Video Library
                    </strong>
                  </li>
                </ol>
              </p>
            </div>
            <div className="right-column">
              <img
                src={"https://i.imgur.com/ZbJZzOO.jpeg"}
                alt="Video Sharing"
                className="right-column-image"
              />
              <img
                src={
                  "https://media.istockphoto.com/id/638149788/photo/hands-typing-on-laptop-computer.webp?b=1&s=170667a&w=0&k=20&c=Fzy87O-yVpwtJr-stiVsysrnAE66Pixn_J8OqZLJKhI="
                }
                alt="Video Sharing"
                className="right-column-image"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withAuthenticator(Home);
