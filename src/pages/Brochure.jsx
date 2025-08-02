import React from "react";
import "../assets/css/brochurePage.css";

const Brochure = () => {
  const firstImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1754152448/1xx_softik.jpg";
  const secondImageUrl = "https://res.cloudinary.com/dprjiwgfo/image/upload/v1754152456/2xx_qm4lrq.jpg";

  return (
    <div className="brochureCont">
      <img src={firstImageUrl} alt="Brochure Part 1" className="brochureImage" />
      <img src={secondImageUrl} alt="Brochure Part 2" className="brochureImage" />
    </div>
  );
};

export default Brochure;
