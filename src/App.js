import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { portfolio } from './modules/content';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import WelcomePage from './components/WelcomePage';
import PortfolioPage from './components/PortfolioPage';

const App = () => (
  <Router>
    <div className="DBSite">
      <div className="DBSite-Header">
        <Header />
      </div>
      <div className="DBSite-Body">
        <Route exact path="/" component={WelcomePage} />
        <Route
          path="/portfolio"
          render={() => <PortfolioPage portfolio={portfolio} />}
        />
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
