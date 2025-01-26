import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a9rrq6j', 'template_91xf2wd', form.current, 'IgW6wXBE1LkCotTzJ')
      .then(
        () => {
          Swal.fire({
            title: "Success",
            text: "Message Sent",
            icon: "success",
          });
          // Reset the form after submission
          setFormData({ to_name: "", from_name: "", message: "" });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Error",
            text: "Failed to send message. Please try again later.",
            icon: "error",
          });
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us for any inquiries.</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="to_name">Full Name</label>
          <input
            type="text"
            id="to_name"
            name="to_name" // Matches EmailJS template placeholder
            value={formData.to_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_name">Email Address</label>
          <input
            type="email"
            id="from_name"
            name="from_name" // Matches EmailJS template placeholder
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message" // Matches EmailJS template placeholder
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
