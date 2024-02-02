import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Navigation from './Components/Navigation.js';
import About from './Components/About.js';
import Login from './Components/Login.js';
import Home from './Components/Home.js';

function App() {
  return (
    <Router>
      
      <div  className="app">

{/*<Header />
        <Navigation /> */}

        <main className="main-content">

          <Routes>
            <Route path= "/Login" element = {<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
