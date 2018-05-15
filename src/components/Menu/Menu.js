import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import MenuItem from './MenuItem';
import Burger, { InvisibleBurger } from './Burger';
import Wrapper from './Wrapper';
import Bar from './Bar';
import OverflowDetector from './OverflowDetector';
import Items from './Items';
import Content from './Content';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const Logo = styled.img`
  height: 3rem;
  width: 50%;
  flex: none;
`;

class Menu extends Component {
  constructor() {
    super();
    this.overflowDetectorRef = React.createRef();
    this.state = {
      isOverflowed: false,
      isOpen: false
    };
    this.onOverflowChange = this.onOverflowChange.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  onOverflowChange(overflowState) {
    this.setState(overflowState);
  }

  render() {
    const styledTopLinks = React.Children.map(this.props.topLinks, el =>
      React.cloneElement(el, {
        color: this.props.color,
        activeColor: this.props.activeColor,
        hoverColor: this.props.hoverColor
      })
    );
    return (
      <Wrapper>
        <OverflowDetector
          onOverflowChange={this.onOverflowChange}
          topLinks={styledTopLinks}
        />
        <Bar
          backgroundColor={this.props.backgroundColor}
          innerRef={this.overflowDetectorRef}
        >
          <Burger
            isOpen={this.state.isOpen}
            onClick={this.toggleOpen}
            absent={!this.state.isOverflowed}
          />
          {this.props.logo && <Logo src={this.props.logo} />}
          <Items
            isOverflowed={this.state.isOverflowed}
            isOpen={this.state.isOpen}
          >
            {styledTopLinks}
          </Items>
        </Bar>
        <Content>{this.props.content}</Content>
      </Wrapper>
    );
  }
}

Menu.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  // logo: propTypes.instanceOf(Image),
  topLinks: PropTypes.arrayOf(PropTypes.instanceOf(MenuItem)),
  bottomLinks: PropTypes.arrayOf(PropTypes.instanceOf(MenuItem)),
  // icons: PropTypes.arrayOf(PropTypes.instanceOf(SocialIcon)),
  content: PropTypes.element
};

export default Menu;
