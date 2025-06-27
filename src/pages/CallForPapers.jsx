import React from "react";
import data from "../assets/papers"
import "../assets/css/callForPapers.css"
import Header from "../components/Header";

const CallForPapers = () => {
  const [activeState, setActiveState] = React.useState([...new Array(data.length).fill(false)])
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  const handleClick = (e, i) => {
    const obj = activeState;
    obj[i] = !activeState[i];
    setActiveState(state => [
      ...state,
    ...activeState.slice(0, i),
    obj,
    ...activeState.slice(i + 1, activeState.length)
  ]);
    console.log(e.target, i, activeState)
  }

  return (
    <>
      <Header/>
      <div className="main-content mb-2" ref={container}>
        <div className="paper-heading">
          <span className="heading-text">
            Call For <span className="red-text">Regular Papers</span>
          </span>
          <div className="line"></div>
        </div>
        <div className="paper-list mb-3">
          <p className="call-des">
            Fourth International Conference on Emerging Electronics & Automation (E2A) will be organized by Department of Electronics and Instrumentation Engineering, NIT Silchar from 9th - 11th December, 2024. Prospective authors are requested to submit their original work for publication in the proceedings of E2A. The thrust areas are as follows but not limited to this.
          </p>
          <div className="list-accordion">
            <div className="list-accordion-item">
              {data.map((el, i) => (
                <React.Fragment key={i}>
                  <div onClick={(e) => handleClick(e, i)} className="list-heading">
                    <h3>{el.heading}</h3>
                    <span>{activeState[i] ? "x" : "+"}</span>
                  </div>
                  {
                    activeState[i]  && (
                        <div className="list-items">
                          <ol className="pl-3">
                            {
                              el.items.map((list, key) => (
                                <li className="mtb-2" key={key}>{list}</li>
                              ))
                            }
                          </ol>
                      </div>
                    )
                  }
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CallForPapers;
