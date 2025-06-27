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
      <section id="about" className="container home-page bg-white">
        <div className="about">
          <h2 className="about-heading mb-1 mt-1">
            <u>About The Conference</u>
          </h2>
          <div className="home-about-content">
            <p className="text1 mb-1">
              Emerging Electronics and Automation
              (E2A) 2025 is the 5<sup>th</sup> Annual International Conference organized by
              the Department of Electronics and Instrumentation Engineering at
              NIT Silchar, Assam. E2A 2025 is scheduled to be in hybrid mode
              between 17th and 19th December 2025. 
            </p>
            <p className="text1">
            We are happy to share that
              till now, Department of EIE has successfully organized three
              editions of E2A. The proceedings of the First & Second Edition are
              indexed in Springer LNEE. The same for the Third edition is in  progress and will be indexed soon.
              {/* {" "} */}
              <a
                href="https://www.springer.com/series/7818"
                target="_blank"
                rel="noreferrer"
              >
                Springer LNEE
              </a>
              .
            </p>
            <div className="mtb-4 book-list">
              <img
                src="/images/book2024.jpg"
                alt="E2a book"
                style={{ height: "400px" }}
              />
              <div className="ml-4">
                <p className="mb-1">
                  Moncef Gabbouj, Shyam Sudhir Pandey, Hari Krishna Garg, Ranjay Hazra
                </p>
                <a
                  href="https://www.springer.com/gp/book/978-981-19-4299-0?utm_medium=catalog&utm_source=sn-bks&utm_campaign=search_tool&utm_content=my_flyer"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "30px", color: "#127ccc" }}
                >
                  Emerging Electronics and Automation
                </a>
                <p
                  className="mt-1"
                  style={{ fontSize: "24px", fontWeight: 400, color: "#444" }}
                >
                  Select Proceedings of E2A 2022
                </p>
                <ul className="ml-2 mt-2">
                  <li style={{ color: "#127ccc" }}>
                    Constitutes proceedings of International Conference on
                    Emerging Electronics and Automation
                  </li>
                  <li style={{ color: "#127ccc" }}>
                    Presents cutting edge technologies in automation and
                    advances in the allied domain
                  </li>
                  <li style={{ color: "#127ccc" }}>
                    Helps to curve a way for the beginners in the area of
                    automation and allied fields
                  </li>
                </ul>
                <p className="mt-2">
                  This book constitutes peer-reviewed proceedings of the
                  International Conference on Emerging Electronics and
                  Automation (E2A) 2024. The book presents new ideas, research
                  findings, and novel techniques in the fields of sensors and
                  instrumentation, automation and control, artificial
                  intelligence, MEMS sensors, soft computing, signal processing,
                  and communication. It includes contributions received from
                  both academia and industry. The proceedings will be helpful
                  for beginners as well as advanced researchers in the area of
                  automation and other allied fields
                </p>
              </div>
            </div>
            <p className="text1">
              This conference focuses on trending research and product outcomes
              in the domain of control and robotics, signal processing,
              communication systems, sensors and instrumentation, MEMS and VLSI,
              AI and soft computing. Tracing the path of the 3rd Edition, E2A
              2024 will pave a common platform for the academicians,
              researchers, industrial players and budding research scholars to
              discuss their results, innovations, challenges encountered during
              research and concerns with peers and update their knowledge by
              interacting with leading researchers of respective domains. It
              offers a great opportunity for them to network together, present
              research progress and addresses new challenges. This conference
              promises to provide knowledge enriching keynote lectures to the
              participants by world-renowned researchers in the relevant
              thematic areas.
            </p>
          </div>

          <div className="mtb-2" />
          <p className="text1 red">
          The accepted papers after peer review and successful presentaton in the conference will be published as proceedings with Springer in their prestigious
            “Lecture Notes in Electrical Engineering” series (
            <a
              className="link"
              href="https://www.springer.com/series/7818"
              target="_blank"
              rel="noreferrer"
            >
              https://www.springer.com/series/7818
            </a>
            ). For detailed instructions for author and editors of conference
            proceedings, kindly visit the following link:{" "}
            <a
              className="link"
              href="https://www.springer.com/us/authors-editors/conference-proceedings"
              target="_blank"
              rel="noreferrer"
            >
              https://www.springer.com/us/authors-editors/conference-proceedings
            </a>
            . Select papers from the conference will be published by Springer as
            a proceedings book volume. Springer will conduct quality checks on
            the accepted papers and only papers that pass these checks will be
            published. Springer Nature does not charge any money for publication
            of Non-Open Access content. Abstracts/extended abstracts and short
            papers (less than 4 pages) are not considered for publication.
          </p>
        </div>

        <div className="mlr-2" />

        <div className="datetime">
          <div className="mb-3">
            <div className="mb-1">
              <img src={location} alt="location" />
              <h4 className="ml-1">Venue</h4>
            </div>
            <p>National Institute of Technology Silchar</p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={time} alt="location" />
              <h4 className="ml-1">Date</h4>
            </div>
            <p>
              9<sup>th</sup> - 11<sup>th</sup> December 2024
            </p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={meetingRoom} alt="location" />
              <h4 className="ml-1">Mode</h4>
            </div>
            <p>Hybrid</p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={fileLines} alt="location" />
              <h4 className="ml-1">Submit Your Paper</h4>
            </div>
            <p>
              <a
                style={{ color: "#127CCC" }}
                className="e2a-link"
                target="__blank"
                href="https://cmt3.research.microsoft.com/E2A2024/Submission/Index"
              >
                CMT Portal
              </a>
            </p>
          </div>
          <div className="mb-3">
            <div className="mb-1">
              <img src={website} alt="website" />
              <h4 className="ml-1">Previous Edition</h4>
            </div>
            <p>
              <a
                style={{ color: "#127CCC" }}
                className="e2a-link"
                target="__blank"
                href="http://e2a2022.nits.ac.in"
              >
                E2A2022
              </a>
            </p>
            <p>
              <a
                style={{ color: "#127CCC" }}
                className="e2a-link"
                target="__blank"
                href="http://e2a2023.nits.ac.in"
              >
                E2A2023
              </a>
            </p>
          </div>
          <CustomHR color="#626E75" large={true} />
          <div className="mtb-2 book-sidebar">
            <p>Edition No: 1</p>
             <p>Series</p>
            <p>Lecture Notes in Electrical Engineering</p>
            <a
              href="https://www.springer.com/gp/book/978-981-19-4299-0?utm_medium=catalog&utm_source=sn-bks&utm_campaign=search_tool&utm_content=my_flyer"
              target="_blank"
              rel="noreferrer"
            >
              ISBN 978-981-19-4299-0
            </a>
          </div>
          <CustomHR color="#626E75" large={true} />
          <div className="mtb-2 book-sidebar">
            <p>Edition No: 2</p>
            <p>Series</p>
            <p>Lecture Notes in Electrical Engineering</p>
            <a
              href="https://link.springer.com/book/10.1007/978-981-99-6855-8"
              target="_blank"
              rel="noreferrer"
            >
              ISBN 978-981-99-6854-1
            </a>
          </div>
          {/* <CustomHR color="#626E75" large={true} />
          <div className="mt-2 book-sidebar">
            <p>eBook</p>
            <a
              href="https://www.springer.com/gp/book/978-981-19-4300-3?utm_medium=catalog&utm_source=sn-bks&utm_campaign=search_tool&utm_content=my_flyer"
              target="_blank"
              rel="noreferrer"
            >
              ISBN 978-981-19-4300-3
            </a>
            <p>Soft cover</p>
            <a
              href="https://www.springer.com/gp/book/978-981-19-4302-7?utm_medium=catalog&utm_source=sn-bks&utm_campaign=search_tool&utm_content=my_flyer"
              target="_blank"
              rel="noreferrer"
            >
              ISBN 978-981-19-4302-7
            </a>
            <p>MyCopy</p>
            <a
              href="https://www.springer.com/gp/book/978-981-19-4301-0?utm_medium=catalog&utm_source=sn-bks&utm_campaign=search_tool&utm_content=my_flyer"
              target="_blank"
              rel="noreferrer"
            >
              ISBN 978-981-19-4301-0
            </a>
            <p>£ 39.99 | 39.99 € (D) | 39.99 € (A) | CHF 39.99</p>
          </div> */}
        </div>
      </section>

      {/* Spnosors */}

      <section className="text-center sponsors container">
        {/* <h3 className="heading_h3 mb-1">Technical Co-Sponsor</h3> */}
        {/* {<img className="logo2" src="/logos/logo_springer.jpg" alt="" />} */}
        {/* <CustomHR color="#626E75" /> */}
        {/* <div className="mb-3" /> */}
        {/* <div className="container flex-col pb-4">
        <h5 className="heading_h5 mb-1">Technical Co-Sponsor</h5>
        <img className="logo2" src="/logos/logo_springer.jpg" alt="" />
      </div> */}
        {/* <div className="container flex-col pb-4">
        <h5 className="heading_h5 mb-1">Other Sponsors</h5>
        <span className='red-text'>To be updated soon...</span>
      </div> */}
      </section>
      {/* Keynote Speakers */}

      <section className="keynote-speakers pt-4">
        <h3 className="heading_h3">Key Note Speakers</h3>
        {/* <span className="red-text mb-2">(To be updated soon...)</span> */}
        {/* <p className="mt-2 mb-1">Here are our Key note Speakers</p> */}
        <div className="user-container pb-4 speaker-box">
          {speakers.map((user, i) => {
            const props = {
              img: user.img,
              name: user.name,
              designation: user.designation,
              college: user.college
            };
            return <SpeakerCard key={i} {...props} />;
          })}
          {/* <span className='red-text'>To be updated soon...</span> */}
        </div>
        <div className="mtb-2" />
        <CustomHR color="#777" />
        <div className="mb-3" />
        <br />
      </section>
    </>
  );
};

export default Home;
