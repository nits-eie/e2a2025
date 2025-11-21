import React from "react";
import Header from "../components/Header";

const ImportantDates = () => {
  const container = React.useRef(null);

  const scrollToBottom = () => {
    if (container.current) {
      container.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, []);

  const dates = [
    { label: "Conference Dates:", value: "17th – 19th December 2025" },
    { label: "Paper Submission Opens:", value: "4th August 2025" },
    {
      label: "Paper Submission Deadline:",
      value: (
        <>
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red", // strike line in red
              color: "black", // text color in black
            }}
          >
            22nd September 2025 8th October 2025 21st October 2025
          </span>{" "}
          <span
            style={{
              marginLeft: "0.5rem",
              color: "#e74c3c",
              fontWeight: 600,
            }}
          >
           (Closed)
          </span>
        </>

      ),
    },
    {
      label: "Acceptance Notification:",
      value: (
        <>
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
              color: "black",
            }}
          >
            22nd October 2025
          </span>{" "}
          <span style={{ color: "#e74c3c", fontWeight: 600 }}>
            Phase 1: 31st October 2025 | Phase 2: 7th November 2025
          </span>
        </>
      ),
    },
    {
      label: "Last Date for Conference Registration:",
      value: (
        <>
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
              color: "black",
            }}
          >
            10th November 2025
          </span>{" "}
          <span style={{ color: "#e74c3c", fontWeight: 600 }}>
            21st November 2025
          </span>
        </>
      ),
    },
    {
      label: "Deadline for Camera-Ready Paper:",
      value: (
        <>
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
              color: "black",
            }}
          >
            17th November 2025
          </span>{" "}
          <span style={{ color: "#e74c3c", fontWeight: 600 }}>
            21st November 2025
          </span>
        </>
      ),
    },

  ];

  return (
    <>
      <Header />
      <div className="important-dates-container" ref={container}>
        <div className="important-dates-content">
          <h1 className="important-dates-title">Important Dates for Paper Submission</h1>
          <div className="divider"></div>
          <ul className="dates-list">
            {dates.map((item, index) => (
              <li key={index} className="date-item">
                <span className="date-label">{item.label}</span>
                <span className="date-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .important-dates-container {
          width: 100%;
          background: linear-gradient(135deg, #f9f9f9 0%, #f0f7ff 100%);
          padding: 3rem 0;
          min-height: 100vh;
        }

        .important-dates-content {
          width: 85%;
          max-width: 1000px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .important-dates-title {
          color: #2c3e50;
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          position: relative;
        }

        .important-dates-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #1abc9c, #f39c12);
          border-radius: 3px;
        }

        .divider {
          height: 4px;
          background: linear-gradient(90deg, #1abc9c, #f39c12);
          width: 150px;
          margin: 0 auto 2.5rem;
          border-radius: 2px;
        }

        .dates-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .date-item {
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          background-color: #f8f9fa;
          border-left: 4px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .date-item:nth-child(odd) {
          background-color: rgba(26, 188, 156, 0.05);
        }

        .date-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #1abc9c;
        }

        .date-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(26, 188, 156, 0.2), rgba(243, 156, 18, 0.2));
          transition: all 0.3s ease;
        }

        .date-item:hover::before {
          width: 8px;
          background: linear-gradient(to bottom, #1abc9c, #f39c12);
        }

        .date-label {
          font-size: 1.2rem;
          color: #2c3e50;
          font-weight: 500;
          flex: 1;
        }

        .date-value {
          font-size: 1.2rem;
          font-weight: 600;
          margin-left: 1rem;
          background-color: rgba(243, 156, 18, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .important-dates-content {
            width: 95%;
            padding: 2rem;
          }

          .important-dates-title {
            font-size: 2rem;
          }

          .date-item {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.2rem;
          }

          .date-value {
            margin-left: 0;
            margin-top: 0.5rem;
            align-self: flex-end;
          }
        }

        @media (max-width: 480px) {
          .important-dates-container {
            padding: 2rem 0;
          }

          .important-dates-content {
            width: 98%;
            padding: 1.5rem;
          }

          .important-dates-title {
            font-size: 1.6rem;
          }

          .divider {
            width: 120px;
            margin-bottom: 1.5rem;
          }

          .date-item {
            padding: 1rem;
          }

          .date-label,
          .date-value {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ImportantDates;
