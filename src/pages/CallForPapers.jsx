import React from "react";
import data from "../assets/papers";
import "../assets/css/callForPapers.css";
import Header from "../components/Header";

const CallForPapers = () => {
  const [activeIndices, setActiveIndices] = React.useState([]);
  const container = React.useRef(null);

  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);

  const handleClick = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <>
      <Header />
      <div className="call-for-papers-container" ref={container}>
        <div className="call-for-papers-header">
          <h1 className="call-for-papers-title">
            Call For <span className="highlight">Regular Papers</span>
          </h1>
          <div className="underline"></div>
        </div>
        <div className="call-for-papers-description">
          <p>
            Fifth International Conference on Emerging Electronics & Automation (E2A) will be organized by Department of Electronics and Instrumentation Engineering, NIT Silchar from 17th - 19th December, 2025. Prospective authors are requested to submit their original work for publication in the proceedings of E2A. The thrust areas are as follows but not limited to this.
          </p>
        </div>
        <div className="accordion-container">
          {data.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div
                className="accordion-header"
                onClick={() => handleClick(index)}
              >
                <h3>{item.heading}</h3>
                <span>{activeIndices.includes(index) ? "−" : "+"}</span>
              </div>
              <div
                className={`accordion-content ${
                  activeIndices.includes(index) ? "active" : ""
                }`}
              >
                <ol>
                  {item.items.map((listItem, key) => (
                    <li key={key}>{listItem}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CallForPapers;
