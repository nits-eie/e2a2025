import React from "react";

const Awards = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "24px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        background: "#fff",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: 1.6,
        minHeight: "calc(100vh - 125px)", // 👈 pushes footer to bottom
      }}
      aria-labelledby="awards-heading"
    >
      <h1
        id="awards-heading"
        style={{
          fontSize: "22px",
          margin: "0 0 12px 0",
          color: "#0b5fff",
          fontWeight: 700,
        }}
      >
        Awards and Recognition
      </h1>

      <p style={{ margin: "0 0 12px 0", fontSize: "16px" }}>
        To encourage high-quality presentations and active participation, the
        conference will recognize one presenter in each track with the{" "}
        <strong>Best Presentation Award</strong>.<br />
        This Award will be presented in the memory of Major. Ashish Kumar Roy by the Maj. Ashish Kumar Roy Foundation (MAKRF).
        The Award will constitute (i) Award plaque; (ii) T-Shirt with emblem depicting the award; (iii) Cash of Rs. 2,500/- in an envelope and (iv) a Certificate.

      </p>

      <p style={{ margin: "0 0 12px 0", fontSize: "16px" }}>
        The award will be based on the quality of research, clarity of
        presentation, and ability to engage with the audience.
      </p>

      <div
        style={{
          marginTop: "12px",
          padding: "12px",
          borderRadius: "6px",
          background: "#f7f9ff",
        }}
      >
        <strong style={{ display: "block", marginBottom: "8px" }}>
          Evaluation Criteria:
        </strong>
        <ul style={{ margin: 0, paddingLeft: "18px" }}>
          <li>Quality and originality of the research</li>
          <li>Clarity and structure of the presentation</li>
          <li>Effectiveness in engaging and responding to the audience</li>
        </ul>
      </div>
        <p>
          <h3>A micro note on the Major Ashish Kumar Roy Foundation:
          </h3>
          Major Ashish Kumar Roy served the 19th Engineers regiment, Indian Army and was killed in action in 2012.  His school friends from Kendriya Vidyalaya constituted the Major Ashish Kumar Roy Foundation in his memory and honour.  Major Ashish Kumar Roy Foundation organizes cancer awareness, health promotion, badminton championship, sports promotion, telemedicine as well as support research scholars and nation building activities. The Indian Army Chief General Upendra Dwivedi has recognized the efforts of the Major Ashish Kumar Roy Foundation in nation building!
        </p>
    </div>
  );
};

export default Awards;
