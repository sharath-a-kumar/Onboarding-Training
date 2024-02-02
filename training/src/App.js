import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Navigation from './Components/Navigation.js';

import About from './Components/About.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />

        <main className="main-content">
          <Switch>
           
            <Route path="/about" component={About} />
          </Switch>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
