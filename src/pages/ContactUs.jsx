import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import '../assets/css/contactUs.css';

const ContactUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const contactPersons = [
    {
      name: "Dr. Shankar K",
      position: "Assistant Professor",
      department: "Dept. of E&I Engineering",
      phone: "+91-8870525684",
      email: "shankar@ei.nits.ac.in"
    },
    {
      name: "Dr. Jupitara Hazarika",
      position: "Assistant Professor",
      department: "Dept. of E&I Engineering",
      phone: "+91-8011017849",
      email: "jupitara@ei.nits.ac.in"
    }
  ];

  return (
    <>
      <Header />
      <div className="contact-page" ref={containerRef}>
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out to our team for any inquiries or assistance.</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="card-header">
                <h2>Contact Information</h2>
                <p className="card-subtitle">Our team is here to help you</p>
              </div>
              <div className="contact-details">
                {contactPersons.map((person, index) => (
                  <div className="contact-item" key={index}>
                    <div className="contact-item-header">
                      <h3>{person.name}</h3>
                      <span className="position">{person.position}</span>
                    </div>
                    <div className="contact-item-body">
                      <p className="department">{person.department}</p>
                      <p className="phone">Phone: {person.phone}</p>
                      <p className="email">
                        <a href={`mailto:${person.email}`} className="contact-link">{person.email}</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="contact-item">
                  <div className="contact-item-header">
                    <h3>General Inquiries</h3>
                  </div>
                  <div className="contact-item-body">
                    <p className="email">
                      <a href="mailto:e2a@ei.nits.ac.in" className="contact-link">e2a@ei.nits.ac.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="card-header">
                <h2>Location and Directions</h2>
                <p className="card-subtitle">Find us easily with the map and directions below</p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.10133795199!2d92.78971797541078!3d24.75771437799644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1753938678946!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map">
                </iframe>
              </div>
              <div className="directions-container">
                <h3>Directions to NIT Silchar</h3>
                <p>NIT Silchar is located in Silchar, Assam. Here are the directions to reach our campus:</p>
                <ul>
                  <li><strong>By Air:</strong> The nearest airport is Kumbhirgram Airport, Silchar. From the airport, you can take a taxi to reach NIT Silchar.</li>
                  <li><strong>By Train:</strong> Silchar Railway Station is well-connected to major cities. From the railway station, you can take a taxi or a bus to reach NIT Silchar.</li>
                  <li><strong>By Road:</strong> Silchar is connected by road to various parts of the region. You can take a bus or drive to Silchar and then follow the local directions to NIT Silchar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
