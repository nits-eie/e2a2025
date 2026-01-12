import React from 'react';
import "../assets/css/sponsorship.css";
import Header from '../components/Header';

const Sponsorship = () => {
  const containerRef = React.useRef(null);
  const scrollToBottom = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <>
      <Header />
      <div className="sponsorship-container" ref={containerRef}>
        <div className="sponsorship-content">
          <h1 className="sponsorship-title">How to Become a Sponsor?</h1>
          <p className="sponsorship-description">
            E2A 2025 welcomes sponsors and exhibitors interested in promoting their activities and products during our online conference event.
            With over 100 expected attendees, E2A 2025 offers a great opportunity to advertise electronics, automation, medical devices and related products,
            increasing the visibility of your esteemed organization.
          </p>

          <h2 className="sponsorship-subtitle">Sponsorship Details:</h2>

          <h3 className="sponsorship-section-title">Platinum Sponsor (Rs. 50,000/-):</h3>
          <ul className="sponsorship-benefits">
            <li>Logo recognition on the conference website with a link to your website.</li>
            <li>Logo recognition in the conference brochure, banners, proceedings, and sessions.</li>
            <li>A promotional video of the sponsor will be webcast during the general online sessions of the conference.</li>
            <li>A space for exhibiting your product will be provided as required.</li>
            <li>The registration fee for the two (02) persons from your side will be waived.</li>
            <li>A session of 15 minutes duration will be arranged with the participants.</li>
          </ul>

          <h3 className="sponsorship-section-title">Gold Sponsor (Rs. 30,000/-):</h3>
          <ul className="sponsorship-benefits">
            <li>Logo recognition on the conference website with a link to your website.</li>
            <li>Logo recognition in the conference brochure, banners, proceedings, and sessions.</li>
            <li>A promotional video of the sponsor will be webcast during the general online sessions of the conference.</li>
            <li>The registration fee for one (01) person from your side will be waived.</li>
          </ul>

          <h3 className="sponsorship-section-title">Silver Sponsor (Rs. 20,000/-):</h3>
          <ul className="sponsorship-benefits">
            <li>Logo recognition on the conference website with a link to your website.</li>
            <li>Logo recognition in the conference brochure, banners, proceedings, and sessions.</li>
          </ul>

          <p className="sponsorship-note">
            Early confirmation of your sponsorship will ensure an even higher level of exposure.
          </p>

          <p className="sponsorship-contact">
            Feel free to contact our General Chairs: Dr. Sudarsan Sahoo & Dr. Anup Kumar Sharma at{" "}
            <a href="mailto:e2a@ei.nits.ac.in" className="sponsorship-email">e2a@ei.nits.ac.in</a> for sponsorship related queries.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sponsorship;
