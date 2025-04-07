import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useAuth } from "./stores/context/AuthContext";
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';
import "./Orders.css";
import Footer from "./Footer";

const Orders = () => {
  const { user } = useCart();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (!loggedInUser?.id) {
          alert("User not logged in");
          return;
        }
        const response = await axios.get(
          `http://localhost:8080/products/user/${loggedInUser.id}`
        );
        
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
    <div className="body">
      <Navbar />
      <div className="order-container">
        <h1>Your Orders</h1>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="order-list">
            {orders.map((order, index) => (
              <div key={index} className="order-card">
                <img src={order.productImage} alt={order.model} />
                <div className="order-details">
                  <h2>{order.model}</h2>
                  <p>{order.description}</p>
                  <p><strong>Price:</strong> ₹{order.price}</p>
                  <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
      </div>
      
    </>
  );
};

export default Orders;
