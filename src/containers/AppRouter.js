import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { portfolio } from '../modules/content';

import styled from 'styled-components';

import HomePage from '../components/HomePage';
import PortfolioContainer from './PortfolioContainer';
import Services from '../components/Services';
import Prices from '../components/Prices';
import Page404 from '../components/Page404';

import PortfolioItem from '../components/PortfolioItem';

import { homePage } from '../modules/content';

const AbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const animationDuration = 850;

export default () => (
  <Route
    render={({ location }) => (
      <TransitionGroup component={null} appear>
        <Transition
          key={location.pathname}
          timeout={{ enter: 0, exit: animationDuration }}
        >
          {animationStage => (
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <AbsoluteDiv>
                    <HomePage
                      animationStage={animationStage}
                      header={homePage.header.ru}
                      paragraphText={homePage.paragraphText.ru}
                      linkText={homePage.link.text.ru}
                      linkPath={homePage.link.path}
                      imageSrc={homePage.media[0].src}
                      imageAlt={homePage.media[0].alt}
                    />
                  </AbsoluteDiv>
                )}
              />
              <Route
                exact
                path="/portfolio"
                render={({ location, history }) => (
                  <AbsoluteDiv>
                    <PortfolioContainer
                      portfolio={portfolio}
                      animationStage={animationStage}
                      location={location}
                      history={history}
                    />
                  </AbsoluteDiv>
                )}
              />
              <Route
                exact
                path="/portfolio/:index"
                render={({ history, match }) => (
                  <AbsoluteDiv>
                    <PortfolioItem
                      portfolioItem={
                        portfolio[parseInt(match.params.index, 10)]
                      }
                      animationStage={animationStage}
                      history={history}
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
