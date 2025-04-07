// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ConfirmOrder.css";
// import Navbar from "./stores/Components/Navbar";

// const ConfirmOrder = () => {
//   const navigate = useNavigate();
//   const [details, setDetails] = useState({
//     name: "",
//     address: "",
//     payment: "COD",
//   });
//   const [isBooked, setIsBooked] = useState(false);

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = () => {
//     setIsBooked(true);
//     setTimeout(() => navigate("/"), 3000); // Redirect to home after 3 sec
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="confirm-order-container">
//       <h1>🛒 Confirm Your Details</h1>
//       {isBooked ? (
//         <h2 className="order-success">🎉 Your Order is Booked!</h2>
//       ) : (    
//         <form onSubmit={handlePlaceOrder}>
//          <input 
//     type="text" 
//     name="name" 
//     placeholder="Enter Name" 
//     required 
//     value={details.name} 
//     onChange={handleChange} 
//   />   

//   <input 
//     type="text" 
//     name="address" 
//     placeholder="Enter Address" 
//     required 
//     value={details.address} 
//     onChange={handleChange} 
//   />

//   <select 
//     name="payment" 
//     value={details.payment} 
//     onChange={handleChange} 
//     required
//   >
//             <option value="COD">Cash on Delivery</option>
//             <option value="Card">Credit/Debit Card</option>
//             <option value="UPI">UPI Payment</option>
//           </select>
//           <button type="submit"  >Place Order</button>
//         </form>
//       )}
//     </div>
//     </>
//   );
// };

// export default ConfirmOrder;

// import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// import { useCart } from "./stores/context/CartContext";
// import { useAuth } from "./stores/context/AuthContext";
// import "./ConfirmOrder.css";
// import Navbar from "./stores/Components/Navbar";

// const ConfirmOrder = () => {
//   const { cartItems, clearCart } = useCart();
//   const { user } = useAuth();

//   const [orderDetails, setOrderDetails] = useState({
//     name: user?.name || "",
//     email: user?.email || "",  // User's email as recipient
//     address: "",
//     payment: "COD",
  
//   });

//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

  

//   const sendEmail = () => {
//     const templateParams = {
//       name: orderDetails.name,
//       email: orderDetails.email,  // This will now send to the user
//       to_email: orderDetails.email,  // Ensure "to_email" is set in your template
//       items: cartItems.map(item => `   ${item.product} -  ${item.model} - ₹${item.price} `).join("\n"),
//     };
 


//     emailjs.send(
//       "service_nthywer",
//       "template_2qi8bg5",
//       templateParams,
//       "Is0moPfmi7pFa978w"
//     )
//     .then(() => {
//       alert(`Order confirmation email sent to ${orderDetails.email}!`);
//       clearCart();
//     })
//     .catch(error => console.error("Failed to send email:", error));
//   };






//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!orderDetails.name || !orderDetails.email || !orderDetails.address) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     console.log("Order Confirmed:", orderDetails);
//     sendEmail();
  
//     orderDetails.name="",
//     orderDetails.address="",
//     orderDetails.email=""
   
//   };
//   useEffect(()=>{

//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); 
//     console.log("User:", loggedInUser.name);
//     console.log("User ID:", loggedInUser.id);
//     console.log("password",loggedInUser.password);

// const userId=loggedInUser?.id;
// const orderData={
  
// }

    
    






//   },[])

//   return (
//     <>
//       <Navbar />
//       <div className="confirm-order-container">
//         <h1>Confirm Your Order</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Enter Name" required value={orderDetails.name} onChange={handleChange} />
//           <input type="email" name="email" placeholder="Enter Email" required value={orderDetails.email} onChange={handleChange} />
//           <input type="text" name="address" placeholder="Enter Address" required value={orderDetails.address} onChange={handleChange} />
//           <select name="payment" value={orderDetails.payment} onChange={handleChange} required>
//             <option value="COD">Cash on Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>

//           <button type="submit">Confirm Order</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ConfirmOrder;




// import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// import axios from "axios"; // Import axios for API calls
// import { useCart } from "./stores/context/CartContext";
// import { useAuth } from "./stores/context/AuthContext";
// import "./ConfirmOrder.css";
// import Navbar from "./stores/Components/Navbar";

// const ConfirmOrder = () => {
//   const { cartItems, clearCart } = useCart();
//   const { user } = useAuth();

//   const [orderDetails, setOrderDetails] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     address: "",
//     payment: "COD",
//   });

//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       setOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         name: loggedInUser.name || "",
//         email: loggedInUser.email || "",
//       }));
//       console.log("User:", loggedInUser.name);
//       console.log("User ID:", loggedInUser.id);
//     }
//   }, []);

//   // Function to send order details to backend
//   const saveOrderToDatabase = async () => {
//     try {
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const userId = loggedInUser?.id;

//       if (!userId) {
//         alert("User ID is missing. Please log in again.");
//         return;
//       }

//       const orderData = {
//         userId: userId,
//            items: cartItems.map(item => ({
//             productImage:item.image,
//           model: item.model,
//           description:item.description,

//           price: item.price,
//           paymentMethod:"cash on delivery"

//         })),
//       };

//       const response = await axios.post(`http://localhost:8080/products/add/${userId}`, orderData);

//       if (response.status === 200) {
//         console.log("Order saved successfully:", response.data);
//         return true;
//       } else {
//         console.error("Failed to save order:", response);
//         alert("Failed to save order.");
//         return false;
//       }
//     } catch (error) {
//       console.error("Error saving order:", error);
//       alert("Error saving order. Please try again.");
//       return false;
//     }
//   };

//   // Function to send confirmation email
//   const sendEmail = async () => {
//     const templateParams = {
//       name: orderDetails.name,
//       email: orderDetails.email,
//       to_email: orderDetails.email,
//       items: cartItems.map(item => `${item.product} - ${item.model} - ₹${item.price}`).join("\n"),
//     };

//     try {
//       await emailjs.send(
//         "service_nthywer",
//         "template_2qi8bg5",
//         templateParams,
//         "Is0moPfmi7pFa978w"
//       );
//       alert(`Order confirmation email sent to ${orderDetails.email}!`);
//       clearCart();
//     } catch (error) {
//       console.error("Failed to send email:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!orderDetails.name || !orderDetails.email || !orderDetails.address) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     const orderSaved = await saveOrderToDatabase();
//     if (orderSaved) {
//       sendEmail();
//       setOrderDetails();
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="confirm-order-container">
//         <h1>Confirm Your Order</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Enter Name" required value={orderDetails.name} onChange={handleChange} />
//           <input type="email" name="email" placeholder="Enter Email" required value={orderDetails.email} onChange={handleChange} />
//           <input type="text" name="address" placeholder="Enter Address" required value={orderDetails.address} onChange={handleChange} />
//           <select name="payment" value={orderDetails.payment} onChange={handleChange} required>
//             <option value="COD">Cash on Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>

//           <button type="submit">Confirm Order</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ConfirmOrder;




// import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// import axios from "axios"; // Import axios for API calls
// import { useCart } from "./stores/context/CartContext";
// import { useAuth } from "./stores/context/AuthContext";
// import "./ConfirmOrder.css";
// import Navbar from "./stores/Components/Navbar";

// const ConfirmOrder = () => {
//   const { cartItems, clearCart } = useCart();
//   const { user } = useAuth();

//   const [orderDetails, setOrderDetails] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     address: "",
//     payment: "COD",
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

//   // Load user data from localStorage if available
//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       setOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         name: loggedInUser.name || "",
//         email: loggedInUser.email || "",
//       }));
//       console.log("User:", loggedInUser.name);
//       console.log("User ID:", loggedInUser.id);
//     }
//   }, []);

//   // Function to send order details to the backend
//   const saveOrderToDatabase = async () => {
//     try {
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const userId = loggedInUser?.id;

//       if (!userId) {
//         alert("User ID is missing. Please log in again.");
//         return false;
//       }

//       if (!cartItems || cartItems.length === 0) {
//         alert("Cart is empty. Add items before placing an order.");
//         return false;
//       }

//       const orderData = {
//         userId: userId,
//         items: cartItems.map((item) => ({
//           productImage: item.image || "No Image Available",
//           model: item.model || "Unknown Model",
//           description: item.description || "No description",
//           price: item.price > 0 ? item.price : 0, // Ensure price is valid
//           paymentMethod: orderDetails.payment || "COD",
//         })),
//       };

//       console.log("Sending Order Data:", orderData); // Debugging log

//       const response = await axios.post(
//         `http://localhost:8080/products/add/${userId}`,
//         orderData
//       );

//       if (response.status === 200) {
//         console.log("Order saved successfully:", response.data);
//         return true;
//       } else {
//         console.error("Failed to save order:", response);
//         alert("Failed to save order.");
//         return false;
//       }
//     } catch (error) {
//       console.error("Error saving order:", error);
//       alert("Error saving order. Please try again.");
//       return false;
//     }
//   };

//   // Function to send confirmation email
//   const sendEmail = async () => {
//     const templateParams = {
//       name: orderDetails.name,
//       email: orderDetails.email,
//       to_email: orderDetails.email,
//       items: cartItems
//         .map((item) => `${item.product} - ${item.model} - ₹${item.price}`)
//         .join("\n"),
//     };

//     try {
//       await emailjs.send(
//         "service_nthywer",
//         "template_2qi8bg5",
//         templateParams,
//         "Is0moPfmi7pFa978w"
//       );
//       alert(`Order confirmation email sent to ${orderDetails.email}!`);
//       clearCart();
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       alert("Failed to send confirmation email.");
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!orderDetails.name || !orderDetails.email || !orderDetails.address) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     const orderSaved = await saveOrderToDatabase();
//     if (orderSaved) {
//       await sendEmail();

//       // Properly reset orderDetails after submission
//       setOrderDetails({
//         name: user?.name || "",
//         email: user?.email || "",
//         address: "",
//         payment: "COD",
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="confirm-order-container">
//         <h1>Confirm Your Order</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             required
//             value={orderDetails.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             required
//             value={orderDetails.email}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter Address"
//             required
//             value={orderDetails.address}
//             onChange={handleChange}
//           />
//           <select
//             name="payment"
//             value={orderDetails.payment}
//             onChange={handleChange}
//             required
//           >
//             <option value="COD">Cash on Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>

//           <button type="submit">Confirm Order</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ConfirmOrder;













// import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// import axios from "axios";
// import { useCart } from "./stores/context/CartContext";
// import { useAuth } from "./stores/context/AuthContext";
// import "./ConfirmOrder.css";
// import Navbar from "./stores/Components/Navbar";
// import Footer from "./stores/Components/Footer";

// const ConfirmOrder = () => {
//   const { cartItems, clearCart } = useCart();
//   const { user } = useAuth();

//   const [orderDetails, setOrderDetails] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     address: "",
//     payment: "COD", // Default to "COD"
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

//   // Load user data from localStorage
//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       setOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         name: loggedInUser.name || "",
//         email: loggedInUser.email || "",
//       }));
//     }
//   }, []);

//   // Ensure no null/undefined values before sending
//   const validateCartItems = (items) => {
//     return items.map((item) => ({
//       productImage: item.image || "No Image Available",
//       model: item.model || "Unknown Model",
//       description: item.description || "No description",
//       price: item.price && item.price > 0 ? item.price : 0, // Ensure valid price
//       paymentMethod: orderDetails.payment || "COD",
//     }));
//   };

//   // Save order to database
//   const saveOrderToDatabase = async () => {
//     try {
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const userId = loggedInUser?.id;

//       if (!userId) {
//         alert("User ID is missing. Please log in again.");
//         return false;
//       }

//       if (!cartItems || cartItems.length === 0) {
//         alert("Cart is empty. Add items before placing an order.");
//         return false;
//       }

//       const validatedItems = validateCartItems(cartItems);
 


//       const orderData = {
//         userId: userId,
//         items: validatedItems,
//       };

//       console.log("✅ Sending Order Data:", JSON.stringify(orderData, null, 2)); // Debug log
//       const response = await axios.post(
//         `http://localhost:8080/products/add/${userId}`,
//         validatedItems // Send only the list of products
//       );
      
//       if (response.status === 200) {
//         console.log("🎉 Order saved successfully:", response.data);
//         return true;
//       } else {
//         console.error("❌ Failed to save order:", response);
//         alert("Failed to save order.");
//         return false;
//       }
//     } catch (error) {
//       console.error("⚠️ Error saving order:", error);
//       alert("Error saving order. Please try again.");
//       return false;
//     }
//   };

  
//   const sendEmail = async () => {
//     const templateParams = {
//       name: orderDetails.name,
//       email: orderDetails.email,
//       to_email: orderDetails.email,
//       items: cartItems
//         .map((item) => `${item.product || "Product"} - ${item.model || "Model"} - ₹${item.price || 0}`)
//         .join("\n"),
//     };

//     try {
//       await emailjs.send(
//         "service_nthywer",
//         "template_2qi8bg5",
//         templateParams,
//         "Is0moPfmi7pFa978w"
//       );
//       alert(`✅ Order confirmation email sent to ${orderDetails.email}!`);
//       clearCart();
//     } catch (error) {
//       console.error("❌ Failed to send email:", error);
//       alert("Failed to send confirmation email.");
//     }
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!orderDetails.name || !orderDetails.email || !orderDetails.address) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     const orderSaved = await saveOrderToDatabase();
//     if (orderSaved) {
//       await sendEmail();
//       setOrderDetails({
//         name: user?.name || "",
//         email: user?.email || "",
//         address: "",
//         payment: "COD",
//       });
//     }
//   };

//   return (
//     <>
//     <div className="page1">
//       <Navbar />
//       <div className="confirm-order-container">
//         <h1>Confirm Your Order</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             required
//             value={orderDetails.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             required
//             value={orderDetails.email}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Enter Address"
//             required
//             value={orderDetails.address}
//             onChange={handleChange}
//           />
//           <select
//             name="payment"
//             value={orderDetails.payment}
//             onChange={handleChange}
//             required
//           >
//             <option value="COD">Cash on Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>

//           <button type="submit">Confirm Order</button>
//         </form>
//       </div>
//       <Footer/>
//       </div>
     
//     </>
//   );
// };

// export default ConfirmOrder;














// import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
// import axios from "axios";
// import { useCart } from "./stores/context/CartContext";
// import { useAuth } from "./stores/context/AuthContext";
// import "./ConfirmOrder.css";
// import Navbar from "./stores/Components/Navbar";
// import Footer from "./stores/Components/Footer";

// const ConfirmOrder = () => {
//   const { cartItems, clearCart } = useCart();
//   const { user } = useAuth();

//   const [orderDetails, setOrderDetails] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     address: "",
//     payment: "COD", // Default to COD
//   });

//   // Load user info from localStorage on component mount
//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if (loggedInUser) {
//       setOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         name: loggedInUser.name || "",
//         email: loggedInUser.email || "",
//       }));
//     }
//   }, []);

//   const handleChange = (e) => {
//     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
//   };

//   const validateCartItems = (items) => {
//     return items.map((item) => ({
//       productImage: item.image || "No Image Available",
//       model: item.model || "Unknown Model",
//       description: item.description || "No description",
//       price: item.price && item.price > 0 ? item.price : 0,
//       paymentMethod: orderDetails.payment || "COD",
//     }));
//   };

//   const saveOrderToDatabase = async () => {
//     try {
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const userId = loggedInUser?.id;

//       if (!userId) {
//         alert("User ID missing. Please log in again.");
//         return false;
//       }

//       if (!cartItems || cartItems.length === 0) {
//         alert("Cart is empty. Add items before placing an order.");
//         return false;
//       }

//       const validatedItems = validateCartItems(cartItems);

//       const response = await axios.post(
//         `http://localhost:8080/products/add/${userId}`,
//         validatedItems
//       );

//       if (response.status === 200) {
//         console.log("🎉 Order saved successfully:", response.data);
//         return true;
//       } else {
//         console.error("❌ Failed to save order:", response);
//         alert("Failed to save order.");
//         return false;
//       }
//     } catch (error) {
//       console.error("⚠️ Error saving order:", error);
//       alert("Error saving order. Please try again.");
//       return false;
//     }
//   };

//   const sendEmail = async () => {
//     const templateParams = {
//       name: orderDetails.name,
//       email: orderDetails.email,
//       to_email: orderDetails.email,
//       items: cartItems
//         .map(
//           (item) =>
//             `${item.product || "Product"} - ${item.model || "Model"} - ₹${item.price || 0}`
//         )
//         .join("\n"),
//     };

//     try {
//       await emailjs.send(
//         "service_nthywer",
//         "template_2qi8bg5",
//         templateParams,
//         "Is0moPfmi7pFa978w"
//       );
//       alert(`✅ Order confirmation email sent to ${orderDetails.email}!`);
//       clearCart();
//     } catch (error) {
//       console.error("❌ Failed to send email:", error);
//       alert("Failed to send confirmation email.");
//     }
//   };

//   const handleOnlinePayment = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const isConfirmed = window.confirm(
//           "Simulate online payment? Click OK for success, Cancel for failure."
//         );
//         if (isConfirmed) {
//           resolve(true);
//         } else {
//           reject(new Error("Payment canceled by user."));
//         }
//       }, 1000);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!orderDetails.name || !orderDetails.email || !orderDetails.address) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     try {
//       if (orderDetails.payment === "Online") {
//         const paymentSuccess = await handleOnlinePayment();
//         if (paymentSuccess) {
//           const orderSaved = await saveOrderToDatabase();
//           if (orderSaved) {
//             await sendEmail();
//             alert("🎉 Order placed successfully with Online Payment!");
//             setOrderDetails({
//               name: user?.name || "",
//               email: user?.email || "",
//               address: "",
//               payment: "COD",
//             });
//           }
//         }
//       } else {
//         const orderSaved = await saveOrderToDatabase();
//         if (orderSaved) {
//           await sendEmail();
//           alert("🎉 Order placed successfully with Cash on Delivery!");
//           setOrderDetails({
//             name: user?.name || "",
//             email: user?.email || "",
//             address: "",
//             payment: "COD",
//           });
//         }
//       }
//     } catch (error) {
//       console.error("❌ Error during order process:", error);
//       alert("Order process failed. Please try again.");
//     }
//   };

//   return (
//     <>
//       <div className="page1">
//         <Navbar />
//         <div className="confirm-order-container">
//           <h1>Confirm Your Order</h1>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               required
//               value={orderDetails.name}
//               onChange={handleChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               required
//               value={orderDetails.email}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Address"
//               required
//               value={orderDetails.address}
//               onChange={handleChange}
//             />
//             <select
//               name="payment"
//               value={orderDetails.payment}
//               onChange={handleChange}
//               required
//             >
//               <option value="COD">Cash on Delivery</option>
//               <option value="Online">Online Payment</option>
//             </select>

//             <button type="submit">Confirm Order</button>
//           </form>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ConfirmOrder;



import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import { useCart } from "./stores/context/CartContext";
import { useAuth } from "./stores/context/AuthContext";
import "./ConfirmOrder.css";
import Navbar from "./stores/Components/Navbar";
import Footer from "./stores/Components/Footer";
import payment from "./payment.png"; 

const ConfirmOrder = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();

  const [orderDetails, setOrderDetails] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: "",
    payment: "COD",
  });

  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setOrderDetails((prev) => ({
        ...prev,
        name: loggedInUser.name || "",
        email: loggedInUser.email || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const validateCartItems = (items) => {
    return items.map((item) => ({
      productImage: item.image || "No Image Available",
      model: item.model || "Unknown Model",
      description: item.description || "No description",
      price: item.price > 0 ? item.price : 0,
      paymentMethod: orderDetails.payment || "COD",
    }));
  };

  const saveOrderToDatabase = async () => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      const userId = loggedInUser?.id;
      if (!userId || !cartItems.length) {
        alert("Please log in and add items to the cart.");
        return false;
      }

      const validatedItems = validateCartItems(cartItems);

      const response = await axios.post(
        `http://localhost:8080/products/add/${userId}`,
        validatedItems
      );

      if (response.status === 200) return true;
      else {
        alert("Failed to save order.");
        return false;
      }
    } catch (err) {
      console.error("Error saving order:", err);
      alert("Error saving order. Please try again.");
      return false;
    }
  };

  const sendEmail = async () => {
    const templateParams = {
      name: orderDetails.name,
      email: orderDetails.email,
      to_email: orderDetails.email,
      items: cartItems
        .map((item) => `${item.product} - ${item.model} - ₹${item.price}`)
        .join("\n"),
    };

    try {
      await emailjs.send(
        "service_nthywer",
        "template_2qi8bg5",
        templateParams,
        "Is0moPfmi7pFa978w"
      );
      alert(`✅ Order confirmation sent to ${orderDetails.email}`);
      clearCart();
    } catch (error) {
      alert("❌ Failed to send email.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!orderDetails.name || !orderDetails.email || !orderDetails.address) {
      alert("Please fill in all fields!");
      return;
    }

    if (orderDetails.payment === "Online" && !isPaymentCompleted) {
      alert("Please complete the UPI payment and click 'Mark as Paid'.");
      return;
    }

    const orderSaved = await saveOrderToDatabase();
    if (orderSaved) {
      await sendEmail();
      setOrderDetails({
        name: user?.name || "",
        email: user?.email || "",
        address: "",
        payment: "COD",
      });
      setIsPaymentCompleted(false);
    }
  };

  return (
    <>
      <div className="page1">
        <Navbar />
        <div className="confirm-order-container">
          <h1>Confirm Your Order</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              required
              value={orderDetails.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              value={orderDetails.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              required
              value={orderDetails.address}
              onChange={handleChange}
            />
            <select
              name="payment"
              value={orderDetails.payment}
              onChange={handleChange}
              required
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Online">UPI Online Payment</option>
            </select>

               {orderDetails.payment === "Online" && (
              <div className="upi-section">
                <h3>Scan to Pay via UPI</h3>
                <img src={payment} alt="UPI QR" className="upi-qr" />
                <p><strong>UPI ID:</strong> bhanu@ybl</p>
                <button
                  type="button"
                  className="mark-paid-btn"
                  onClick={() => {
                    alert("✅ Marked as paid!");
                    setIsPaymentCompleted(true);
                  }}
                >
                  Mark as Paid
                </button>
              </div>
            )}

            <button type="submit">Confirm Order</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ConfirmOrder;
