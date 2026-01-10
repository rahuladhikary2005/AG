import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-danger">AmbulanceGalaxy</h5>
            <p>We deliver rapid ambulance services within 10 minutes, 24/7. Trusted by thousands for emergency care transportation.</p>
          </div>
          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
          {/* Emergency Contact */}
          <div className="col-md-6 mb-4">
            <div className="row">
              <div className="col-md-6">
                <h5>Emergency Contact</h5>
                <p className="small"><strong>📞</strong> +91 98765 43210</p>
                <p className="small"><strong>📍</strong> 123 Health St, Kolkata</p>
              </div>
              <div className="col-md-6">
                <h5>Coverage & Availability</h5>
                <p className="small">We currently serve across multiple cities:</p>
                <ul className="list-unstyled small">
                  <li>✓ Kolkata</li>
                  <li>✓ Howrah</li>
                  <li>✓ Salt Lake</li>
                  <li>✓ New Town</li>
                  <li>✓ More cities coming soon...</li>
                </ul>
              </div>
            </div>
            <div className="d-flex gap-3 mt-3">
              <button className="text-white bg-transparent border-0" style={{cursor: 'pointer'}}><i className="bi bi-facebook"></i></button>
              <button className="text-white bg-transparent border-0" style={{cursor: 'pointer'}}><i className="bi bi-instagram"></i></button>
              <button className="text-white bg-transparent border-0" style={{cursor: 'pointer'}}><i className="bi bi-twitter-x"></i></button>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} AmbulanceGalaxy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
