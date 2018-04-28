import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { portfolio } from '../modules/content';

import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

import WelcomePage from './WelcomePage';
import PortfolioPage from './PortfolioPage';
import Services from './Services';
import Prices from './Prices';

const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default () => (
  <Route
    render={({ location }) => (
      <TransitionGroup component={null} appear>
        <Transition key={location.pathname} timeout={{ enter: 0, exit: 800 }}>
          {animationState => (
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <AbsoluteDiv>
                    <WelcomePage animationState={animationState} />
                  </AbsoluteDiv>
                )}
              />
              <Route
                path="/portfolio"
                render={() => (
                  <AbsoluteDiv>
                    <PortfolioPage
                      portfolio={portfolio}
                      animationState={animationState}
                    />
                  </AbsoluteDiv>
                )}
              />
              <Route
                path="/services"
                render={() => (
                  <AbsoluteDiv>
                    <Services animationState={animationState} />
                  </AbsoluteDiv>
                )}
              />
              <Route
                path="/prices"
                render={() => (
                  <AbsoluteDiv>
                    <Prices animationState={animationState} />
                  </AbsoluteDiv>
                )}
              />
            </Switch>
          )}
        </Transition>
      </TransitionGroup>
    )}
  />
);
