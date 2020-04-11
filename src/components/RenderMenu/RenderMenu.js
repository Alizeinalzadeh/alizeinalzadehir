import React from "react";
import "./RenderMenu.css";
import menu from "./RenderMenu.json";
import { BrowserRouter as Router, Switch, Route, Links } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const RenderMenu = () => {
  return (
    <header className="zd-menu-container">
      <nav class="zd-story">
        <Router>
          {menu.menu.map((item) => {
            return (
              <div class="zd-item-menu">
                <Link smooth to={item.href}>
                  <span class="zd-icons">
                    <i class={item.icon}></i>
                  </span>
                  <span class="zd-menu-title">{item.title}</span>
                </Link>
              </div>
            );
          })}
        </Router>
      </nav>
    </header>
  );
};

export default RenderMenu;
