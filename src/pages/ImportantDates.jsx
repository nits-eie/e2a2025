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
      <div className="important-dates-container" ref={container}>
        <div className="important-dates-content">
          <h1 className="important-dates-title">Important Dates for Paper Submission</h1>
          <div className="divider"></div>
          <ul className="dates-list">
            <li className="date-item">
              <span className="date-label">Paper Submission Opens:</span>
              <span className="date-value">15.07.2024</span>
            </li>
            <li className="date-item">
              <span className="date-label">Paper Submission Deadline:</span>
              <span className="date-value">03.11.2024</span>
            </li>
            <li className="date-item">
              <span className="date-label">Acceptance Notification:</span>
              <span className="date-value">25.10.2024 onwards</span>
            </li>
            <li className="date-item">
              <span className="date-label">Last Date for Conference Registration:</span>
              <span className="date-value">20.11.2024</span>
            </li>
            <li className="date-item">
              <span className="date-label">Deadline for Camera Ready Paper:</span>
              <span className="date-value">25.11.2024</span>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .important-dates-container {
          width: 100%;
          background-color: #f8f9fa;
          padding: 2rem 0;
        }

        .important-dates-content {
          width: 85%;
          max-width: 1000px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 2.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .important-dates-title {
          color: #2c3e50;
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .divider {
          height: 2px;
          background-color: #3498db;
          width: 100px;
          margin: 0 auto 2rem;
        }

        .dates-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .date-item {
          background-color: #f8f9fa;
          margin-bottom: 1rem;
          padding: 1rem;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .date-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .date-label {
          font-size: 1.1rem;
          color: #2c3e50;
          font-weight: 500;
        }

        .date-value {
          font-size: 1.1rem;
          color: #e74c3c;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .important-dates-content {
            width: 95%;
            padding: 1.5rem;
          }

          .important-dates-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 480px) {
          .important-dates-content {
            width: 98%;
            padding: 1rem;
          }

          .important-dates-title {
            font-size: 1.4rem;
          }

          .date-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .date-label, .date-value {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ImportantDates;
