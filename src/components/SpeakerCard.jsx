import React from "react";

const SpeakerCard = (props) => {
  return (
    <>
        <div className="speaker-card-container">
         <div className="speaker-upper-container">
            <div className="image-container">
               <img src={props.img} />
            </div>
         </div>
         <div className="lower-container">
            <div className="committeeName">
               <div className="speaker-name">{props.name}</div>
               <div className="speaker-designation">{props.designation}</div>
               <div className="speaker-college">{props.college}</div>
               <br />
            </div>
         </div>
      </div>
    </>
  );
};

export default SpeakerCard;
