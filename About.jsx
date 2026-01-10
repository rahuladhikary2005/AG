import React from 'react';

const About = () => {
  return (
    <section className="container py-5" id="about">
      <div className="text-center mb-4">
        <h2 className="text-danger">About AmbulanceGalaxy</h2>
        <p className="text-muted">Fastest Emergency Ambulance Service in Your City</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8e1f251234"
            alt="Ambulance"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h4>Why Choose AmbulanceGalaxy?</h4>
          <p>
            AmbulanceGalaxy is committed to providing rapid and reliable ambulance services within just 10 minutes of booking.
            We understand that in medical emergencies, every second counts. Our professional team and GPS-tracked ambulances
            ensure that you receive care without any delay.
          </p>
          <ul>
            <li>24/7 Emergency Support</li>
            <li>GPS Tracked Vehicles</li>
            <li>Trained Medical Staff</li>
            <li>Easy Booking System</li>
          </ul>
        </div>
      </div>

<div className="text-center mb-5">
  <h3 className="text-danger fw-bold display-6">
    🚑 AmbulanceGalaxy Services & Features
  </h3>
  <p className="text-muted">
    Providing comprehensive emergency support—faster, smarter, and safer
  </p>
  <hr className="w-25 mx-auto border-2 border-danger" />
</div>

      <div className="row align-items-start">
        <div className="col-md-4 mb-4">
          <div className="card border-danger h-100">
            <div className="card-body">
              <h5 className="card-title text-danger">Types of Ambulances</h5>
              <ul className="card-text">
                <li>Basic Life Support (BLS)</li>
                <li>Advanced Life Support (ALS)</li>
                <li>ICU Ambulances</li>
                <li>Neonatal Ambulances</li>
                <li>Dead Body Transport Ambulances</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-danger h-100">
            <div className="card-body">
              <h5 className="card-title text-danger">Our Mission</h5>
              <p className="card-text">
                To save lives by delivering immediate and quality emergency medical transportation services. We strive to make ambulance access as easy as booking a cab—fast, affordable, and reliable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Data */}
      <div className="row align-items-start">
        <div className="col-md-4 mb-4">
          <div className="card border-danger h-100">
            <div className="card-body">
              <h5 className="card-title text-danger">Booking Methods</h5>
              <p className="card-text">You can book an ambulance quickly using:</p>
              <ul className="card-text">
                <li>Website Booking</li>
                <li>Mobile App (Coming Soon)</li>
                <li>24/7 Call Support</li>
                <li>WhatsApp Assistance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-danger h-100">
            <div className="card-body">
              <h5 className="card-title text-danger">Onboard Equipment</h5>
              <p className="card-text">Our ambulances are equipped with:</p>
              <ul className="card-text">
                <li>Oxygen Cylinders</li>
                <li>Defibrillators</li>
                <li>Cardiac Monitors</li>
                <li>First Aid Kits</li>
                <li>Ventilators (ALS/ICU Units)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-danger h-100">
            <div className="card-body">
              <h5 className="card-title text-danger">Trained Personnel</h5>
              <p className="card-text">Each ambulance is staffed with professionals:</p>
              <ul className="card-text">
                <li>Certified Paramedics</li>
                <li>Emergency Medical Technicians (EMTs)</li>
                <li>Experienced Drivers with medical response training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

<div className="row align-items-start mt-4">
  <div className="col-md-4 mb-4">
    <div className="card border-danger h-100">
      <div className="card-body">
        <h5 className="card-title text-danger">Qualified Nurses on Board</h5>
        <p className="card-text">
          Every AmbulanceGalaxy ambulance is staffed with certified and experienced nurses who provide on-the-spot support during transit, ensuring critical care begins the moment we arrive.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card border-danger h-100">
      <div className="card-body">
        <h5 className="card-title text-danger">Patient-Centric Services</h5>
        <p className="card-text">
          We offer specialized care for elderly, disabled, or high-risk patients including wheelchair access, support staff, and pre-arrival medical instructions to family members.
        </p>
      </div>
    </div>
  </div>

  <div className="col-md-4 mb-4">
    <div className="card border-danger h-100">
      <div className="card-body">
        <h5 className="card-title text-danger">10-Minute Guaranteed Delivery</h5>
        <p className="card-text">
          Our smart dispatch system and city-wide coverage ensure that an ambulance reaches your location within just 10 minutes of booking—anytime, anywhere.
        </p>
      </div>
    </div>
  </div>
</div>


    </section>
  );
};

export default About;
