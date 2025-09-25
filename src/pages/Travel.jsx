import React from 'react';

const Travel = () => {
  return (
    <div 
      style={{ 
        fontSize: "16px", 
        lineHeight: "1.6", 
        color: "#c51010ff", 
        textAlign: "justify", 
        margin: "20px",
        minHeight: "calc(100vh - 125px)", // keeps footer pushed to bottom
      }}
    >
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>
          Travel support (Within India) will be provided to the author(s) of a few 
          selected papers for presenting the paper in person.
        </li>
      </ul>
    </div>
  );
};

export default Travel;
