import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1753939560/Brochure_4__page-0001_1_pzjyta.jpg";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1753939565/Brochure_4__page-0002_us5iy9.jpg";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
