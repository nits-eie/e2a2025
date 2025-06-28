import React from "react";
import data from "../assets/papers";
import "../assets/css/callForPapers.css";
import Header from "../components/Header";

const CallForPapers = () => {
  const [activeState, setActiveState] = React.useState(
    Array(data.length).fill(false)
  );
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);

  const handleClick = (i) => {
    setActiveState((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <>
      <Header />
      <div className="main-content mb-2" ref={container}>
        <div className="paper-heading">
          <span className="heading-text">
            Call For <span className="red-text">Regular Papers</span>
          </span>
          <div className="line"></div>
        </div>

        <div className="paper-list mb-3">
          <p className="call-des">
            Fifth International Conference on Emerging Electronics & Automation (E2A) will be organized by Department of Electronics and Instrumentation Engineering, NIT Silchar from 17th – 19th December, 2025. Prospective authors are requested to submit their original work for publication in the proceedings of E2A. The thrust areas are as follows but not limited to this.
          </p>

          {/* Important Dates Section */}
          {/* <div className="important-dates mb-4 m-4">
            <h2>Important Dates:</h2>
            <ul className="dates-list pl-3">
              <li>Conference dates: 17–19 December 2025</li>
              <li>Paper submission opening date: 15 July 2025</li>
              <li>Paper submission deadline: 8 September 2025</li>
              <li>Paper acceptance notification: 8 October 2025</li>
              <li>Last date for conference registration: 7 November 2025</li>
              <li>Last date for camera-ready paper submission: 15 November 2025</li>
            </ul>
          </div> */}

          <div className="list-accordion">
            {data.map((el, i) => (
              <div key={i} className="list-accordion-item">
                <div
                  onClick={() => handleClick(i)}
                  className="list-heading"
                >
                  <h3>{el.heading}</h3>
                  <span>{activeState[i] ? "x" : "+"}</span>
                </div>
                {activeState[i] && (
                  <div className="list-items">
                    <ol className="pl-3">
                      {el.items.map((item, idx) => (
                        <li className="mtb-2" key={idx}>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="additional-links mt-4">
            <p>
              <strong>Program:</strong> Updated soon
            </p>
            <p>
              <strong>Sponsorship:</strong> Updated soon
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForPapers;
