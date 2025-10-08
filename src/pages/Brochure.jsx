import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1759296812/Broc_page-0001-min_wwozdx.jpg";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1759296286/Broc_page-0002_s8agvd.jpg";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
