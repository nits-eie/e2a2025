import React from "react";
import { useEffect } from "react";
import speakers from "../assets/speakers";
import SpeakerCard from "../components/SpeakerCard";
import Header from "../components/Header";

const KeynoteSpeakers = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, []);
  return (
    <>
      <Header />
      <div className="bg-white ptb-4" ref={container}>
        <section className="bg-white keynote-speakers pt-4">
          <h3 className="heading_h3"><u>Key Note Speakers</u></h3>
          {/* <span className="red-text mb-2">(To be updated soon...)</span> */}
          {/* <p className="mt-2 mb-1">Here are our Key note Speakers</p> */}
          <div className="user-container pb-4 speaker-box">
            {speakers.map((user, i) => {
              const props = {
                img: user.img,
                name: user.name,
                designation: user.designation,
                college: user.college,
              };
              return <SpeakerCard key={i} {...props} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default KeynoteSpeakers;
