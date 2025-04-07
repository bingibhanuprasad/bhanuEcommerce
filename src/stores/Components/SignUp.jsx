import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpC.css';
import Navbar from './Navbar';
import axios from "axios";
import Footer from './Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [message, setMessage] = useState({ text: '', color: '' });
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.password || !formData.confirmpassword) {
      setMessage({ text: "Please enter all fields!", color: "red" });
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmpassword) {
      setMessage({ text: "Passwords do not match!", color: "red" });
      return;
    }

    // axios.post('https://signupuser-72c40-default-rtdb.firebaseio.com/register.json', formData)
    axios.post('http://localhost:8080/user/',formData)
      .then(() => {
        setMessage({ text: "Signup Successful! Redirecting to Login...", color: "green" });

        // Clear form fields
        setFormData({id:'', name: '', email: '', password: '', confirmPassword: '' });

        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate('/SignIn');
        }, 2000);
      })
      .catch(() => {
        setMessage({ text: "Signup failed. Try again!", color: "red" });
      });
  };

  return (
    <>
    <div className='page1'>
      <Navbar />
      <div className="signup-container">
        <div className="signup-box">
          <h2>Sign Up</h2>

          {message.text && <p className="message" style={{ color: message.color }}>{message.text}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your Name" />
            </div>

            <div className="input-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your Email" />
            </div>

            <div className="input-group">
              <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter Password" />
            </div>

            <div className="input-group">
              <input type="password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} required placeholder="Confirm Password" />
            </div>

            <button type="submit" className="signup-btn">Sign Up</button>
          </form>

          <p className="signin-text">Already have an account? <Link to="/SignIn" className="signin-link">Sign In</Link></p>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default SignUp;
