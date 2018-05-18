import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// This a NavLink with some styling without using classes thanks to
// styled-components
const MenuItem = props => {
  const activeClassName = 'MenuItem_active';

  const StyledNavLink = styled(
    // https://github.com/styled-components/styled-components/issues/305
    ({ color, activeColor, hoverColor, ...rest }) => <NavLink {...rest} />
  ).attrs({ activeClassName })`
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
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
