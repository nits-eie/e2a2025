/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import "../assets/css/home.css";
import location from "../assets/svg/location.svg";
import time from "../assets/svg/time.svg";
import meetingRoom from "../assets/svg/meeting-room.svg";
import fileLines from "../assets/svg/file-lines-solid.svg";
import website from "../assets/svg/website.svg";
import CustomHR from "../components/CustomHR";
import Header from "../components/Header";
import speakers from "../assets/speakers";
import SpeakerCard from "../components/SpeakerCard";

const Home = () => {
  return (
    <>
      <Header />

      {/* Main Content */}
      <div className="main-content">
        {/* About Section */}
        <section id="about" className="about-section" style={{ scrollMarginTop: 90 }}>
          <div className="container">

            {/* ===== Static IMPORTANT notice now inside #about (first element) ===== */}

            {/* 
<div className="notice-viewport" style={{ padding: '10px 0' }}>
  <div
    className="notice-track"
    style={{ fontSize: 17, fontWeight: 600, color: '#0F172A' }}
  >
    For paper submission:&nbsp;
    <a
      href="https://cmt3.research.microsoft.com/EEA2025/Track/1/Submission/Create"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#0A66C2', textDecoration: 'underline', fontWeight: 700 }}
    >
      click here →
    </a>
    &nbsp;•&nbsp;Last date for paper submission is&nbsp;
    <span style={{ textDecoration: 'line-through', color: '#888' }}>
      22/09/25
    </span>
    &nbsp;
    <a
      href="/important-dates"
      style={{
         textDecoration: "underline",
        color: '#e74c3c',
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}
    >
      8th October 2025
    </a>

    <span style={{ marginRight: 20, display: "inline-flex", alignItems: "center", gap: 10 }}>
      
          
          <a
            href="/best-awards"
            style={{
              color: "#0A66C2",
              textDecoration: "underline",
              fontWeight: 700,
              cursor: "pointer",
              animation: "blink 1.2s steps(2,start) infinite",
              padding: "4px 4px",
            }}
            aria-label="Best Presentation Award - Call for Papers"
          >
              Best Presentation Award →
          </a>
        </span>


        <span style={{ marginRight: 20, display: "inline-flex", alignItems: "center", gap: 9 }}>
      
          
          <a
            href="/travelsupport"
            style={{
              color: "#0A66C2",
              textDecoration: "underline",
              fontWeight: 700,
              cursor: "pointer",
              animation: "blink 1.2s steps(2,start) infinite",
              padding: "4px 4px",
            }}
            aria-label="Best Presentation Award - Call for Papers"
          >
            Travel Support →
          </a>
        </span>
  </div>
</div> */}

            <div style={{ width: "100%", overflow: "hidden", boxSizing: "border-box" }}>
              <style>{`
    /* marquee movement */
    @keyframes marquee {
      0%   { transform: translateX(0%); }
      100% { transform: translateX(-50%); } /* -50% to account for duplicated content */
    }

    /* subtle pulse for links */
    @keyframes softPulse {
      0% { transform: scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
      50% { transform: scale(1.02); box-shadow: 0 6px 18px rgba(12, 74, 162, 0.06); }
      100% { transform: scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
    }

    /* respect user preference for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .notice-scroller { animation: none !important; }
      .notice-link { animation: none !important; }
    }

    /* pause marquee when hovered */
    .notice-viewport:hover .notice-scroller { animation-play-state: paused; }
  `}</style>

              <div
                className="notice-viewport"
                style={{
                  padding: "10px 0",
                  background: "linear-gradient(90deg, rgba(250,250,252,1) 0%, rgba(245,247,252,1) 100%)",
                  borderTop: "1px solid rgba(15,23,42,0.04)",
                  boxShadow: "inset 0 -1px 0 rgba(15,23,42,0.02)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/* scroller: duplicated content makes a seamless loop */}
                  <div
                    className="notice-scroller"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "48px",
                      padding: "8px 2rem",
                      whiteSpace: "nowrap",     // force single line
                      animation: "marquee 22s linear infinite",
                      willChange: "transform",
                      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                    }}
                    role="marquee"
                    aria-label="Conference notices"
                  >
                    {/* ---------- block (will be repeated) ---------- */}
                    <div style={{ display: "inline-flex", gap: "48px", alignItems: "center" }}>
                      {/* 1) Paper submission */}
                      <span style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "#0F172A", fontWeight: 600, fontSize: 16 }}>
                        <span>For paper submission:</span>
                        <a
                          href="https://cmt3.research.microsoft.com/EEA2025/Track/1/Submission/Create"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#0A66C2",
                            textDecoration: "underline",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderRadius: 6,
                            background: "rgba(10,102,194,0.04)",
                            display: "inline-block",
                            transition: "transform .18s ease, box-shadow .18s ease",
                          }}
                          className="notice-link"
                        >
                          click here →
                        </a>
                      </span>

                      {/* 2) Dates */}
                      <span
                        style={{
                          display: "inline-flex",
                          gap: 8,
                          alignItems: "center",
                          color: "#0F172A",
                          fontWeight: 600,
                          fontSize: 16,
                        }}
                      >
                        <span>Last date for paper submission is (Closed)</span>
                        <span
                          style={{
                            textDecoration: "line-through",
                            textDecorationColor: "red", // strike line in red
                            color: "black",
                            fontWeight: 600,
                          }}
                        >
                          22.09.2025&nbsp;&nbsp;08.10.2025&nbsp;&nbsp;21.10.2025
                        </span>
                        <a
                          href="/important-dates"
                          style={{
                            color: "#e74c3c",
                            textDecoration: "underline",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderRadius: 6,
                            background: "rgba(231,76,60,0.06)",
                            whiteSpace: "nowrap",
                            display: "inline-block",
                            transition: "transform .2s ease, box-shadow .2s ease",
                            animation: "softPulse 6s ease-in-out infinite",
                          }}
                          className="notice-link"
                        >
                          Closed
                        </a>
                      </span>


                      {/* 3) Best Presentation Award (links to Call for Papers) */}
                      <a
                        href="/best-awards"
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#0A66C2",
                          textDecoration: "underline",
                          padding: "6px 10px",
                          borderRadius: 8,
                          background: "rgba(10,102,194,0.03)",
                          display: "inline-flex",
                          alignItems: "center",
                          transition: "transform .18s ease, box-shadow .18s ease",
                          animation: "softPulse 7s ease-in-out infinite",
                        }}
                        className="notice-link"
                        aria-label="Best Presentation Award - Call for Papers"
                      >
                        Best Presentation Award →
                      </a>

                      {/* 4) Travel Support */}
                      <a
                        href="/travelsupport"
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#0A66C2",
                          textDecoration: "underline",
                          padding: "6px 10px",
                          borderRadius: 8,
                          background: "rgba(10,102,194,0.03)",
                          display: "inline-flex",
                          alignItems: "center",
                          transition: "transform .18s ease, box-shadow .18s ease",
                          animation: "softPulse 8s ease-in-out infinite",
                        }}
                        className="notice-link"
                        aria-label="Travel Support - For Authors"
                      >
                        Travel Support →
                      </a>
                    </div>

                    {/* ---------- duplicated block for seamless loop ---------- */}
                    <div style={{ display: "inline-flex", gap: "48px", alignItems: "center" }}>
                      <span style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "#0F172A", fontWeight: 600, fontSize: 16 }}>
                        <span>For paper submission:</span>
                        <a
                          href="https://cmt3.research.microsoft.com/EEA2025/Track/1/Submission/Create"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#0A66C2",
                            textDecoration: "underline",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderRadius: 6,
                            background: "rgba(10,102,194,0.04)",
                            display: "inline-block",
                            transition: "transform .18s ease, box-shadow .18s ease",
                          }}
                          className="notice-link"
                        >
                          click here →
                        </a>
                      </span>

                      <span
                        style={{
                          display: "inline-flex",
                          gap: 8,
                          alignItems: "center",
                          color: "#0F172A",
                          fontWeight: 600,
                          fontSize: 16,
                        }}
                      >
                        <span>Last date for paper submission is (Closed)</span>
                        <span
                          style={{
                            textDecoration: "line-through",
                            textDecorationColor: "red", // strike line in red
                            color: "black",
                            fontWeight: 600,
                          }}
                        >
                          22.09.2025&nbsp;&nbsp;08.10.2025&nbsp;&nbsp;21.10.2025
                        </span>
                        <a
                          href="/important-dates"
                          style={{
                            color: "#e74c3c",
                            textDecoration: "underline",
                            fontWeight: 700,
                            padding: "6px 8px",
                            borderRadius: 6,
                            background: "rgba(231,76,60,0.06)",
                            whiteSpace: "nowrap",
                            display: "inline-block",
                            transition: "transform .2s ease, box-shadow .2s ease",
                            animation: "softPulse 6s ease-in-out infinite",
                          }}
                          className="notice-link"
                        >
                          Closed
                        </a>
                      </span>



                      <a
                        href="/call-for-papers"
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#0A66C2",
                          textDecoration: "underline",
                          padding: "6px 10px",
                          borderRadius: 8,
                          background: "rgba(10,102,194,0.03)",
                          display: "inline-flex",
                          alignItems: "center",
                          animation: "softPulse 7s ease-in-out infinite",
                        }}
                        className="notice-link"
                        aria-label="Best Presentation Award - Call for Papers"
                      >
                        Best Presentation Award →
                      </a>

                      <a
                        href="/travelsupport"
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#0A66C2",
                          textDecoration: "underline",
                          padding: "6px 10px",
                          borderRadius: 8,
                          background: "rgba(10,102,194,0.03)",
                          display: "inline-flex",
                          alignItems: "center",
                          animation: "softPulse 8s ease-in-out infinite",
                        }}
                        className="notice-link"
                        aria-label="Travel Support - For Authors"
                      >
                        Travel Support →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* ===== End notice ===== */}

            <div className="content-grid">
              {/* Main Content */}
              <div className="main-column">
                <div className="section-header">
                  <h2 className="section-title">About The Conference</h2>
                  <div className="section-underline"></div>
                </div>

                <div className="content-card">
                  <p className="lead-text">
                    Emerging Electronics and Automation (E2A) 2025 is the 5<sup>th</sup> Annual
                    International Conference organized by the Department of Electronics and
                    Instrumentation Engineering at NIT Silchar, Assam. The conference is scheduled
                    in hybrid mode between 17th and 19th December 2025.
                  </p>

                  <p className="body-text">
                    We are proud to share that the Department of EIE has successfully
                    organized four editions of E2A. The proceedings of the previous three editions
                    are published in{" "}
                    <a
                      href="https://www.springer.com/series/7818"
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      Springer LNEE (Scopus Indexed)
                    </a>
                    . The proceedings for the fourth edition are currently in progress.
                  </p>
                </div>

                {/* Featured Publication */}
                <div className="publication-showcase">
                  <div className="publication-image">
                    <img
                      src="/images/book2024.jpg"
                      alt="E2A Conference Proceedings"
                      className="book-cover"
                    />
                  </div>
                  <div className="publication-details">
                    <div className="authors">
                      <p>Moncef Gabbouj, Shyam Sudhir Pandey, Hari Krishna Garg, Ranjay Hazra</p>
                    </div>
                    <h3 className="publication-title">
                      <a
                        href="https://www.springer.com/gp/book/978-981-19-4299-0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Emerging Electronics and Automation
                      </a>
                    </h3>
                    {/* <p className="publication-subtitle">
                      Select Proceedings of E2A 2025
                    </p> */}
                    <ul className="publication-highlights">
                      <li>Constitutes proceedings of International Conference on Emerging Electronics and Automation</li>
                      <li>Presents cutting edge technologies in automation and advances in the allied domain</li>
                      <li>Helps to curve a way for the beginners in the area of automation and allied fields</li>
                    </ul>
                    <p className="publication-description">
                      This book constitutes peer-reviewed proceedings of the International Conference on
                      Emerging Electronics and Automation (E2A) . The book presents new ideas, research
                      findings, and novel techniques in the fields of sensors and instrumentation, automation
                      and control, artificial intelligence, MEMS sensors, soft computing, signal processing,
                      and communication.
                    </p>
                  </div>
                </div>

                {/* Conference Focus */}
                <div className="content-card">
                  <p className="body-text">
                    This conference focuses on trending research and product outcomes in the domain of
                    control and robotics, signal processing, communication systems, sensors and instrumentation,
                    MEMS and VLSI, AI and soft computing. E2A  provides a common platform for academicians,
                    researchers, industrial players and budding research scholars to discuss their results,
                    innovations, and challenges with peers while networking and presenting research progress.
                  </p>
                </div>

                {/* Publication Info */}
                <div className="publication-info">
                  <div className="info-icon">📚</div>
                  <div className="info-content">
                    <h4>Publication</h4>


                    <p style={{ color: "orange" }}>
                      All the peer-reviewed, accepted and presented papers of the conference will be published
                      (subject to satisfying the Springer's publication terms) as proceedings with
                      Springer in their prestigious{" "}
                      <a
                        href="https://link.springer.com/series/7818"
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        Lecture Notes in Electrical Engineering
                      </a>{" "}
                      series.
                      <br /> <br />
                      For detailed instructions for authors and editors of conference proceedings,
                      kindly visit the following link:{" "}
                      <a
                        href="https://www.springer.com/us/authors-editors/conference-proceedings"
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        Springer Conference Proceedings Guidelines
                      </a>
                      . Selected papers from the conference will be published by Springer as a
                      proceedings book volume. Springer will conduct quality checks on the accepted
                      papers and only papers that pass these checks will be published. Springer
                      Nature does not charge any money for publication of Non-Open Access content.
                      Abstracts/extended abstracts and short papers (less than 4 pages) are not
                      considered for publication.
                    </p>

                    {/* <p style={{ color: "orange" }}>


      
      It is planned to publish the peer reviewed and selected papers of the
      conference as proceedings with Springer in their prestigious{" "}
      <a
        href="https://link.springer.com/series/7818"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Lecture Notes in Electrical Engineering
      </a>{" "}
      series.<br/> <br/> For detailed instructions for authors and editors of conference
      proceedings, kindly visit the following link:{" "}
      <a
        href="https://www.springer.com/us/authors-editors/conference-proceedings"
        target="_blank"
        rel="noreferrer"
        className="text-link"
      >
        Springer Conference Proceedings Guidelines
      </a>
      . Selected papers from the conference will be published by Springer as a
      proceedings book volume. Springer will conduct quality checks on the
      accepted papers and only papers that pass these checks will be published.
      Springer Nature does not charge any money for publication of Non-Open
      Access content. Abstracts/extended abstracts and short papers (less than 4
      pages) are not considered for publication.
    </p> */}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="sidebar">
                <div className="quick-info-card">
                  <h3>Conference Details</h3>

                  <div className="info-item">
                    <img src={location} alt="location" />
                    <div>
                      <h4>Venue</h4>
                      <p>National Institute of Technology Silchar</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <img src={time} alt="date" />
                    <div>
                      <h4>Date</h4>
                      <p>17<sup>th</sup> - 19<sup>th</sup> December 2025</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <img src={meetingRoom} alt="mode" />
                    <div>
                      <h4>Mode</h4>
                      <p>Hybrid</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <img src={fileLines} alt="submission" />
                    <div>
                      <h4>Submit Your Paper</h4>
                      <a
                        // href="https://cmt3.research.microsoft.com/E2A2024/Submission/Index"
                        href="https://cmt3.research.microsoft.com/EEA2025/Track/1/Submission/Create"
                        target="_blank"
                        rel="noreferrer"
                        className="submission-link"
                      >
                        Click Here
                      </a>
                    </div>
                  </div>

                  {/* leave the rest unchanged */}
                  <div class="publications-sidebar">
                    <h3>Previous Publications</h3>
                    <div class="publications-grid">
                      <div class="publication-item">
                        <div class="pub-number">1st Edition</div>
                        <div class="pub-details">
                          <p>Lecture Notes in Electrical Engineering</p>
                          <a href="https://www.springer.com/gp/book/9789811942990" target="_blank" rel="noreferrer">
                            ISBN 978-981-19-4299-0
                          </a>
                        </div>
                      </div>
                      <div class="publication-item">
                        <div class="pub-number">2nd Edition</div>
                        <div class="pub-details">
                          <p>Lecture Notes in Electrical Engineering</p>
                          <a href="https://link.springer.com/book/10.1007/978-981-99-6855-8" target="_blank" rel="noreferrer">
                            ISBN 978-981-99-6854-1
                          </a>
                        </div>
                      </div>
                      <div class="publication-item">
                        <div class="pub-number">3rd Edition</div>
                        <div class="pub-details">
                          <p>Lecture Notes in Electrical Engineering</p>
                          <a href="https://link.springer.com/book/10.1007/978-981-99-6855-8" target="_blank" rel="noreferrer">
                            ISBN 978-981-99-6854-1
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keynote Speakers Section */}
        <section className="speakers-section">
          <div className="container">
            <div className="section-header centered">
              <h2 className="section-title">Keynote Speakers</h2>
              <div className="section-underline"></div>
              <p className="section-subtitle">Distinguished experts sharing cutting-edge insights</p>
            </div>

            <div className="speakers-grid">
              {speakers.map((speaker, i) => (
                <SpeakerCard
                  key={i}
                  img={speaker.img}
                  name={speaker.name}
                  designation={speaker.designation}
                  college={speaker.college}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
