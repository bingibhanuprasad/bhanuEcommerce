// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './SignInC.css';
// // import Navbar from './Navbar';
// // import axios from "axios";

// // const SignIn = () => {
// //   const [loginData, setLoginData] = useState({ email: '', password: '' });
// //   const [message, setMessage] = useState({ text: '', color: '' });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setLoginData({ ...loginData, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Check if fields are empty
// //     if (!loginData.email || !loginData.password) {
// //       setMessage({ text: "Please enter both email and password!", color: "red" });
// //       return;
// //     }

// //     axios.get('https://signupuser-72c40-default-rtdb.firebaseio.com/register.json')
// //       .then((response) => {
// //         const users = response.data;
// //         const user = Object.values(users || {}).find(user => user.email === loginData.email && user.password === loginData.password);

// //         if (user) {
// //           setMessage({ text: "Login Successful! Redirecting...", color: "green" });

// //           // Store user details in localStorage
// //           localStorage.setItem("loggedInUser", JSON.stringify(user));

// //           // Redirect to homepage after 2 seconds
// //           setTimeout(() => {
// //             navigate('/');
// //           }, 2000);
// //         } else {
// //           setMessage({ text: "Invalid email or password!", color: "red" });
// //         }
// //       })
// //       .catch(() => {
// //         setMessage({ text: "Login failed. Try again!", color: "red" });
// //       });
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="signin-container">
// //         <div className="signin-box">
// //           <h2>Sign In</h2>

// //           {message.text && <p className="message" style={{ color: message.color }}>{message.text}</p>}

// //           <form onSubmit={handleLogin}>
// //             <div className="input-group">
// //               <input type="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Enter your Email" />
// //             </div>

// //             <div className="input-group">
// //               <input type="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Enter Password" />
// //             </div>

// //             <button type="submit" className="signin-btn">Sign In</button>
// //           </form>

// //           <p className="signup-text">Don't have an account? <Link to="/SignUp" className="signup-link">Sign Up</Link></p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default SignIn;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from "../context/AuthContext";
 
// import './SignInC.css';
// import Navbar from './Navbar';
// import axios from "axios";

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState({ text: '', color: '' });
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Get login function

//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!loginData.email || !loginData.password) {
//       setMessage({ text: "Please enter both email and password!", color: "red" });
//       return;
//     }

//     // axios.get('https://signupuser-72c40-default-rtdb.firebaseio.com/register.json')
//     axios.post('http://localhost:8080/user/login',loginData)
//       .then((response) => {
//         const users = response.data;
//         const user = Object.values(users || {}).find(user => user.email === loginData.email && user.password === loginData.password);

//         if (user) {
//           setMessage({ text: "Login Successful! Redirecting...", color: "green" });

//           login(user);  

//           setTimeout(() => {
//             navigate('/');  
//           }, 1000);
//         } else {
//           setMessage({ text: "Invalid email or password!", color: "red" });
//         }
//       })
//       .catch(() => {
//         setMessage({ text: "Login failed. Try again!", color: "red" });
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="signin-container">
//         <div className="signin-box">
//           <h2>Sign In</h2>

//           {message.text && <p className="message" style={{ color: message.color }}>{message.text}</p>}

//           <form onSubmit={handleLogin}>
//             <div className="input-group">
//               <input type="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Enter your Email" />
//             </div>

//             <div className="input-group">
//               <input type="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Enter Password" />
//             </div>

//             <button type="submit" className="signin-btn">Sign In</button>
//           </form>

//           <p className="signup-text">Don't have an account? <Link to="/SignUp" className="signup-link">Sign Up</Link></p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from "../context/AuthContext";
// import './SignInC.css';
// import Navbar from './Navbar';
// import axios from "axios";

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState({ text: '', color: '' });
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Get login function

//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!loginData.email || !loginData.password) {
//       setMessage({ text: "Please enter both email and password!", color: "red" });
//       return;
//     }

//     axios.post('http://localhost:8080/user/login', loginData) // ✅ Use POST instead of GET
//       .then((response) => {
//         if (response.data.success) {
//           setMessage({ text: "Login Successful! Redirecting...", color: "green" });

//           login(response.data.user); // Save user details in context

//           localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));

//           setTimeout(() => {
//             navigate('/');
//           }, 1000);
//         } else {
//           setMessage({ text: "Invalid email or password!", color: "red" });
//         }
//       })
//       .catch(() => {
//         setMessage({ text: "Login failed. Try again!", color: "red" });
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="signin-container">
//         <div className="signin-box">
//           <h2>Sign In</h2>

//           {message.text && <p className="message" style={{ color: message.color }}>{message.text}</p>}

//           <form onSubmit={handleLogin}>
//             <div className="input-group">
//               <input type="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Enter your Email" />
//             </div>

//             <div className="input-group">
//               <input type="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Enter Password" />
//             </div>

//             <button type="submit" className="signin-btn">Sign In</button>
//           </form>

//           <p className="signup-text">Don't have an account? <Link to="/SignUp" className="signup-link">Sign Up</Link></p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from "../context/AuthContext";

// import './SignInC.css';
// import Navbar from './Navbar';
// import axios from "axios";

// const SignIn = () => {
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState({ text: '', color: '' });
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Auth function

//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!loginData.email || !loginData.password) {
//       setMessage({ text: "Please enter both email and password!", color: "red" });
//       return;
//     }

//     try {
//       console.log("Sending request with:", loginData); // Debugging

//       const response = await axios.post('http://localhost:8080/user/login', loginData);

//       console.log("Response:", response.data); // Debugging

//       if (response.data.success) {
//         setMessage({ text: "Login Successful! Redirecting...", color: "green" });

//         login(response.data.user);  // Store user in context
//         localStorage.setItem("loggedInUser", JSON.stringify(response.data.user));

//         setTimeout(() => {
//           navigate('/');
//         }, 1000);
//       } else {
//         setMessage({ text: "Invalid email or password!", color: "red" });
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       setMessage({ text: "Login failed. Try again!", color: "red" });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="signin-container">
//         <div className="signin-box">
//           <h2>Sign In</h2>

//           {message.text && <p className="message" style={{ color: message.color }}>{message.text}</p>}

//           <form onSubmit={handleLogin}>
//             <div className="input-group">
//               <input 
//                 type="email" 
//                 name="email" 
//                 value={loginData.email} 
//                 onChange={handleChange} 
//                 required 
//                 placeholder="Enter your Email" 
//               />
//             </div>

//             <div className="input-group">
//               <input 
//                 type="password" 
//                 name="password" 
//                 value={loginData.password} 
//                 onChange={handleChange} 
//                 required 
//                 placeholder="Enter Password" 
//               />
//             </div>

//             <button type="submit" className="signin-btn">Sign In</button>
//           </form>

//           <p className="signup-text">Don't have an account? <Link to="/SignUp" className="signup-link">Sign Up</Link></p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"; 
import './SignInC.css';
import Navbar from './Navbar';
import axios from "axios";
import Footer from './Footer';

const SignIn = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState({ text: '', color: '' });
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setMessage({ text: "Please enter both email and password!", color: "red" });
      return;
    }

    try {
      console.log("Sending request with:", loginData);

      const response = await axios.post('http://localhost:8080/user/login', loginData);
      
      console.log("Response:", response.data);

      if (response.data && response.data.email === loginData.email && response.data.password === loginData.password) {
        setMessage({ text: "Login Successful! Redirecting...", color: "green" });

        login(response.data);  // Store user in Auth Context
        localStorage.setItem("loggedInUser", JSON.stringify(response.data));

        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setMessage({ text: "Invalid email or password!", color: "red" });
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage({ text: "Login failed. Try again!", color: "red" });
    }
  };

  return (
    <>
    <div className='page1'>
      <Navbar />
      <div className="signin-container">
        <div className="signin-box">
          <h2>Sign In</h2>

          {message.text && <p className="message" style={{ color: message.color }}>{message.text}</p>}

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input type="email" name="email" value={loginData.email} onChange={handleChange} required placeholder="Enter your Email" />
            </div>

            <div className="input-group">
              <input type="password" name="password" value={loginData.password} onChange={handleChange} required placeholder="Enter Password" />
            </div>

            <button type="submit" className="signin-btn">Sign In</button>
          </form>

          <p className="signup-text">Don't have an account? <Link to="/SignUp" className="signup-link">Sign Up</Link></p>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default SignIn;
