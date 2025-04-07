import React from "react";
import "./CustomerService.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaComments } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CustomerService = () => {
  return (
    <>
    <div className="page1">
    <Navbar/>
    <div className="customer-service-container">
      <header className="header">
        <h1>Customer Service</h1>
        <p>We’re here to help you 24/7. Reach out anytime!</p>
      </header>

      <section className="contact-details">
        <div className="contact-card">
          <FaPhone className="icon" />
          <h3>Call Us</h3>
          <p>📞 +91 98765 43210</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>📧 support@ecommerce.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>
          <p>🏢 123, Ecom Street, Hyderabad, India</p>
        </div>

        <div className="contact-card">
          <FaClock className="icon" />
          <h3>Working Hours</h3>
          <p>🕒 Mon-Sat: 9:00 AM - 8:00 PM</p>
        </div>
      </section>

      {/* Live Chat Support Section */}
      <section className="live-chat">
        <h2>Live Chat Support</h2>
        <p>Need instant help? Our agents are available 24/7.</p>
        <button className="chat-button">
          <FaComments className="chat-icon" />
          Start Live Chat
        </button>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <FaFacebook className="social-icon facebook" />
          <FaTwitter className="social-icon twitter" />
          <FaInstagram className="social-icon instagram" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 E-Commerce Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default CustomerService;
