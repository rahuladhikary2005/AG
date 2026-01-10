import React from 'react';

const Contact = () => {
  return (
    <section className="container py-5" id="contact">
      <div className="text-center mb-4">
        <h2 className="text-danger">Contact Us</h2>
        <p className="text-muted">Reach us instantly for emergency ambulance service</p>
      </div>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-6 mb-4">
          <h5 className="text-danger">Emergency Helpline</h5>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> support@ambulancegalaxy.com</p>
          <p><strong>📍 Address:</strong> 123 Health Street, Kolkata, India</p>
          <iframe
            title="AmbulanceGalaxy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8290239122934!2d88.36389507581214!3d22.69780072817726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275e2dbf74dbb%3A0x6e53d3e0ef8c0b8!2sAmbulance%20Service!5e0!3m2!1sen!2sin!4v1628765432109"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter phone number" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
