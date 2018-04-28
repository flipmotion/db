// To be used in Header and Footer components

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styling NavLink with styled-components is a bit tricky
// Maybe it can be done more elegant, but
// that's what I came up with so far.
export const MenuItem = ({ to, children }) => {
  const activeClassName = 'active';

  const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    width: 100%;

    &:hover {
      text-decoration: none;
    }

    &.${activeClassName} {
      font-weight: bold;
    }
  `;

  return (
    <StyledNavLink activeClassName={activeClassName} to={to}>
      {children}
    </StyledNavLink>
  );
};

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
`;
