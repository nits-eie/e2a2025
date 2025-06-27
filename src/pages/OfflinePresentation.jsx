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
      <div className="bg-white ptb-4" ref={container}>
        <div className="registration mt-4">
          <h3 className="bold">
            Instructions for Physical (Offline) Presentation
          </h3>
          The participants who have opted for offline presentation* in the
          session at E2A-2024 are requested to follow the below given
          guidelines.
          <ol className="ml-4 mt-2">
            <li className="bold">
              Prepare your <span className="boldText">slides in .pptx</span>{" "}
              format for the presentation of 8-10 minutes.
            </li>
            <li className="bold mt-1">
              <span className="boldText">Save your file</span> in the name
              &lt;track no_paper_id_name.pptx&gt;.
            </li>
            <li className="bold mt-1">
              <span className="boldText">Send your presentation</span> file to{" "}
              <a
                className="paperSubmissionLink"
                href="mailto:e2a@ei.nits.ac.in"
              >
                e2a@ei.nits.ac.in
              </a>{" "}
              {/* on or before 11.12.2024. */}
            </li>
            <li className="bold mt-1">
              Keep the{" "}
              <span className="boldText">subject line in the mail</span> as
              &lt;Presentation Slides-Track No.-Paper ID&gt;.
            </li>
            <li className="bold mt-1">
              <span className="boldText">Attendance</span>of the presenter is{" "}
              <span className="boldText">compulsory</span> during the scheduled
              presentation else the paper will not be considered for
              publication.
            </li>
            <li className="bold mt-1">
              For each paper, 15 minutes will be devoted which includes{" "}
              <span className="boldText">8-10 minutes</span> of power point{" "}
              <span className="boldText">presentation</span> followed by{" "}
              <span className="boldText">5-7</span> minutes of live{" "}
              <span className="boldText">interaction</span> during Q&amp;A.
            </li>
            <li className="bold mt-1">
              Please <span className="boldText">follow the instructions</span>{" "}
              from time to time given by the Chairs, Co-chairs and moderators
              for the{" "}
              <span className="boldText">smooth conduction of the session</span>
              .
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

export default OfflinePresentation;
