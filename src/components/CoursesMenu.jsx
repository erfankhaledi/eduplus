'use client'

import React, { useState } from 'react';

const ExpandableCourseMenuItem: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <li className={`menu-item-has-children submenu-item-has-children${isActive ? ' active-class' : ''}`}>
      <a href="#">
        Courses
        <span className="mean-expand-class" onClick={toggleActive}>
          <i className="fa fa-plus" aria-hidden="true" style={{ fontSize: '13px', color: 'blue' }}></i>
        </span>
      </a>
      <ul className="sub-menu" style={{ display: isActive ? 'block' : 'none' }}>
        <li><a href="courses-grid.html">Courses Grid</a></li>
        <li><a href="courses-list.html">Courses List</a></li>
        <li><a href="courses-details.html">Courses Details</a></li>
      </ul>
    </li>
  );
};

export default ExpandableCourseMenuItem;

