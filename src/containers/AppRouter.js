import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import styled from 'styled-components';

import HomePage from '../components/HomePage';
import PortfolioPage from '../components/Portfolio/PortfolioPage';
import Services from '../components/Services';
import Prices from '../components/Prices';
import Page404 from '../components/Page404';
import PortfolioItemContainer from '../containers/PortfolioItemContainer';

const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const transitionDuration = 850;

// To figure out how this monster works, check out
// https://medium.com/@pshrmn/4b73f634992a
export default ({ lang }) => {
  return (
    <Route
      render={({ location }) => (
        <RelativeDiv>
          <TransitionGroup component={null} appear>
            <Transition
              key={location.pathname}
              timeout={{ enter: 0, exit: transitionDuration }}
            >
              {animationStage => (
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <AbsoluteDiv data-name="AbsoluteDiv">
                        <HomePage
                          animationStage={animationStage}
                          lang={lang}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    exact
                    path="/portfolio"
                    render={({ location, history }) => (
                      <AbsoluteDiv>
                        <PortfolioPage
                          animationStage={animationStage}
                          location={location}
                          history={history}
                          lang={lang}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    exact
                    path="/portfolio/:index"
                    render={({ history, match }) => {
                      return (
                        <AbsoluteDiv>
                          <PortfolioItemContainer
                            index={Number(match.params.index)}
                            lang={lang}
                            animationStage={animationStage}
                            history={history}
                            transitionDuration={transitionDuration}
                          />
                        </AbsoluteDiv>
                      );
                    }}
                  />
                  <Route
                    path="/services"
                    render={() => (
                      <AbsoluteDiv>
                        <Services
                          animationStage={animationStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    path="/prices"
                    render={() => (
                      <AbsoluteDiv>
                        <Prices
                          animationStage={animationStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route component={Page404} />
                </Switch>
              )}
            </Transition>
          </TransitionGroup>
        </RelativeDiv>
      )}
    />
  );
};
