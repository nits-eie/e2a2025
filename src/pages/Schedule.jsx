import React from "react";
import "../assets/css/schedule.css";
import Header from "../components/Header";

const Schedule = () => {
  return (
    <>
      <Header />
      <div className="bg-white ptb-4 schedule mb-2">
        {/* Image row with three uploads */}
        <div className="imageRow">
          
          <img
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1757750412/program-images-0_lu1huf.jpg"
            alt="program-0"
            className="programImg"
          />
          <img
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1757750413/program-images-1_efzpfk.jpg"
            alt="program-1"
            className="programImg"
          />

          <img
            src="https://res.cloudinary.com/dprjiwgfo/image/upload/v1757750411/program-images-2_xv1t5q.jpg"
            alt="program-2"
            className="programImg"
          />
        </div>
      </div>
    </>
  );
};

export default Schedule;
