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
            The participants who have opted for offline presentation* in the session at E2A-2024 are requested to follow the below given guidelines.
          </p>
          <ol className="offline-presentation-list">
            <li className="offline-presentation-list-item">
              Prepare your <span className="highlight-text">slides in .pptx</span> format for the presentation of 8-10 minutes.
            </li>
            <li className="offline-presentation-list-item">
              <span className="highlight-text">Save your file</span> in the name &lt;track no_paper_id_name.pptx&gt;.
            </li>
            <li className="offline-presentation-list-item">
              <span className="highlight-text">Send your presentation</span> file to{" "}
              <a className="offline-presentation-link" href="mailto:e2a@ei.nits.ac.in">
                e2a@ei.nits.ac.in
              </a>
            </li>
            <li className="offline-presentation-list-item">
              Keep the <span className="highlight-text">subject line in the mail</span> as &lt;Presentation Slides-Track No.-Paper ID&gt;.
            </li>
            <li className="offline-presentation-list-item">
              <span className="highlight-text">Attendance</span> of the presenter is <span className="highlight-text">compulsory</span> during the scheduled presentation else the paper will not be considered for publication.
            </li>
            <li className="offline-presentation-list-item">
              For each paper, 15 minutes will be devoted which includes <span className="highlight-text">8-10 minutes</span> of PowerPoint <span className="highlight-text">presentation</span> followed by <span className="highlight-text">5-7</span> minutes of live <span className="highlight-text">interaction</span> during Q&A.
            </li>
            <li className="offline-presentation-list-item">
              Please <span className="highlight-text">follow the instructions</span> from time to time given by the Chairs, Co-chairs and moderators for the <span className="highlight-text">smooth conduction of the session</span>.
            </li>
          </ol>
          <span className="offline-presentation-note">
            *The schedule of the presentation session will be intimated soon.
          </span>
        </div>
      </div>
    </>
  );
};

export default OfflinePresentation;
