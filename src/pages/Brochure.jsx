import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1754813780/1-min_quxhqu.png";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1754813802/2-min_futvge.png";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
