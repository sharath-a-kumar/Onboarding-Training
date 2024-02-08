import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer.js';
import About from './Components/About.js';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import AdoptablePetsPage from './Components/AdoptablePetsPage.js'
import PetAdoptionForm from './Components/PetAdoptionForm.js'
function App() {
  return (
    <Router>
      
      <div  className="app">

{/*<Header />
        <Navigation /> */}

        <main className="main-content">

          <Routes>
          <Route path= "/" element = {<Home />} />
            <Route path= "/Login" element = {<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/AdoptablePetsPage" element={<AdoptablePetsPage />} />
            <Route path="/PetAdoptionForm" element={<PetAdoptionForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
