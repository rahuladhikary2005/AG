import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <h1>Contact Us</h1>
      <p>Email: info@ambulancegalaxy.com</p>
      <p>Phone: 1-800-AMBULANCE</p>
      <form className="mt-4">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
