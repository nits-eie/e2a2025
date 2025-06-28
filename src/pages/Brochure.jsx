import React from "react";
import "../assets/css/brochurePage.css";
import brochureImg from "../assets/img/brochure2024.jpg";

const Brochure = () => {
  return (
    <>
      <div className="brochureCont">
        <img src={brochureImg} alt="" className="brochureImg" />
      </div>
    </>
  );
};

export default Brochure;
