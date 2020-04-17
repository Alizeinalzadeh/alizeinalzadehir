import React from "react";
import "./RenderMenu.css";
import menu from "./RenderMenu.json";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';

const RenderMenu = () => {
  return (
      <header className="zd-menu-container">
        <nav className="zd-story">
          {menu.menu.map((item) => {
            return (
              <div className="zd-item-menu">
                <Link to={item.href}>
                  <span className="zd-icons">
                    <i className={item.icon}></i>
                  </span>
                  <span className="zd-menu-title">{item.title}</span>
                </Link>
              </div>
            );
          })}
        </nav>
      </header>  
  );
};

export default RenderMenu;
