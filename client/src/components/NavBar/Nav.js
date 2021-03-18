import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../default-white.png";
import "./Nav.css";


function Nav() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="#">
              {" "}
              <img src={logo} width="198" height="60" />
            </a>
          </div>
          <div
            id="mainListDiv"
            className={isActive ? "main_list show_list" : "main_list"}
          >
            <ul className="navlinks">
              <li>
                <Link href="#home">
                  <a href="#">Home</a>
                </Link>
              </li>

              <li id="portfolio">
                <Link to="/about">
                  <a href="#">About</a>
                </Link>
                <ul id="slim">
                  <li>
                    <a href="#">Information</a>
                  </li>
                  <li>
                    <a href="#">Why choose us?</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/offers'>
                  <a href="#">Offers</a>
                </Link>
              </li>
              <li>
                <Link to="/agents">
                  <a href="#">Agents</a>
                </Link>
              </li>
              <li>
                <Link to="/partners">
                  <a href="#">Partners</a>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <a href="#">FAQ</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a href="#">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <span
            className={isActive ? "navTrigger active" : "navTrigger"}
            onClick={() => setIsActive(!isActive)}
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
