import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { portfolio } from './modules/content';

import styled, { injectGlobal } from 'styled-components';

import 'bootstrap/dist/css/bootstrap-reboot.css';

import Header from './components/Header';
import Footer from './components/Footer';

import WelcomePage from './components/WelcomePage';
import PortfolioPage from './components/PortfolioPage';
import Services from './components/Services';
import Prices from './components/Prices';

const SiteContainer = styled.div`
  display: flex;
  background-color: #222;
  color: white;
  flex-direction: column;
  height: 100vh;
`;

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    position: fixed;
    height: 100vh;
    width: 100vw;
  }
`;

const HeaderArea = styled.div`
  flex: none;
  display: flex;
`;

const MainArea = styled.div`
  display: flex;

  /* flex: 1 1 auto => flex: 1 1 0 and height: 0, see
  https://github.com/philipwalton/flexbugs/issues/197#issuecomment-378908438 */
  flex: auto;
  /* height: 0; */

  /* otherwise min sizes are content dimensions */
  /* https://github.com/philipwalton/flexbugs#flexbug-1 */
  min-height: 0;
  min-width: 0;
  position: relative;
`;

const FooterArea = styled.div`
  flex: none;
  display: flex;
`;

const App = () => (
  <Router>
    <SiteContainer>
      <HeaderArea>
        <Header />
      </HeaderArea>
      <MainArea>
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
                      render={() => (
                        <PortfolioPage
                          portfolio={portfolio}
                          animationState={animationState}
                        />
                      )}
                    />
                    <Route
                      path="/services"
                      render={() => (
                        <Services animationState={animationState} />
                      )}
                    />
                    <Route
                      path="/prices"
                      render={() => <Prices animationState={animationState} />}
                    />
                  </Switch>
                )}
              </Transition>
            </TransitionGroup>
          )}
        />
      </MainArea>
      <FooterArea>
        <Footer />
      </FooterArea>
    </SiteContainer>
  </Router>
);

export default App;
