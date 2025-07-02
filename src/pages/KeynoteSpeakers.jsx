import React from "react";
import { useEffect } from "react";
import speakers from "../assets/speakers";
import SpeakerCard from "../components/SpeakerCard";
import Header from "../components/Header";
import "../assets/css/keynoteSpeakers.css";

const KeynoteSpeakers = () => {
  const container = React.useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="keynote-speakers-container" ref={container}>
        <section className="keynote-speakers">
          <div className="section-header">
            
            <h2 className="section-title">Keynote Speakers</h2>
            <p className="section-subtitle">
              Distinguished experts sharing cutting-edge insights
            </p>
          </div>

          <div className="speaker-box">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={`speaker-${index}`}
                img={speaker.img}
                name={speaker.name}
                designation={speaker.designation}
                college={speaker.college}
                // Add any additional props your SpeakerCard accepts
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default KeynoteSpeakers;