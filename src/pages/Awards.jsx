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
        <strong>Best Presentation Award</strong>.
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
    </div>
  );
};

export default Awards;
