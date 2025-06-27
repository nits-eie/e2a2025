import React from "react";
import "../assets/css/registration.css";
import Header from "../components/Header";

const OfflinePresentation = () => {
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
            Instructions for Physical (Offline) Presentation
          </h2>
          <p className="text1 mb-2">
            We eagerly await to warmly welcome you to the green campus of NIT Silchar.
          </p>
          <p className="text1 mb-3">
            Below are the detailed instructions for registered participants who have opted to present <strong>offline</strong> during the E2A 2024 conference:
          </p>
          <ol className="ml-3 mb-4 text1">
            <li className="mb-2">
              <strong>Upload:</strong> Your PPT slide file (in PDF format) to the following Google Drive link – <em>to be updated</em>.
            </li>
            <li className="mb-2">
              <strong>Filename:</strong> Use &lt;PPT_YourPaperID_SessionName&gt;. Example: <code>PPT_125_2A</code> for Paper ID 125 in Session 2A.
            </li>
            <li className="mb-2">
              <strong>Deadline:</strong> Last date for uploading is <strong>to be updated</strong>.
            </li>
            <li className="mb-2">
              <strong>Attendance:</strong> Mandatory. Failure to present in your allotted slot will exclude your paper from proceedings.
            </li>
            <li className="mb-2">
              <strong>Duration:</strong> Each paper gets <strong>10 minutes</strong> (<strong>8</strong> minutes presentation + <strong>2</strong> minutes Q&A).
            </li>
            <li className="mb-2">
              After presentation, the session chair will lead the interaction with the presenter.
            </li>
            <li className="mb-2">
              Keep your slides handy to address audience and chair questions during the session.
            </li>
            <li className="mb-2">
              Follow any additional instructions from chairs, co-chairs, and moderators for smooth session conduct.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default OfflinePresentation;