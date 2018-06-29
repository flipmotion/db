import React from 'react';
import styled from 'styled-components';
import { Vertical } from '../common';
import contentIn from './content';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import uuid from 'uuid';

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

  &.${activeClassName} {
    padding-left: 2em;
  }
`;

function interfaceIn(lang) {
  return phraseId => interfaceText[phraseId][lang];
}

function Feedback({ lang }) {
  const cases = contentIn(lang);
  return (
    <Router>
      <div>
        <h1>{interfaceIn(lang)('clients about us')}</h1>
        {cases.map(c => (
          <StyledNavLink key={c.path} to={`/feedback/${c.path}`}>
            {c.title}
          </StyledNavLink>
        ))}
      </div>
    </Router>
  );
}

export default Feedback;
