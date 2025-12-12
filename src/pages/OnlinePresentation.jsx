import React from "react";
import "../assets/css/online.css";
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
      <div className="presentation-container" ref={container}>
        <div className="presentation-content">
          <h3 className="presentation-heading">
            Instructions for Online Presentation
          </h3>
          <p className="presentation-text">
            The detailed instructions for registered participants who have opted to present ONLINE during the E2A 2025 conference are as follows:
          </p>
          <ol className="presentation-list">
            <li className="presentation-list-item">
              You are required to prepare a video (<span className="highlight-text">.mp4 format</span>) of your presentation strictly for 8 minutes and submit it <strong>along with</strong> your PPT slides (PDF format)  in the following G-form: 

              <br />
              <a
                className="presentation-link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0GbSFp6dk5HfiHRcNWs9gBEiU3ffYG_51s2zUAUlgEfayhA/viewform?usp=publish-editor"
                title="Link will be updated soon"
              >
                Click Here
              </a>
            </li>
            <li className="presentation-list-item">
              Make sure that you have submitted the above G-form with <span className="highlight-text">video file</span> AND  <span className="highlight-text">presentation slides</span>
            </li>
            <li className="presentation-list-item">
              Name your files as follows:
              <br />
              <span className="highlight-text">
                &lt;Video_YourPaperID_SessionName&gt; and &lt;PPT_YourPaperID_SessionName&gt;
              </span>
              .<br />
              e.g. for paper ID 179 in session 2B: <code>Video_179_2B.mp4</code> and <code>PPT_179_2B.pdf</code>.
            </li>
            <li className="presentation-list-item">
              The last date for uploading these files will be <span className="highlight-text"> 5 December 2025</span>.
            </li>
            <li className="presentation-list-item">
              During your allotted time slot, you must share your screen with your camera <span className="highlight-text">ON</span> and present live using your slides. In case of any technical issue, we will play your pre‑recorded video.
            </li>
            <li className="presentation-list-item">
              Failing to present live during your assigned slot will result in your paper being <span className="highlight-text">excluded</span> from further processing and the conference proceedings.
            </li>
            <li className="presentation-list-item">
              Each paper is allotted <span className="highlight-text">10 minutes total</span>: 8 minutes for presentation and 2 minutes for Q&A.
            </li>
            <li className="presentation-list-item">
              After your 10‑minute slot, the session chair will take over for live Q&A with the presenter.
            </li>
            <li className="presentation-list-item">
              Keep your slides open throughout the session to <span className="highlight-text">answer questions</span> from the audience and chairs.
            </li>
            <li className="presentation-list-item">
              Except for the presenter, all other attendees will remain muted. They may use the “raise hand” feature, and the moderator will unmute them in sequence to ask questions.
            </li>
            <li className="presentation-list-item">
              Please follow any further instructions from the chairs, co‑chairs, and moderators for the <span className="highlight-text">smooth conduct</span> of the session.
            </li>
            {/* <li className="presentation-list-item">
              The specific Google Drive links for each session folder will be updated here as soon as they are available.
            </li> */}
          </ol>
          <span className="presentation-note">
            *Session schedule and connection details will be communicated soon.
          </span>
        </div>
      </div>
    </>
  );
};

export default OnlinePresentation;
