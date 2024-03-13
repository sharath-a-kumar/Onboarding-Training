// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Components/About';
import Login from './Components/Login';
import Home from './Components/Home';
import AdoptablePetsPage from './Components/AdoptablePetsPage';
import PetAdoptionForm from './Components/PetAdoptionForm';
import HowToAdopt from './Components/HowToAdopt';
import Donate from './Components/Donate ';
import ContactUs from './Components/pages/contact';
import EventsPage from './Components/pages/EventsPage.js'

function App() {
  return (
    <Router>
      <div className="app">
  
        <main className="main-content">
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/AdoptablePetsPage" element={<AdoptablePetsPage />} />
            <Route path="/PetAdoptionForm" element={<PetAdoptionForm />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
   
        </main>
        <Footer />
      
      </div>
    </Router>
  );
}

// Function component to conditionally render HowToAdopt on the home page
const HomePageHowToAdopt = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return isHomePage ? <HowToAdopt /> : null;
};

export default App;