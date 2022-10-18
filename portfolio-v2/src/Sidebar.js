import React from 'react';
import { slide as Menu } from 'react-burger-menu';
// import './Sidebar.css';
import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()((theme) => {
  return {
    // Desktop Version
    /* Position and sizing of burger button */
bmBurgerButton: {
  position: "fixed",
  width: "36px",
  height: "20px",
  left: "36px",
  top: "20px"
},

/* Color/shape of burger icon bars */
bmBurgerBars: {
  /* background: #373a47; */
  background: "#c47f38"

}

// /* Color/shape of burger icon bars on hover*/
// .bm-burger-bars-hover {
//   /* background: #a90000; */
//   background: #373a47;

// }

// /* Position and sizing of clickable cross button */
// .bm-cross-button {
//   height: 24px;
//   width: 24px;
// }

// /* Color/shape of close button cross */
// .bm-cross {
//   background: #bdc3c7;
// }

// /*
// Sidebar wrapper styles
// Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
// */
// .bm-menu-wrap {
//   position: fixed;
//   height: 100%;
// }

// /* General sidebar styles */
// .bm-menu {
//   background: #373a47;
//   padding: 2.5em 1.5em 0;
//   font-size: 1.15em;
// }

// /* Morph shape necessary with bubble or elastic */
// .bm-morph-shape {
//   fill: #373a47;
// }

// /* Wrapper for item list */
// .bm-item-list {
//   color: #b8b7ad;
//   padding: 0.8em;
// }

// /* Individual item */
// .bm-item {
//   display: inline-block;

//   color: #d1d1d1;
//   margin-bottom: 10px;
//   text-align: left;
//   text-decoration: none;
//   transition: color 0.2s;
// }

// .bm-item:hover {
//   color: #ffffff;
// }

// /* Styling of overlay */
// .bm-overlay {
//   background: rgba(0, 0, 0, 0.3);
// }
  };
});


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