// Components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import '../Styles/Navbar.css';

const HomePage = () => {
  const petData = [
    {
      id: 1,
      name: 'Raamu',
      description: 'Cute and playful cat looking for a loving home.',
      image: 'https://images.unsplash.com/photo-1568564321589-3e581d074f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    },
    {
      id: 2,
      name: 'Gunda',
      description: 'Friendly and loyal dog seeking a forever family.',
      image: 'https://images.unsplash.com/photo-1543554618-7e19c5e393d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8g',
    },
  ];

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Login">Log Out</Link></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Pet Finder</h1>
          <p>Discover your new best friend and provide a loving forever home!</p>
        </div>
      </header>

      <section className="featured-pets">
        <h2>Featured Pets</h2>
        <div className="pet-list">
          {petData.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} width="300" height="200" />
              <div className="card-details">
                <h3>{pet.name}</h3>
                <p>{pet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="how-to-adopt">
        <h2>How to Adopt</h2>
        <p>Adopting a pet from us is easy! Just follow these steps:</p>
        <ol>
          <li>Browse through our available pets and discover their unique personalities.</li>
          <li>Click on the "Adopt Now" button for the pet that captures your heart.</li>
          <li>Fill out the adoption application form with your personal details.</li>
          <li>Our team will review your application to ensure a suitable match for both you and the pet.</li>
          <li>If approved, schedule a meet-and-greet to get to know your potential new furry friend.</li>
          <li>Complete the adoption process and welcome your new pet to their forever home!</li>
        </ol>
      </section>

      {/* Button to route to the next page */}
      <Link to="/PetAdoptionForm" className="next-page-button">
        Next: Adoption Form
      </Link>
    </div>
  );
};

export default HomePage;
