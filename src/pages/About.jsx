import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <h1 className="display-4">About Ambulance Galaxy</h1>
      <p className="lead text-muted mt-4">
        We provide fast, reliable emergency medical services 24/7 to communities across the region.
      </p>
      
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Ambulance Galaxy has been dedicated to providing 
            world-class emergency medical services. Our team of highly trained professionals 
            is equipped with state-of-the-art medical equipment to handle any emergency.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Compassion:</strong> We care for every patient</li>
            <li><strong>Excellence:</strong> We maintain highest standards</li>
            <li><strong>Speed:</strong> Fast response saves lives</li>
            <li><strong>Integrity:</strong> Trustworthy and professional</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
