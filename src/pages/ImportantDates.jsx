import React from "react";
import Header from "../components/Header";

const ImportantDates = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <Header />
      <div className="main-content" ref={container}>
        <div className="paper-heading">
          <span className="red-text">IMPORTANT DATES FOR PAPER SUBMISSION</span>
          <div className="line"></div>
        </div>

        <ul>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Conference Dates: 17–19 December 2025
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Paper Submission Opens: 15 July 2025
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Paper Submission Deadline: 08 September 2025
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Acceptance Notification: 08 October 2025 Onwards
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Last Date for Conference Registration: 07 November 2025
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Deadline for Camera-Ready Paper: 15 November 2025
          </li>
        </ul>

        <div className="mb-4" />
      </div>
    </>
  );
};

export default ImportantDates;
