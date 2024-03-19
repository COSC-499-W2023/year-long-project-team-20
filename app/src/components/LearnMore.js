import "../css/learnMore.css";
import { useState } from "react";

// this is the array used to store the data for learn more section
const learnMore = [
  {
    title: "How to upload a video?",
    text: "To upload a video from your file system head over to the upload page using the navbar. Then use the choose file button to select the video file for upload. You can upload multiple videos at a time by using the upload another video button. An alert window will notify you when your video is done uploading. ",
  },
  {
    title: "How to record a video?",
    text: "To record a video using your webcam, head over to the record page using the navbar. Allow the website permissions to access or webcam and audio. Click start recording to begin the recording. Click stop recording to finish your record. Then you can use play video see what you have recorded. If you're satisfied with your recorded video you can click the upload button to save the recorded video in your library. You can also download your recorded video using the download button  ",
  },
  {
    title: "How to share a video?",
    text: "Head over to the library page. Click on share video. This will open up a form. Enter the username of the person you would like to share the video with and a short description of the video that you are sharing is about. Click share video on the form to complete the share vidoe process.",
  },

  {
    title: "How to blur a video?",
    text: "Once we figure this out we will let you know 🙂",
  },
  {
    title: "How to request a video from a user?",
    text: "Navigate to the request page. While you're under the 'Send a request tab', you can fill out the username of the person you are trying to request a video from and a short description of what the video that you are requesting. Click submit once you're done.",
  },
  {
    title: "How to delete a video?",
    text: "Head over to the library page. For every video that you have uploaded or recorded there is a delete button associated with the video. Simply click on the delete video button and follow the prompts to delete your video. ",
  },
];

export default function LearnMore() {
  return (
    <div className="learnMore">
      <h1>Frequently Asked Questions</h1>
      <Accordion data={learnMore} />
      {/*We are passing the learnMore array to the Accordion component as a prop called data */}
    </div>
  );
}

//
function Accordion({ data }) {
  const [currentOpen, setCurrentOpen] = useState(null); // we are controlling the state of the current open accordion item in this parent component. We will keep track of which accordion item is current open.
  return (
    <div className="accordion">
      {/* for each element inside the data array we are rendering an accordion item. title prop is data.title and text prop is data.text, num prop is just the index of the element inside the array denoted by i */}
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text} {/*we are defining the text as a children prop*/}
        </AccordionItem>
      ))}
    </div>
  );
}

// each accordion item takes in props from the parent component called accordion. see map method on accordion compoenent
function AccordionItem({ currentOpen, onOpen, num, title, text, children }) {
  const isOpen = num === currentOpen; //is this accordion item current open or not
  function handleToggle() {
    // when user will click the accordion item, the onOpen event will be triggered which will call this function. This function will then call the setCurrentOpen state function in the accordion component with the num variable. The end result will be that only one accordion item can be opened at a time.
    onOpen(isOpen ? null : num);
  }
  return (
    // the whole component is enlcosed inside a div
    <div
      className={`accordionItem ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      {/*we pass the number, title, text props */}
      <p className="accordionNumber"> {num < 9 ? `0${num + 1}.` : num + 1}</p>
      <p className="accordionTitle">{title}</p>
      {/* if isopen is true then chose - sign otherwise show + sign*/}
      <p className="accordionIcon"> {isOpen ? "-" : "+"}</p>{" "}
      {/*If open is true then only render the context inside the accordion component */}
      {isOpen && <div className="accordionContent-Box">{children}</div>}{" "}
    </div>
  );
}
