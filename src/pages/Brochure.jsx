import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1753793817/BrochureE2A_page-0001-min_xu7f4l.jpg";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1753793823/BrochureE2A_page-0002-min_rfclrb.jpg";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
