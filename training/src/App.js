import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Navigation from './Components/Navigation.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />

      <main className="main-content">
        {/* <Home /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
