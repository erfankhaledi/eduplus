'use client'

import React, { useState } from 'react';

const ExpandablePagesMenuItem: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <li className={`menu-item-has-children submenu-item-has-children${isActive ? ' active-class' : ''}`}>
      <a href="#">
        Pages
        <span className="mean-expand-class" onClick={toggleActive}>
          <i className="fa fa-plus" aria-hidden="true" style={{ fontSize: '13px', color: 'blue' }}></i>
        </span>
      </a>
      <ul className="sub-menu" style={{ display: isActive ? 'block' : 'none' }}>
        <li><a href="pricing-plan.html">Pricing Plan</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="team-details.html">Team Details</a></li>
        <li><a href="event.html">Event</a></li>
        <li><a href="event-details.html">Event Details</a></li>
      </ul>
    </li>
  );
};

export default ExpandablePagesMenuItem;

