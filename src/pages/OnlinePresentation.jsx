import React from "react";
import "../assets/css/registration.css";
import Header from "../components/Header";

const OnlinePresentation = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <Header />
      <div className="bg-white ptb-5 container" ref={container}>
        <div className="registration">
          <h2 className="bold mtb-2 text-center">
            Instructions for Online Presentation
          </h2>
          <p className="text1 mb-2">
            Below are the detailed instructions for registered participants who have opted to present <strong>ONLINE</strong> during the E2A 2025 conference:
          </p>
          <ol className="ml-3 mb-4 text1">
            <li className="mb-2">
              <strong>Upload:</strong> Prepare a video (.mp4 format) of your presentation (strictly 8 minutes) and upload it <em>along with</em> your PPT slides (pdf format) to the designated Google Drive folder for your session – <em>link to be updated</em>.
            </li>
            <li className="mb-2">
              <strong>Folder:</strong> Ensure both files are placed in the correct session folder.
            </li>
            <li className="mb-2">
              <strong>Filename:</strong> Name your files as <code>&lt;Video_YourPaperID_SessionName&gt;</code> and <code>&lt;PPT_YourPaperID_SessionName&gt;</code>. Example: <code>Video_179_2B</code> and <code>PPT_179_2B</code> for Paper ID 179 in Session 2B.
            </li>
            <li className="mb-2">
              <strong>Deadline:</strong> Last date for uploading is <strong>to be updated</strong>.
            </li>
            <li className="mb-2">
              <strong>Live Presentation:</strong> During your slot, share your screen with camera ON and present using the slides. If any technical glitch occurs, the pre-recorded video will be played.
            </li>
            <li className="mb-2">
              <strong>Attendance:</strong> Mandatory. Failure to present at your allotted time will exclude your paper from proceedings.
            </li>
            <li className="mb-2">
              <strong>Duration:</strong> Each paper gets <strong>10 minutes</strong> (8 minutes presentation + 2 minutes Q&A).
            </li>
            <li className="mb-2">
              After the presentation, the session chair will lead the interaction with the presenter.
            </li>
            <li className="mb-2">
              Keep your slides handy to answer questions from the audience and chair.
            </li>
            <li className="mb-2">
              Other attendees will remain muted but may raise hands; the moderator will enable microphones in sequence.
            </li>
            <li className="mb-2">
              Follow any additional instructions from chairs, co-chairs, and moderators for smooth session conduct.
            </li>
            <li className="mb-2">
              Google Drive session links will be updated soon.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default OnlinePresentation;
