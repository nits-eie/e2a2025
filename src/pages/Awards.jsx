import React from "react";

const Awards = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "28px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        background: "#ffffff",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#222",
        lineHeight: 1.7,
      }}
    >
      {/* 🔷 HEADING */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "800",
          color: "#0b5fff",
          marginBottom: "18px",
          position: "relative",
          display: "inline-block",
        }}
      >
        Awards and Recognition
        <span
          style={{
            display: "block",
            height: "3px",
            width: "0%",
            background: "#0b5fff",
            marginTop: "6px",
            borderRadius: "2px",
            animation: "underline 1s forwards",
          }}
        ></span>
      </h1>

      {/* CONTENT (UNCHANGED) */}
      <p style={{ margin: "0 0 12px 0", fontSize: "16px" }}>
        To encourage high-quality presentations and active participation, the
        conference will recognize one presenter in each track with the{" "}
        <strong>Best Presentation Award</strong>.
        <br />
        This Award will be presented in the memory of Major Ashish Kumar Roy by
        the Maj. Ashish Kumar Roy Foundation (MAKRF). The Award will constitute
        (i) Award plaque; (ii) T-Shirt with emblem depicting the award; (iii)
        Cash of Rs. 2,500/- in an envelope and (iv) a Certificate.
      </p>

      <p style={{ margin: "0 0 12px 0", fontSize: "16px" }}>
        The award will be based on the quality of research, clarity of
        presentation, and ability to engage with the audience.
      </p>

      {/* CRITERIA BOX */}
      <div
        style={{
          marginTop: "14px",
          padding: "14px",
          borderRadius: "8px",
          background: "#f7f9ff",
          borderLeft: "4px solid #0b5fff",
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
        <h3>A micro note on the Major Ashish Kumar Roy Foundation:</h3>
        Major Ashish Kumar Roy served the 19th Engineers regiment, Indian Army
        and was killed in action in 2012. His school friends from Kendriya
        Vidyalaya constituted the Major Ashish Kumar Roy Foundation in his
        memory and honour. Major Ashish Kumar Roy Foundation organizes cancer
        awareness, health promotion, badminton championship, sports promotion,
        telemedicine as well as support research scholars and nation building
        activities.
      </p>

      {/* RESULTS HEADING */}
      <h2
        style={{
          marginTop: "40px",
          fontSize: "24px",
          fontWeight: "700",
          color: "#0b5fff",
          borderBottom: "2px solid #e0e6ff",
          paddingBottom: "6px",
        }}
      >
        Best Presentation Award Winners
      </h2>

      {/* TABLE */}
      <div style={{ overflowX: "auto", marginTop: "16px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0b5fff",
                color: "#fff",
              }}
            >
              {[
                "Sl. No.",
                "Track Name",
                "Paper ID",
                "Paper Title",
                "Presenting Author Name",
              ].map((head, i) => (
                <th
                  key={i}
                  style={{
                    padding: "12px",
                    fontSize: "14px",
                    textAlign: "center",
                    letterSpacing: "0.5px",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {[
              [
                "01",
                "Control And Robotics",
                "371",
                "Robust Controller Design for Rotary Inverted Pendulum System using H∞ Controller",
                "Jitendra Goyal",
              ],
              [
                "02",
                "Signal and Image Processing",
                "367",
                "A Sexting Prevention Framework Using a Semi-Supervised Multi-Branch Attention-Based Deep Learning Model",
                "Debashis Das",
              ],
              [
                "03",
                "Communication Systems",
                "382",
                "Statistical Fusion of Coherent and Non-Coherent Measurements in a Hybrid SDR Architecture for Position Estimation",
                "Manish",
              ],
              [
                "04",
                "Sensors and Instrumentation",
                "414",
                "IOT Enabled Smart Data Acquisition System: A MATLAB GUI-Based Signal Acquisition and Processing Framework",
                "Himadri Lala",
              ],
              [
                "05",
                "MEMS & VLSI",
                "192",
                "Solid-State Sodium β-Alumina Dielectric for Sub-2V SnO2 Thin-Film Transistor",
                "Nitesh Chourasia",
              ],
              [
                "06",
                "AI & Soft Computing",
                "171",
                "Signal to Word Conversion for Human Activity Recognition using Symbolic Aggregate Approximation",
                "Ashutosh Sahoo",
              ],
              [
                "07",
                "Energy, Power System and Power Electronics",
                "137",
                "Morphology-Driven Framework for Smart Microgrid",
                "Buddhadeva Sahoo",
              ],
            ].map((row, idx) => (
              <tr
                key={idx}
                style={{
                  background: idx % 2 === 0 ? "#f9fbff" : "#ffffff",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#eef3ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    idx % 2 === 0 ? "#f9fbff" : "#ffffff")
                }
              >
                {row.map((cell, i) => (
                  <td
                    key={i}
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "14px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes underline {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default Awards;