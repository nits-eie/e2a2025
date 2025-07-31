import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1753966724/final1_acjrwi.png";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1753966729/final2_tawztv.png";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
