import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PropTypes from 'prop-types'

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import WelcomePage from './components/WelcomePage';

const App = () => (
  <Router>
    <div className="DBSite">
      <div className="DBSite-Header">
        <Header />
      </div>
      <div className="DBSite-Body">
        <Route exact path="/" component={WelcomePage} />
        <Route path="/portfolio" render={() => <p>portfolio</p>} />
        <Route path="/services" render={() => <p>services</p>} />
        <Route path="/prices" render={() => <p>prices</p>} />
      </div>
      <div className="DBSite-Footer">
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
