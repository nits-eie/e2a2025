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
      <div className="bg-white ptb-4" ref={container}>
        <div className="registration mt-4">
          <h3 className="bold">Instructions for Online Presentation</h3>
          You may find the following points useful for presenting your paper
          online in the session at E2A-2024:
          <ol className="ml-4 mt-2">
            <li className="bold">
              For the participants who opted for online presentation, it is
              mandatory to prepare a video (.mp4 format) of their presentation
              for 8-10 minutes and send the same along with the ppt file of the
              presentation to{" "}
              <a
                className="paperSubmissionLink"
                href="mailto:e2a@ei.nits.ac.in"
              >
                e2a@ei.nits.ac.in
              </a>{" "}
              {/* on or before 11 th December 2024. */}
            </li>
            <li className="bold mt-1">
              For online participants, it is compulsory to share your screen
              with your camera ON and present the paper during the allotted time
              as per the conference schedule*.
            </li>
            <li className="bold mt-1">
              Each paper will be allotted only 15 minutes including 8-10 minutes
              for presentation and 5- 7 mins for Q&amp;A.
            </li>
            <li className="bold mt-1">
              After the completion of the presentation, the chair of the session
              takes charge of interaction with the presenter.
            </li>
            <li className="bold mt-1">
              The presenter is advised to use the presentation slides to answer
              the questions raised by the audience and session chairs. So,
              please keep your presentation slides ready during the entire
              presentation.
            </li>
            <li className="bold mt-1">
              Except for the presenter, the other attendees will remain muted
              during the session to avoid disruption. They may raise hand, if
              they have any questions to ask the presenter. The attendees upon
              raising their hand will be sequentially taken up by the
              moderator(s) to enable their mic to ask the question.
            </li>
            <li className="bold mt-1">
              Please follow the given instructions from time to time from the
              Chairs, Co- chairs and moderators for the smooth conduction of the
              session.
            </li>
          </ol>
          <br />
          <span className="grayText">
            *The schedule of the presentation session will be intimated soon.
          </span>
        </div>
        <br />
      </div>
    </>
  );
};

export default OnlinePresentation;
