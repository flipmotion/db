import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import Burger from './Burger';

// Styling NavLink with styled-components is a bit tricky
// Maybe it can be done more elegant, but
// that's what I came up with so far.
const MenuItem = props => {
  const activeClassName = 'MenuItem_active';

  const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    color: ${props => props.color || 'grey'};
    transition: color 0.5s;
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: ${props => props.hoverColor || 'darkgrey'};
      transition: color 0.5s;
    }

    &.${activeClassName} {
      font-weight: bold;
      color: ${props => props.activeColor || 'black'};
      cursor: default;
    }
  `;

  return <StyledNavLink activeClassName={activeClassName} {...props} />;
};

export default MenuItem;
