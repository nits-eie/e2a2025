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

        {/* <span className='red-text mb-2'>(To be updated soon...)</span> */}

        <ul>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Paper Submission Opens: 15.07.2024
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Paper Submission Deadline: <s></s> 03.11.2024
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Acceptance Notification: 25.10.2024 Onwards
          </li>
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Last Date for Conference Registration: 20.11.2024
          </li>
          {/* <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Last Date for Conference Registration (Late): 07.12.2024`
          </li> */}
          <li
            style={{ textAlign: "start", fontSize: "1.5rem" }}
            className="mtb-1"
          >
            Deadline for Camera Ready Paper: 25.11.2024
          </li>
          {/* <li style={{textAlign: "start", fontSize: "1.5rem"}} className='mtb-1'>
            Deadline For Final Paper: 15.11.2022
          </li> */}
        </ul>
        <div className="mb-4" />
      </div>
    </>
  );
};

export default ImportantDates;
