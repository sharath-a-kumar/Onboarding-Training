// // React component
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
// import '../Styles/HowToAdopt.css'; // Import the corresponding CSS file

// const HowToAdopt = () => {
//   const [isShown, setIsShown] = useState(true);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     let lastScrollTop = 0;

//     const handleScroll = () => {
//       const st = window.pageYOffset || document.documentElement.scrollTop;

//       if (st > lastScrollTop) {
//         // Scrolling down, show the text
//         setIsShown(true);
//       } else {
//         // Scrolling up, hide the text
//         setIsShown(false);
//       }

//       lastScrollTop = st <= 0 ? 0 : st;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleAdoptClick = () => {
//     navigate('/PetAdoptionForm');
//   };

//   return (
//     <section className={`how-to-adopt ${isShown ? 'show' : ''}`}>
//       <h2>How to Adopt</h2>
//       <p>Adopting a pet from us is easy! Just follow these steps:</p>
//       <ol>
//         <li>Browse through our available pets and discover their unique personalities.</li>
//         <li>Click on the  button for the pet that captures your heart.</li>
//         <li>Fill out the adoption application form with your personal details.</li>
//         <li>Our team will review your application to ensure a suitable match for both you and the pet.</li>
//         <li>If approved, schedule a meet-and-greet to get to know your potential new furry friend.</li>
//         <li>Complete the adoption process and welcome your new pet to their forever home!</li>
//       </ol>

//       <button onClick={handleAdoptClick} className="adopt-now-button">Adopt Now</button>
//     </section>  
//   );
// };

// export default HowToAdopt;