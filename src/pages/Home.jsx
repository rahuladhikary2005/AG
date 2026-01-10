import React from 'react';

function Home() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-4">Welcome to Ambulance Galaxy</h1>
          <p className="lead text-muted">Your trusted emergency medical services provider.</p>
          <button className="btn btn-danger btn-lg mt-4">Call Ambulance Now</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Our Mission</h2>
          <p>We provide fast, reliable, and professional emergency medical services 24/7 to ensure your safety and health.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
