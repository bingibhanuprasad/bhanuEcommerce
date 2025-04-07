// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//        <footer style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
//                 <img src="/logo.png" alt="EcomGroup Logo" style={{ height: '30px', marginRight: '10px' }} />
//                 @2025 EcomGroup, All rights reserved.
//             </footer>
//     </div>
//   )
// }

// export default Footer



// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-4">
//       <Container>
//         <Row>
//           <Col md={4} className="mb-3">
//             <h5 className="text-uppercase mb-4">ShopEase</h5>
//             <p>
//               Your one-stop destination for the best products at the best prices.
//               Quality and customer satisfaction are our priorities.
//             </p>
//           </Col>
//           <Col md={2} className="mb-3">
//             <h5 className="text-uppercase mb-4">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-light">Home</a></li>
//               <li><a href="#" className="text-light">Shop</a></li>
//               <li><a href="#" className="text-light">About Us</a></li>
//               <li><a href="#" className="text-light">Contact</a></li>
//             </ul>
//           </Col>
//           <Col md={3} className="mb-3">
//             <h5 className="text-uppercase mb-4">Contact Us</h5>
//             <p>Email: support@shopease.com</p>
//             <p>Phone: +91 98765 43210</p>
//             <p>Address: Hyderabad, Telangana, India</p>
//           </Col>
//           <Col md={3} className="mb-3">
//             <h5 className="text-uppercase mb-4">Newsletter</h5>
//             <Form>
//               <Form.Group controlId="formNewsletter">
//                 <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
//                 <Button variant="primary" type="submit" className="w-100">Subscribe</Button>
//               </Form.Group>
//             </Form>
//             <div className="d-flex gap-3 mt-3">
//               <a href="#" className="text-light fs-4"><FaFacebook /></a>
//               <a href="#" className="text-light fs-4"><FaTwitter /></a>
//               <a href="#" className="text-light fs-4"><FaInstagram /></a>
//               <a href="#" className="text-light fs-4"><FaLinkedin /></a>
//             </div>
//           </Col>
//         </Row>
//         <hr className="border-light" />
//         <div className="text-center">
//           <p className="mb-0">&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <h5 className="footer-title">ShopEase</h5>
//             <p className="footer-text">
//               Your one-stop destination for the best products at the best prices.
//               Quality and customer satisfaction are our priorities.
//             </p>
//           </div>
//           <div className="col-md-2 mb-3">
//             <h5 className="footer-title">Quick Links</h5>
//             <ul className="footer-list">
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Shop</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Contact</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3 mb-3">
//             <h5 className="footer-title">Contact Us</h5>
//             <p>Email: support@shopease.com</p>
//             <p>Phone: +91 98765 43210</p>
//             <p>Address: Hyderabad, Telangana, India</p>
//           </div>
//           <div className="col-md-3 mb-3">
//             <h5 className="footer-title">Newsletter</h5>
//             <input type="email" placeholder="Enter your email" className="footer-input" />
//             <button className="footer-button">Subscribe</button>
//             <div className="footer-icons">
//               <a href="#" className="icon"><FaFacebook /></a>
//               <a href="#" className="icon"><FaTwitter /></a>
//               <a href="#" className="icon"><FaInstagram /></a>
//               <a href="#" className="icon"><FaLinkedin /></a>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">
//           <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "/src/ecomlogo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-md-4 footer-column">
            <div className="title1">
         <Link to="/">
                    <img src={logo} alt='' />
                  </Link>
                 </div>
         
            <p className="footer-text">
              Your one-stop destination for the best products at the best prices.
              Quality and customer satisfaction are our priorities.
            </p>
          </div>
          <div className="col-md-2 footer-column">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><Link to="/"> Home</Link> </li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-column">
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: support@ecomgroup.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Hyderabad, Telangana, India</p>
          </div>
          <div className="col-md-3 footer-column">
            <h5 className="footer-title">Newsletter</h5>
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button className="footer-button">Subscribe</button>
            <div className="footer-icons">
              <a href="#" className="icon"><FaFacebook /></a>
              <a href="#" className="icon"><FaTwitter /></a>
              <a href="#" className="icon"><FaInstagram /></a>
              <a href="#" className="icon"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
