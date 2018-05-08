// To be used in Header and Footer components

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

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
    color: rgb(230, 230, 230);
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

const MenuWithoutBurger = styled.div.attrs({
  children: props => ({ children: <p>Hi</p> })
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  color: white;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
`;

export class Menu extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    return (
      <MenuWithoutBurger isOpen={this.state.isOpen} mobile={this.props.mobile}>
        {this.props.mobile ? (
          <Burger onClick={this.handleBurgerClick} isOpen={this.state.isOpen} />
        ) : null}
        {this.state.isOpen || !this.props.mobile ? this.props.children : null}
      </MenuWithoutBurger>
    );
  }
}
