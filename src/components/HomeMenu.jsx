'use client'

import React, { useState } from 'react';

const ExpandableMenuItem: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <li className={`menu-item-has-children submenu-item-has-children${isActive ? ' active-class' : ''}`}>
      <a title="New Demo" href="#">
        Home
        <span className="mean-expand-class" onClick={toggleActive}>
          <i className="fa fa-plus" aria-hidden="true" style={{ fontSize: '13px', color: 'blue' }}></i>
        </span>
      </a>
      <ul className="sub-menu submenu-class" style={{ display: isActive ? 'block' : 'none' }}>
        <li className="menu-item-has-children">
          <a href="index.html">Home One</a>
        </li>
        <li className="menu-item-has-children">
          <a href="index-2.html">Home Two</a>
        </li>
        <li className="menu-item-has-children">
          <a href="index-3.html">Home Three</a>
        </li>
      </ul>
    </li>
  );
};

export default ExpandableMenuItem;

