// To be used in Header and Footer components

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styling NavLink with styled-components is a bit tricky
// Maybe it can be done more elegant, but
// that's what I came up with so far.
export const MenuItem = props => {
  const activeClassName = 'active';

  const StyledNavLink = styled(NavLink).attrs({
    activeClassName: activeClassName
  })`
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    color: rgb(200, 200, 200);
    transition: color 0.5s;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: rgb(240, 240, 240);
      transition: color 0.5s;
    }

    &.${activeClassName} {
      font-weight: bold;
      color: rgb(240, 240, 240);
      cursor: default;
    }
  `;

  return <StyledNavLink activeClassName={activeClassName} {...props} />;
};

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  color: white;
`;
