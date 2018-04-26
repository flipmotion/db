import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { portfolio } from './modules/content';

import 'bootstrap/dist/css/bootstrap-reboot.css';
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
        <Route
          render={({ location }) => (
            <TransitionGroup component={null} appear>
              <Transition
                key={location.pathname}
                timeout={{ enter: 0, exit: 800 }}
              >
                {animationState => (
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <WelcomePage animationState={animationState} />
                      )}
                    />
                    <Route
                      path="/portfolio"
                      render={() => <PortfolioPage portfolio={portfolio} />}
                    />
                    <Route path="/services" render={() => <p>services</p>} />
                    <Route path="/prices" render={() => <p>prices</p>} />
                  </Switch>
                )}
              </Transition>
            </TransitionGroup>
          )}
        />
      </div>
      <div className="DBSite-Footer">
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
