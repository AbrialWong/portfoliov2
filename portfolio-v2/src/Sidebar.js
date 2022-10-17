import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export const Sidebar = () => {
    return (
    <Menu>
      <a className="menu-item" href="/">
        About
      </a>
      <a className="menu-item" href="/salads">
        Experience
      </a>
      <a className="menu-item" href="/pizzas">
        Projects
      </a>
      <a className="menu-item" href="/desserts">
        Skills
      </a>
      <a className="menu-item" href="/desserts">
        Contact
      </a>
    </Menu>
  );
};