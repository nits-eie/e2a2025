import React, { useState, useEffect, useRef } from 'react';
import "../assets/css/contactUs.css";
import Header from '../components/Header';

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

    setTimeout(() => {
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
    }, 1000);
  };

  const contactPersons = [
    {
      name: "Dr. Shankar K ",
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
      <div className="container" ref={containerRef}>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>For any queries or assistance, please reach out to our team.</p>

            <div className="contact-persons">
              {contactPersons.map((person, index) => (
                <div className="contact-person" key={index}>
                  <p>{person.name}</p>
                  <p>{person.position}</p>
                  <p>{person.department}</p>
                  <p>Phone: {person.phone}</p>
                  <p>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </p>
                </div>
              ))}

              <div className="contact-person">
                <p>General Inquiries</p>
                <p>
                  <a href="mailto:e2a@ei.nits.ac.in">e2a@ei.nits.ac.in</a>
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3>Send Message</h3>

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
                rows="4"
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
    </>
  );
}

export default ContactUs;
