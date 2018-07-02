import React from 'react';
import styled, { css } from 'styled-components';
import { Vertical } from '../common';
import contentIn from './content';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import uuid from 'uuid';
import Page404 from '../Page404';

const interfaceText = {
  'clients about us': {
    ru: 'Клиенты о нас',
    en: 'Clients about us'
  }
};

const activeClassName = uuid();
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: block;
  padding-bottom: 1em;
  text-decoration: none;
  transition: padding 0.85s ease-out;
  padding-right: 2em;

  &.${activeClassName} {
    padding-left: 2em;
  }
`;

function interfaceIn(lang) {
  return phraseId => interfaceText[phraseId][lang];
}

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const MediaArea = styled.div`
  height: 100%;
`;

const NavArea = styled.div`
  width: 40em;
  align-self: center;
`;

const QuotesArea = styled(Vertical)`
  align-self: center;
  height: auto;
`;

const Portrait = styled.img`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  object-fit: cover;
`;

const Quote = styled.blockquote`
  font-style: italic;
`;

const arrowsStyle = css`
  font-size: 2em;
  padding: 0.5em;
  display: inline;
  text-decoration: none;
  margin-right: 0.5em;
  background: rgb(245, 245, 245);
  color: black;
`;

const NavLeft = styled(props => <Link {...props}>❮</Link>)`
  ${arrowsStyle};
`;

const NavRight = styled(props => <Link {...props}>❯</Link>)`
  ${arrowsStyle};
`;

function Feedback({ lang }) {
  const cases = contentIn(lang);
  return (
    <Router>
      <React.Fragment>
        <NavArea>
          <h1>{interfaceIn(lang)('clients about us')}</h1>
          {cases.map((c, i) => (
            // why c.path here doesn't work?!
            <StyledNavLink key={c.path} to={`/feedback/${c.path}`}>
              {c.title}
            </StyledNavLink>
          ))}
        </NavArea>
        <Switch>
          {/* TODO: redirection DOESN'T work */}
          {cases[0] && (
            <Redirect
              exact
              from="/feedback"
              to={'/feedback/' + cases[0].path}
            />
          )}
          {cases.map((c, i) => {
            const last = i === cases.length - 1;
            const first = i === 0;
            const nextIndex = last ? 0 : i + 1;
            const prevIndex = first ? cases.length - 1 : i - 1;

            return (
              <Route
                exact
                key={c.path}
                path={'/feedback/' + c.path}
                render={() => (
                  <React.Fragment>
                    <MediaArea>
                      <Image src={c.media[0]} alt={c.title} />
                    </MediaArea>
                    <QuotesArea>
                      <Portrait src={c.reviewerPortrait} />
                      <Quote>{c.review}</Quote>
                      <p>{c.reviewerName}</p>
                      <p>
                        <NavLeft to={'/feedback/' + cases[prevIndex].path} />
                        <NavRight to={'/feedback/' + cases[nextIndex].path} />
                      </p>
                    </QuotesArea>
                  </React.Fragment>
                )}
              />
            );
          })}
          {/* TODO: 404 should cover nav on the left as well.
        Currently it COULD work for media + text area. But doesn't work at all */}
          <Route component={Page404} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default Feedback;
