import React from "react";

function ContactForm() {
  return (
    <section id="contact" className="contact container my-5">
      <h2 className="text-center mb-4 m-5">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
              ></textarea>
              <div className="form-text">
                Submit a message and we will email you back{" "}
                <strong>FAST</strong>!
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Send
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="support-info">
            <h3 className="mb-3">24/7 Sales & Support</h3>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Email:</strong> support@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
