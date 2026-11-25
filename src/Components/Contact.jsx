import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>
              I'm currently available to take on new projects, so feel free to
              contact.
            </p>
            <div className="contact-details">
              <div className="contact-me">
                <img src={mail_icon} alt="" />
                <p>RaghavShah0704@gmail.com</p>
              </div>
              <div className="contact-me">
                <img src={call_icon} alt="" />
                <p>+91 8160541975</p>
              </div>
              <div className="contact-me">
                <img src={location_icon} alt="" />
                <p>Surat, India</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your Name" name="from_name" required />
            <label>Your Email</label>
            <input type="email" placeholder="Enter your Email" name="from_email" required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Submit Now"}
            </button>

            {status === "success" && (
              <p className="contact-feedback contact-success">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact-feedback contact-error">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
