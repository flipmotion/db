import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import styled from 'styled-components';

import HomePage from '../components/HomePage';
import PortfolioPage from '../components/Portfolio/PortfolioPage';
import Services from '../components/Services';
import Calc from '../components/Calc';
import Page404 from '../components/Page404';
import PortfolioItemContainer from '../containers/PortfolioItemContainer';
import Contacts from '../components/Contacts';
import Policy from '../components/Policy';
import Feedback from '../components/Feedback';

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
                    path="/services"
                    render={() => (
                      <Services
                        lang={lang}
                        transitionStage={transitionStage}
                        transitionDuration={transitionDuration}
                      />
                    )}
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
                    path="/policy"
                    render={() => (
                      <AbsoluteDiv>
                        <Policy
                          lang={lang}
                          transitionStage={transitionStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    path="/feedback"
                    render={() => (
                      <AbsoluteDiv>
                        <Feedback
                          lang={lang}
                          transitionStage={transitionStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
                  <Route
                    render={() => (
                      <AbsoluteDiv>
                        <Page404
                          lang={lang}
                          transitionStage={transitionStage}
                          transitionDuration={transitionDuration}
                        />
                      </AbsoluteDiv>
                    )}
                  />
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
