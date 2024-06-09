// src/ServiceScheduler.js
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './CardPages.css';
import ServiceCard from 'components/library/Card/ServiceCard';

const ServiceScheduler = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the services!", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Select a Service</h1>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceScheduler;

