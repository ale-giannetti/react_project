// src/ServiceCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';

var titleButton = 'Book Now'

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  useEffect(() => {
    if (expanded) {
      axios.get(`/appointments/${service.id}`)
        .then(response => {
          setAppointments(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the appointments!", error);
        });
    }
  }, [expanded, service.id]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const bookAppointment = () => {
      axios.post(`/appointments/${selectedAppointmentId}`, {
        email: 'test@test.com',
        name: 'Utente Prova',
        modelYear: 2020,    
        make: 'Toyota',
        model: 'Aygo'
      })
      .then(response => {
        console.log('Appointment booked:', response.data);
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
      });
  };

  return (
    <div className="service-card">
      <div className="service-header" onClick={toggleExpand}>
        <span className="service-icon">{ '🔧'}</span>
        <span className="service-title">{service.serviceName}</span>
        <span className="service-arrow">{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && appointments.length > 0 && (
        <div className="service-details">
          <div className="appointments">
            <p>Available Appointments</p>
            {appointments.map((appointment, index) => (
              <label key={index}>
                <input 
                type="radio" 
                name="appointment" 
                onChange={() => setSelectedAppointmentId(appointment.id)}
                />
                {new Date(appointment.apptStartTime).toLocaleString()}
              </label>
            ))}
          </div>
          <Button  onClick={bookAppointment}>
            {titleButton}</Button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
