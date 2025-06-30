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
          <h3 className="presentation-heading">Instructions for Online Presentation</h3>
          <p className="presentation-text">
            You may find the following points useful for presenting your paper online in the session at E2A-2024:
          </p>
          <ol className="presentation-list">
            <li className="presentation-list-item">
              For the participants who opted for online presentation, it is mandatory to prepare a video (.mp4 format) of their presentation for 8-10 minutes and send the same along with the ppt file of the presentation to{" "}
              <a className="presentation-link" href="mailto:e2a@ei.nits.ac.in">
                e2a@ei.nits.ac.in
              </a>
            </li>
            <li className="presentation-list-item">
              For online participants, it is compulsory to share your screen with your camera ON and present the paper during the allotted time as per the conference schedule*.
            </li>
            <li className="presentation-list-item">
              Each paper will be allotted only 15 minutes including 8-10 minutes for presentation and 5-7 mins for Q&A.
            </li>
            <li className="presentation-list-item">
              After the completion of the presentation, the chair of the session takes charge of interaction with the presenter.
            </li>
            <li className="presentation-list-item">
              The presenter is advised to use the presentation slides to answer the questions raised by the audience and session chairs. So, please keep your presentation slides ready during the entire presentation.
            </li>
            <li className="presentation-list-item">
              Except for the presenter, the other attendees will remain muted during the session to avoid disruption. They may raise hand, if they have any questions to ask the presenter. The attendees upon raising their hand will be sequentially taken up by the moderator(s) to enable their mic to ask the question.
            </li>
            <li className="presentation-list-item">
              Please follow the given instructions from time to time from the Chairs, Co-chairs and moderators for the smooth conduction of the session.
            </li>
          </ol>
          <span className="presentation-note">
            *The schedule of the presentation session will be intimated soon.
          </span>
        </div>
      </div>
    </>
  );
};

export default OnlinePresentation;
