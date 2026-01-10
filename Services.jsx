import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const selectedType = typeParam !== null ? parseInt(typeParam) : null;
  const [expandedIdx, setExpandedIdx] = useState(selectedType !== null ? selectedType : null);

  const ambulanceServices = [
    {
      name: 'Basic Life Support (BLS) Ambulance',
      desc: 'For non-critical transfers with first-aid support. Available 24/7.',
      price: '₹500 - ₹1000',
      facilities: [
        '✓ Oxygen supply system (portable tanks)',
        '✓ First-aid kit with bandages and antiseptics',
        '✓ Stretcher with safety rails',
        '✓ Blankets and pillows',
        '✓ Sterile gloves and masks',
        '✓ Thermometer and blood pressure monitor'
      ],
      machines: [
        '• Portable Oxygen Concentrator',
        '• Automatic Blood Pressure Monitor (NIBP)',
        '• Digital Pulse Oximeter',
        '• Suction Equipment',
        '• First Aid Cabinet with medications',
        '• Emergency lighting system'
      ],
      staffing: 'EMT (Emergency Medical Technician) + Driver'
    },
    {
      name: 'Advanced Life Support (ALS) Ambulance',
      desc: 'Equipped with advanced equipment for critical care and interventions.',
      price: '₹1500 - ₹3000',
      facilities: [
        '✓ Cardiac monitoring and defibrillation',
        '✓ Advanced oxygen delivery systems',
        '✓ IV line setup with fluids',
        '✓ Airway management equipment',
        '✓ Portable ventilator',
        '✓ Stretcher with hydraulic lift',
        '✓ Climate-controlled cabin'
      ],
      machines: [
        '• ECG/EKG Monitor with defibrillator',
        '• Portable Ventilator (non-invasive)',
        '• Advanced Oxygen Regulator System',
        '• Syringe Pump for medication delivery',
        '• Capnography monitor (CO2 monitoring)',
        '• Laryngoscope and intubation equipment',
        '• Automated Chest Compression device',
        '• Portable Ultrasound (in some units)'
      ],
      staffing: 'Paramedic + EMT + Driver'
    },
    {
      name: 'Patient Transport / Non-Emergency Ambulance',
      desc: 'Wheelchair and stretcher-capable vehicles for planned transfers.',
      price: '₹400 - ₹800',
      facilities: [
        '✓ Wheelchair lift or ramp',
        '✓ Spacious interior for mobility assistance',
        '✓ Comfortable seating',
        '✓ Climate control',
        '✓ First-aid kit (basic)',
        '✓ Accessible storage for patient belongings'
      ],
      machines: [
        '• Hydraulic Lift/Ramp system',
        '• Wheelchair securing mechanism',
        '• Basic vital signs monitoring (if needed)',
        '• Hand-held portable oxygen (optional)',
        '• Communication system',
        '• GPS tracking'
      ],
      staffing: 'Medical Attendant + Driver'
    }
  ];

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="container py-5" id="services">
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'transparent',
            border: 'none',
            fontSize: 28,
            cursor: 'pointer',
            color: '#dc3545',
            fontWeight: 'bold'
          }}
          aria-label="Close"
          title="Back to Home"
        >
          ✕
        </button>
      </div>
      <div className="text-center mb-5">
        <h2 className="text-danger">Our Services</h2>
        <p className="text-muted">Fast, Reliable & Life-Saving Medical Transportation</p>
      </div>

      <div className="row g-4">
        {ambulanceServices.map((service, idx) => {
          // Show only selected type if specified, otherwise show all
          if (selectedType !== null && idx !== selectedType) return null;
          return (
          <div key={idx} className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} onClick={() => toggleExpand(idx)}>
                <div>
                  <h5 className="mb-0">{service.name}</h5>
                  <small>{service.desc}</small>
                </div>
                <span style={{ fontSize: 20 }}>{expandedIdx === idx ? '▼' : '▶'}</span>
              </div>
              {expandedIdx === idx && (
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="fw-bold text-danger">Facilities & Equipment:</h6>
                      <ul className="list-unstyled">
                        {service.facilities.map((f, i) => (
                          <li key={i} className="mb-2">{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold text-danger">Medical Machines:</h6>
                      <ul className="list-unstyled">
                        {service.machines.map((m, i) => (
                          <li key={i} className="mb-2">{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <p><strong>Staffing:</strong> {service.staffing}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Price Range:</strong> <span className="text-danger">{service.price}</span></p>
                    </div>
                  </div>
                  <button className="btn btn-danger mt-3">Book Now</button>
                </div>
              )}
            </div>
          </div>
        );
        })}
      </div>
    </section>
  );
};

export default Services;
