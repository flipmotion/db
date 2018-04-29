import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { portfolio } from '../modules/content';

import styled from 'styled-components';

import WelcomePage from '../components/WelcomePage';
import PortfolioContainer from './PortfolioContainer';
import Services from '../components/Services';
import Prices from '../components/Prices';
import Page404 from '../components/Page404';

import PortfolioItem from '../components/PortfolioItem';

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
          {animationStage => (
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <AbsoluteDiv>
                    <WelcomePage animationStage={animationStage} />
                  </AbsoluteDiv>
                )}
              />
              <Route
                exact
                path="/portfolio"
                render={() => (
                  <AbsoluteDiv>
                    <PortfolioContainer
                      portfolio={portfolio}
                      animationStage={animationStage}
                    />
                  </AbsoluteDiv>
                )}
              />
              <Route
                exact
                path="/portfolio/:index"
                render={() => (
                  <AbsoluteDiv>
                    <PortfolioItem
                      portfolio={portfolio}
                      animationStage={animationStage}
                    />
                  </AbsoluteDiv>
                )}
              />
              <Route
                path="/services"
                render={() => (
                  <AbsoluteDiv>
                    <Services animationStage={animationStage} />
                  </AbsoluteDiv>
                )}
              />
              <Route
                path="/prices"
                render={() => (
                  <AbsoluteDiv>
                    <Prices animationStage={animationStage} />
                  </AbsoluteDiv>
                )}
              />
              <Route component={Page404} />
            </Switch>
          )}
        </Transition>
      </TransitionGroup>
    )}
  />
);
