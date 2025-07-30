import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import emailjs from 'emailjs-com';
import '../assets/css/contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "e2a@ei.nits.ac.in",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with actual values from EmailJS
    emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then((result) => {
        console.log(result.text);
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: "",
          subject: "",
          email: "e2a@ei.nits.ac.in",
          message: ""
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
  };

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
            <div className="contact-form-card">
              <div className="card-header">
                <h2>Send Us a Message</h2>
                <p className="card-subtitle">Fill out the form below and we'll get back to you shortly</p>
              </div>
              <form onSubmit={handleSubmit} noValidate className="form-container">
                <div className="form-group">
                  <label htmlFor="name" className="required">Name</label>
                  <input
                    id="name"
                    type="text"
                    className={`form-control ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    placeholder="Your name"
                    onChange={handleChange}
                  />
                  {errors.name && <div className="error-message show">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="required">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className={`form-control ${errors.subject ? 'error' : ''}`}
                    value={formData.subject}
                    placeholder="Message subject"
                    onChange={handleChange}
                  />
                  {errors.subject && <div className="error-message show">{errors.subject}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="required">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    placeholder="Your email"
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error-message show">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="required">Message</label>
                  <textarea
                    id="message"
                    className={`form-control ${errors.message ? 'error' : ''}`}
                    rows="5"
                    value={formData.message}
                    placeholder="Your message..."
                    onChange={handleChange}
                  />
                  {errors.message && <div className="error-message show">{errors.message}</div>}
                </div>
                {submitStatus === 'success' && (
                  <div className="success-message show">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message show">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
