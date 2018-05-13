import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import MenuItem from './MenuItem';
import Burger from './Burger';
import Wrapper from './Wrapper';
import Bar from './Bar';
import OverflowDetector from './OverflowDetector';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${props => (props.isOverflowed ? 'column' : 'row')};
  min-height: ${props => (props.isOverflowed ? '100vh' : 'auto')};
  width: 100%;
  text-align: center;
  transform: translateY(
    ${props => (props.mobile && !props.isOpen ? '100vh' : '0vh')}
  );
  transition: transform 0.85s;
`;

// Just to align menu items in the center
const InvisibleBurger = props => <Burger {...props} visible={false} />;

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
          <InvisibleBurger />
          <Items
            isOverflowed={this.state.isOverflowed}
            isOpen={this.state.isOpen}
          >
            {styledTopLinks}
          </Items>
          <Burger isOpen={this.state.isOpen} onClick={this.toggleOpen} />
        </Bar>
        <div>{this.props.content}</div>
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
