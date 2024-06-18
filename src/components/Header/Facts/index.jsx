import React from 'react';
import "./Facts.css";
import Odometer from 'react-odometerjs';

const Facts = ({ experience, projects, clients }) => {
  return (
    <div className='fact_container'>
      <div className='fact-item'>
        <div className='count_container'>
          <Odometer value={experience} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years of Experience</p>
      </div>

      <div className='fact-item'>
        <div className='count_container'>
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>

      <div className='fact-item'>
        <div className='count_container'>
          <Odometer value={clients} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Satisfied Clients</p>
      </div>
    </div>
  );
}

export default Facts;
