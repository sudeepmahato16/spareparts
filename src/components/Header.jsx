import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Login from "./Login";

const Header = () => {
  const [isHelmetHovered, setIsHelmetHovered] = useState(false);
  const triggerHelmet = () => {
    setIsHelmetHovered(!isHelmetHovered);
  };
  const [isLoginTriggered, setIsLoginTriggered] = useState(false);
  const triggerLogin = () => {
    setIsLoginTriggered(!isLoginTriggered);
  };
  return (
    <header>
      {/* Header Top section */}
      <div className="header-top d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="logo">
          <a href="/" className="navbar-brand">
            SpareParts.com {/*Have to add actal logo img*/}
          </a>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            style={{ width: "400px" }}
            placeholder="Search products..."
          />
        </div>

        {/* User Links */}
        <div className="user-links">
          <button
            href=""
            className="mr-3 position-relative btn-login bg-none"
            onClick={triggerLogin}
          >
            <FiUser size="1.3em" />
            Login / Signup
          </button>
          {isLoginTriggered && <Login trigger={triggerLogin} />}
          <a href="/cart">
            <BiCart size="1.5em" /> Cart
          </a>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Navigation links */}
              <li
                className="nav-item"
                
              >
                <a className="nav-link" href="/home">
                  Home
                </a>
               
              </li>
              <li className="nav-item position-relative" 
              onMouseEnter={triggerHelmet}
                onMouseLeave={triggerHelmet}>
                <a className="nav-link" href="/categories/helmets">
                  Helmets

                </a>
                <ul
                  className={`position-absolute hovered gap-1 rounded flex-column list-unstyled p-2  ${
                    isHelmetHovered ? "d-flex" : "d-none"
                  }`}
                >
                  <li>A</li>
                  <li>B</li>
                  <li>C</li>
                  <li>D</li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories/riding-gears">
                  Riding Gears
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories/accessories">
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories/parts">
                  Auto Parts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categories/tyres">
                  Tyres
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              {/* Additional links */}
              <li className="nav-item">
                <a className="nav-link" href="/faqs">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
