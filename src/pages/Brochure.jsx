import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1757750381/opbrochure-images-0_o4zsbp.jpg";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1757750384/opbrochure-images-1_ysoss5.jpg";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
