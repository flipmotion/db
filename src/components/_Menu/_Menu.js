// To be used in Header and Footer components

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

export const Menu = styled.div.attrs({
  children: props => ({ children: <p>Hi</p> })
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  color: white;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
`;

export class BurgerMenu extends Component {
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
      <Menu isOpen={this.state.isOpen} mobile={this.props.mobile}>
        {this.props.mobile ? (
          <Burger
            onClick={this.handleBurgerClick}
            isOpen={this.state.isOpen}
            style={{ alignSelf: 'flex-end', margin: '0.5em' }}
          />
        ) : null}
        {this.props.children}
      </Menu>
    );
  }
}
