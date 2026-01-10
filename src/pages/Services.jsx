import React from 'react';

function Services() {
  return (
    <div className="container py-5">
      <h1 className="display-4">Our Services</h1>
      <p className="lead text-muted mt-3">
        Comprehensive emergency medical services available round the clock
      </p>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Emergency Response</h3>
              <p className="card-text">
                Fast response to emergency calls with trained paramedics 
                available 24/7 to provide immediate assistance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Patient Transport</h3>
              <p className="card-text">
                Safe and comfortable transport to hospitals with 
                state-of-the-art ambulances equipped with medical equipment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Medical Care</h3>
              <p className="card-text">
                Professional medical assistance and treatment 
                provided by certified and experienced paramedics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Critical Care Transport</h3>
              <p className="card-text">
                Specialized transport for critically ill patients 
                with advanced life support systems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Non-Emergency Transport</h3>
              <p className="card-text">
                Comfortable transport for patients who don't require 
                emergency services but need medical assistance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Event Medical Support</h3>
              <p className="card-text">
                On-site medical personnel and ambulances for 
                events and public gatherings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
