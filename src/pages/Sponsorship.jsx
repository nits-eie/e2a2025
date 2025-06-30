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
            E2A 2024 welcomes sponsors and exhibitors interested in promoting their activities and products during our online conference event.
            With over 100 expected attendees, E2A 2024 offers a great opportunity to advertise electronics, automation, and related products,
            increasing the visibility of your organization.
          </p>
          <h2 className="sponsorship-subtitle">Sponsorship Details:</h2>
          <h3 className="sponsorship-section-title">Main Sponsor Benefits:</h3>
          <ul className="sponsorship-benefits">
            <li>Logo recognition on the conference website with a link to your site.</li>
            <li>Logo recognition in the conference program.</li>
            <li>A promotional video of the sponsor will be webcast during the general online sessions of the conference.</li>
            <li>Please contact us for any special needs or additional requests.</li>
          </ul>
          <p className="sponsorship-note">
            Early confirmation of your sponsorship will ensure an even higher level of exposure.
          </p>
          <p className="sponsorship-contact">
            For more details, please contact our General Chairs: Dr. Pravin P.S. & Dr. Sudipta Chakraborty at{" "}
            <a href="mailto:e2a@ei.nits.ac.in" className="sponsorship-email">e2a@ei.nits.ac.in</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sponsorship;
