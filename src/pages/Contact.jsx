import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Contact Us</h1>
          <p className="text-muted mt-3">
            <strong>Email:</strong> info@ambulancegalaxy.com
          </p>
          <p className="text-muted">
            <strong>Phone:</strong> 1-800-AMBULANCE
          </p>
          <p className="text-muted">
            <strong>Address:</strong> 123 Emergency Lane, Medical City, MC 12345
          </p>
        </div>
        <div className="col-md-6">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea 
                className="form-control" 
                placeholder="Your Message"
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
