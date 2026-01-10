import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <div id="ambulanceCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between px-4 py-5">
              <div className="text-center text-lg-start mb-4 mb-lg-0">
                <h1 className="fw-bold">24/7 Emergency<br />Ambulance Care with<br />Medulance</h1>
                <h5 className="text-primary mt-3">For Emergency Medical Service</h5>
                <p className="mt-3 text-muted">
                  Help / Rescues the Patient in case of the Emergency situation by doing just a click.
                  Medulance Ambulance comes right in front of the door for help.
                </p>
                <button className="btn btn-danger mt-3 px-4 py-2">BOOK NOW</button>
                <p className="mt-3 mb-1 fw-bold">or</p>
                <h6>Call Our Assistance</h6>
                <button className="btn btn-outline-danger mt-2">
                  📞 +91 88829 78888
                </button>
              </div>
              <div className="text-center">
                <img
                  src="ba1.png"
                  alt="Ambulance 1"
                  className="img-fluid"
                  style={{ maxHeight: '350px' }}
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between px-4 py-5">
              <div className="text-center text-lg-start mb-4 mb-lg-0">
                <h1 className="fw-bold">Fastest Emergency<br />Response in Your Area</h1>
                <h5 className="text-primary mt-3">Reliable & Safe Medical Transport</h5>
                <p className="mt-3 text-muted">
                  Just one tap and our ambulance will reach your location immediately to help you
                  during any medical emergency.
                </p>
                <button className="btn btn-danger mt-3 px-4 py-2">BOOK NOW</button>
                <p className="mt-3 mb-1 fw-bold">or</p>
                <h6>Call Our Assistance</h6>
                <button className="btn btn-outline-danger mt-2">
                  📞 +91 88829 78888
                </button>
              </div>
              <div className="text-center">
                <img
                  src="/images/ambulance2.png"
                  alt="Ambulance 2"
                  className="img-fluid"
                  style={{ maxHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#ambulanceCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#ambulanceCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      {/* Ambulance types cards */}
      <section className="container py-5">
        <h3 className="text-center text-danger mb-4">Our Ambulances</h3>
        <div className="row g-4" style={{ perspective: '1000px' }}>
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm" style={{ 
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: 'translateY(0)',
              ':hover': { transform: 'rotateY(-10deg) rotateX(5deg) translateZ(20px)' }
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(-8deg) rotateX(5deg) translateZ(20px) translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src="/images/ambulance1.png" className="card-img-top" alt="BLS Ambulance" style={{objectFit: 'cover', height: 180}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Basic Life Support (BLS)</h5>
                <p className="card-text text-muted">For non-critical patients requiring basic medical care and transport. Staffed by EMTs.</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to="/auth" className="btn btn-danger" style={{ transition: 'all 0.2s' }}>Book Now</Link>
                  <Link to="/services?type=0" className="btn btn-outline-secondary" style={{ transition: 'all 0.2s' }}>Explore</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm" style={{ 
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: 'translateY(0)'
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(-8deg) rotateX(5deg) translateZ(20px) translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src="/images/ambulance2.png" className="card-img-top" alt="ALS Ambulance" style={{objectFit: 'cover', height: 180}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Advanced Life Support (ALS)</h5>
                <p className="card-text text-muted">For critical patients needing advanced interventions. Staffed by paramedics and equipped for life-saving care.</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to="/auth" className="btn btn-danger" style={{ transition: 'all 0.2s' }}>Book Now</Link>
                  <Link to="/services?type=1" className="btn btn-outline-secondary" style={{ transition: 'all 0.2s' }}>Explore</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm" style={{ 
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: 'translateY(0)'
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(-8deg) rotateX(5deg) translateZ(20px) translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src="/images/ambulance3.png" className="card-img-top" alt="Patient Transport" style={{objectFit: 'cover', height: 180}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Patient Transport / Non-Emergency</h5>
                <p className="card-text text-muted">Wheelchair and stretcher-capable vehicles for planned transfers between clinics and hospitals.</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to="/auth" className="btn btn-danger" style={{ transition: 'all 0.2s' }}>Book Now</Link>
                  <Link to="/services?type=2" className="btn btn-outline-secondary" style={{ transition: 'all 0.2s' }}>Explore</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
