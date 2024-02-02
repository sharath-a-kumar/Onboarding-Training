// Components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import '../Styles/Navbar.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Login">Log Out</Link></li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>Delicious Pizza</h1>
        <p>Order now and experience the best pizza in town!</p>
      </header>

      <section className="featured-pizzas">
        <h2>Featured Pizzas</h2>
        <div className="pizza-list">
        
          <div className="pizza-card">
            <img src="https://th.bing.com/th/id/OIP.ufLVcdn8Z179llbMJ7AeZAHaLH?w=600&h=900&rs=1&pid=ImgDetMain" alt="Pizza 1" />
            <h3>Margherita</h3>
            <p>Classic tomato sauce, fresh mozzarella, basil</p>
          </div>

          <div className="pizza-card">
            <img src="https://lilluna.com/wp-content/uploads/2020/12/margherita-pizza-resize-3.jpg" alt="Pizza 2" />
            <h3>Pepperoni</h3>
            <p>Tomato sauce, pepperoni, mozzarella, and herbs</p>
          </div>

          {/* Add more featured pizzas as needed */}
        </div>
      </section>

      <section className="how-to-order">
        <h2>How to Order</h2>
        <p>Ordering our delicious pizzas is easy! Just follow these steps:</p>
        <ol>
          <li>Choose your favorite pizza from our menu.</li>
          <li>Click on the "Order Now" button.</li>
          <li>Customize your order with additional toppings or special instructions.</li>
          <li>Complete the checkout process.</li>
          <li>Wait for your freshly baked pizza to be delivered to your doorstep!</li>
        </ol>
      </section>

      {/* Add more sections or components as needed */}
    </div>
  );
};

export default HomePage;
