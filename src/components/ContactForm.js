import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section id="contact" className="contact container">
      <h2 className="header form text-center">Contact Us</h2>
      <div className="row">
        {/* Contact Form Column */}
        <div className="form col-md-6">
          <form>
            <div className="form-group m-2">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group m-2">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group m-2">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
              <p className="my-1">
                Submit a message and we will email you back{" "}
                <strong>FAST</strong>!
              </p>
            </div>
            <button type="submit" className="btn btn-primary m-2">
              Send
            </button>
          </form>
        </div>

        {/* Support Information Column */}
        <div className="col-md-6">
          <div className="support-info">
            <h2 className="my-2 form">24/7 Sales & Support</h2>
            <p className="form">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="form">
              <strong>Email:</strong> support@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
