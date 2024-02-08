import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/scrollbar'; // Import Swiper scrollbar styles
import 'swiper/css/effect-cube'; // Import Swiper cube effect styles
import 'swiper/css/autoplay'; // Import Swiper autoplay styles

import '../Styles/Home.css';
import '../Styles/Navbar.css';

const HomeSwiper = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect="cube"
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.image}
            alt={slide.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


const HomePage = () => {
  const petData = [
    // {
    //   id: 1,
    //   name: 'Raamu',
    //   description: 'Cute and playful cat looking for a loving home.',
    //   image: 'https://images.unsplash.com/photo-1568564321589-3e581d074f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
    // },
    {
      id: 2,
      name: 'Gunda',
      description: 'Friendly and loyal dog seeking a forever family.',
      image: 'https://www.shutterstock.com/image-photo/funny-gray-kitten-smiling-dog-600nw-2045705726.jpg',
    },
{image:'https://www.shutterstock.com/image-photo/banner-two-smiling-dogs-happy-600nw-1847221756.jpg'},


  {  image:'https://t4.ftcdn.net/jpg/03/28/88/41/360_F_328884184_zcbmGh4NlFLhrRWj83fTDQsQLYY6bbvQ.jpg'},

 { image:'https://t4.ftcdn.net/jpg/03/17/04/61/240_F_317046136_p8XC7kCPSyelhxe54mbXWJbUI6iMShM7.jpg'},

 { image :'https://t3.ftcdn.net/jpg/03/90/12/30/240_F_390123053_dLdh2YggDNrXYlGP9OgBGfTdIwUKU2Hx.jpg'},

 {image: 'https://t4.ftcdn.net/jpg/03/20/66/69/240_F_320666995_qRnsM2wn3bbeaM8ohLSsxe4gPzYzIrZz.jpg'},

 {image: 'https://t4.ftcdn.net/jpg/06/34/37/87/240_F_634378721_GAIkFVnZQqkKHzTSXqyQ7Vf2xErRFJe6.jpg'}
 
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

      <HomeSwiper slides={petData} />

      <header className="hero-section">
      <div className="hero-content">
       <h1 id= "Title"><span class="pet-icon">🐾</span> Pet Finder 🐾</h1>
       <p>Your Pet Adoption Journey With Pet Finder 🐾</p>
        </div>
      </header>

      <div className="main-content">
        {/* Image with left-side information and right-side details */}
        <div className="left-column">
          <img
            src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
            alt="Pet"
            style={{ width: '50%', height: '50%', objectFit: 'cover' }}
          />
        </div>
        <div className="right-column">
  <h2>Your New Best Friend Awaits</h2>
  <p>Adopting a dog brings unconditional love, joy, and health benefits to your life. Save a life, find a loyal companion, and be a part of the solution. Explore our dogs and discover the happiness that adoption brings!</p>
</div>

      </div>
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

      
      <Link to="/PetAdoptionForm" className="next-page-button">
        Next: Adoption Form
      </Link>
    </div>
  );
};

export default HomePage;