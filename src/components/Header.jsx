import React from "react";
import "../assets/css/header.css";
import DropDown from "./DropDown";
import ReactDOM from "react-dom";
import CrossfadeCarousel from "@notbaldrick/react-crossfade-carousel";
import image3 from "/images/depImg2.jpeg";
import image4 from "/images/depImg3.jpeg";
import image5 from "/images/homeImg_a.jpg";
import image6 from "/images/homeImg_b.jpg";
import image7 from "/images/homeImg_c.jpg";
import image8 from "/images/homeImg_d.jpg";
import image9 from "/images/homeImg_e.jpg";
import image10 from "/images/homeImg_f.jpg";
import newLogo from "/logos/tnew.gif";
import { Link } from "react-router-dom";

const navItems = [
  {
    pathname: "/",
    name: "Home",
  },
  {
    pathname: "/about",
    name: "About Conference",
  },
  {
    pathname: "/registration",
    name: "For Authors",
    subItems: [
      {
        name: "Registration",
        pathname: "/author-registration",
      },
      {
        name: "Regular Paper Submission",
        pathname: "/author-regular-paper-submission",
      },
      {
        name: "Instructions for Online Presentation",
        pathname: "/author-instructions-online",
      },
      {
        name: "Instructions for Offline Presentation",
        pathname: "/author-instructions-offline",
      },
    ],
  },
  {
    pathname: "/call-for-papers",
    name: "Call for Papers",
  },
  {
    pathname: "/program",
    name: "Program",
    subItems: [
      {
        name: "Brochure",
        pathname: "/program-brochure",
      },
      // {
      //   name: "Schedule",
      //   pathname: "/program-schedule",
      // },
      {
        name: "Keynote Speakers",
        pathname: "/keynote-speakers",
      },
      // {
      //   name: "Schedule",
      //   pathname: "/program-schedule",
      // },
    ],
  },
  {
    pathname: "/important-dates",
    name: "Important Dates",
  },
  {
    pathname: "/committee",
    name: "Committee",
  },
  {
    pathname: "/sponsorship",
    name: "Sponsorship",
  },
  {
    pathname: "/contact-us",
    name: "Contact us",
  },
];

const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) setScrolled(true);
    else setScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleClickScrollHome = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollHero = () => {
    const element = document.getElementById("header");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header" id="header">
        <CrossfadeCarousel
          interval={2000}
          transition={2000}
          images={[
            image8,
            image7,
            image9,
            image10,
            image6,
            image4,
            image5,
            image3,
          ]}
        />
        <nav className={isScrolled ? "moved nav-bar" : "nav-bar"}>
          <div className="logo">
            <img src="e2a25.png" alt="" className="e2a-logo " />
          </div>
          <div className="links">
            {navItems.map((item, i) =>
              item.subItems && item.subItems.length > 0 ? (
                <div key={i}>
                  <DropDown subItems={item.subItems}>
                    <a className="nav-btn">{item.name}</a>
                  </DropDown>
                </div>
              ) : (
                <div
                  key={i}
                  className={
                    item.pathname == window.location.pathname
                      ? "nav-btn-box active-btn"
                      : "nav-btn-box"
                  }
                  onClick={
                    item.pathname === "/about"
                      ? handleClickScrollHome
                      : handleClickScrollHero
                  }
                >
                  <Link
                    to={item.pathname === "/about" ? "/#about" : item.pathname}
                    className="nav-btn"
                  >
                    {item.name}{" "}
                    {item.name === "Important Dates" ? (
                      <img src={newLogo} width="45px" />
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
              )
            )}
          </div>
        </nav>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              {navItems.map((item, i) =>
                item.subItems && item.subItems.length > 0 ? (
                  <div key={i}>
                    <DropDown subItems={item.subItems}>
                      <a className="nav-btn">{item.name}</a>
                    </DropDown>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={
                      item.pathname == window.location.pathname
                        ? "nav-btn-box active-btn"
                        : "nav-btn-box"
                    }
                    onClick={
                      item.pathname === "/about"
                        ? handleClickScrollHome
                        : handleClickScrollHero
                    }
                  >
                    <Link
                      to={
                        item.pathname === "/about" ? "/#about" : item.pathname
                      }
                      className="nav-btn"
                    >
                      {item.name}{" "}
                      {item.name === "Important Dates" ? (
                        <img src={newLogo} />
                      ) : (
                        <></>
                      )}
                    </Link>
                  </div>
                )
              )}

              {/* <li key={i}>
                  <Link to={
                      item.pathname === "/about" ? "/#about" : item.pathname
                    }
                  >
                    {item.name}
                  </Link>
                </li> */}
            </ul>
          </div>
        </nav>
        <div className="headerContent">
          <div className="content-container">
            <div className="heading">
              5<sup>th</sup> INTERNATIONAL CONFERENCE ON{" "}
              <span className="red-text">
                EMERGING ELECTRONICS AND AUTOMATION
              </span>
            </div>
            <div className="date">
              17<sup>th</sup> - 19<sup>th</sup> Dec,{" "}
              <span className="red-text">2025</span>
            </div>
            <div className="hybridText">[HYBRID]</div>
            <div className="organised-by">
              Organised by <br /> Department of Electronics and Instrumentation
              Engineering
            </div>
            <div className="logo log-15x mt-2">
              <img src="/logos/logo2.png" alt="" className="nit-logo" />
            </div>
            <div className="college-name mt-1">
              NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR <br />
              Assam, India - 788010
            </div>
            <div className="logoBox">
              <div>
                <h6 className="organised-by bold mt-2 mb-1">
                  Technically Co-Sponsored :<span> </span>
                  {/* <img
                    src="/logos/logo_springer.jpg"
                    alt=""
                    className="nit-logo"
                  /> */}
                </h6>
              </div>
              <div className="lBox">
              <img className="logo2" src="/logos/digiToad.jpg" alt="" />
              <img className="logo2" src="/logos/cdac-extended.jpg" alt="" />
              <img className="logo2" src="/logos/serb_logo.png" alt="" />
              <img className="logo2" src="/logos/logo_springer.jpg" alt="" />
              <img className="logo2" src="/logos/mantisWave.jpg" alt="" />
              {/* <img className="logo2" src="/logos/infoTechLogo.jpg" alt="" /> */}
              <img className="logo2" src="/logos/bmgLogo.jpg" alt="" />
              <img className="oceanLogo" src="/logos/oceanRobotix.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{/* mobile nav */}</div>
    </>
  );
};

export default Header;
