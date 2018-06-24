import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import styled from 'styled-components';

import HomePage from '../components/HomePage';
import PortfolioPage from '../components/Portfolio/PortfolioPage';
import ServicesContainer from '../containers/ServicesContainer';
import Calc from '../components/Calc';
import Page404 from '../components/Page404';
import PortfolioItemContainer from '../containers/PortfolioItemContainer';
import Contacts from '../components/Contacts';
import About from '../components/About';

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
function AppRouter({ lang }) {
  return (
    <Route
      render={({ location }) => (
        <RelativeDiv>
          <TransitionGroup component={null} appear>
            <Transition
              key={location.pathname}
              timeout={{ enter: 0, exit: transitionDuration }}
              mountOnEnter={true}
              unmountOnExit={true}
            >
              {transitionStage => (
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <AbsoluteDiv>
                        <HomePage
                          transitionStage={transitionStage}
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
                          transitionStage={transitionStage}
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
                            transitionStage={transitionStage}
                            history={history}
                            transitionDuration={transitionDuration}
                          />
                        </AbsoluteDiv>
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/services"
                    render={() => <Redirect to="/services/0" />}
                  />
                  <Route
                    exact
                    path="/services/:index"
                    render={({ match }) => {
                      return (
                        <AbsoluteDiv>
                          <ServicesContainer
                            current={Number(match.params.index)}
                            lang={lang}
                            transitionStage={transitionStage}
                            transitionDuration={transitionDuration}
                          />
                        </AbsoluteDiv>
                      );
                    }}
                  />
                  <Route
                    path="/calc"
                    render={() => (
                      <AbsoluteDiv>
                        <Calc
                          lang={lang}
                          transitionStage={transitionStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    path="/contacts"
                    render={() => (
                      <AbsoluteDiv>
                        <Contacts
                          lang={lang}
                          transitionStage={transitionStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    path="/about"
                    render={() => (
                      <AbsoluteDiv>
                        <About
                          lang={lang}
                          transitionStage={transitionStage}
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
}

export default AppRouter;
