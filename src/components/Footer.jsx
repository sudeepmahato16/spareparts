import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5><i className="bi bi-envelope-fill"></i> Contact Us</h5>
            <p>123 Street Name</p>
            <p>City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-6 text-md-right">
            <h5><i className="bi bi-list-ul"></i> Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.youtube.com"><FaYoutube /></a>
              <a href="https://www.linkedin.com"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 Bike Accessories Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
