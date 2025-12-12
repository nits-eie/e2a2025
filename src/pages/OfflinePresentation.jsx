import React from "react";
import "../assets/css/offlinePresentation.css";
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
      <div className="offline-presentation-container" ref={container}>
        <div className="offline-presentation-content">
          <h3 className="offline-presentation-heading">
            Instructions for Physical (Offline) Presentation
          </h3>
          <p className="offline-presentation-text">
            We eagerly await to warmly welcome you to the green campus of NIT Silchar.<br />
            The detailed instructions for registered participants who have opted to present OFFLINE during the E2A 2025 conference are as follows:
          </p>
          <ol className="offline-presentation-list">
            <li className="offline-presentation-list-item">
              You are requested to upload your <span className="highlight-text">PPT slide file (in PDF format)</span> to the following Google Drive link –{" "}
              <a
                className="offline-presentation-link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0GbSFp6dk5HfiHRcNWs9gBEiU3ffYG_51s2zUAUlgEfayhA/viewform?usp=publish-editor"
                title="Link will be updated soon"
              >
                Click Here
              </a>
            </li>
            <li className="offline-presentation-list-item">
              You are required to name your PPT file as{" "}
              <span className="highlight-text">&lt;PPT_YourPaperID_SessionName&gt;</span>. For example, if your paper ID is 125 and your session is 2A, name it{" "}
              <span className="highlight-text">PPT_125_2A.pdf</span>.
            </li>
            <li className="offline-presentation-list-item">
              The last date for uploading these files is{" "}
              <span className="highlight-text">5 December 2025</span>.
            </li>
            <li className="offline-presentation-list-item">
              Please be aware that failing to present your work during your assigned slot will result in your paper being <span className="highlight-text">excluded</span> from further processing and the conference proceedings.
            </li>
            <li className="offline-presentation-list-item">
              Each paper is allotted <span className="highlight-text">10 minutes total</span>: 8 minutes for presentation and 2 minutes for Q&A.
            </li>
            <li className="offline-presentation-list-item">
              After your 10‑minute slot, the session chair will take over for live interaction with the presenter.
            </li>
            <li className="offline-presentation-list-item">
              Keep your slides open throughout the session to <span className="highlight-text">answer audience and chair questions</span>.
            </li>
            <li className="offline-presentation-list-item">
              Please follow any further instructions from the chairs, co‑chairs, and moderators for the <span className="highlight-text">smooth conduct</span> of your session.
            </li>
          </ol>
          <p className="offline-presentation-note">
            *Detailed session timings will be communicated soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default OfflinePresentation;
