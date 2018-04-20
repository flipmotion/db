import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import PropTypes from 'prop-types'

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="DBSite">
      <div className="DBSite-Header">
        <Header />
      </div>
      <div className="DBSite-Body">
        <p>123</p>
      </div>
      <div className="DBSite-Footer">
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
