import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import MenuItem from './MenuItem';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const TopBar = styled.div`
  background-color: ${props => props.backgroundColor || 'palegreen'};
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  height: ${props => (props.mobile ? '100%' : 'auto')};
  text-align: center;
`;

class Menu extends Component {
  constructor() {
    super();
    this.menuRef = React.createRef();
    this.state = { is_overflowed: false, is_open: false };
    this.updateOverflowState = this.updateOverflowState.bind(this);
  }

  updateOverflowState() {
    const is_overflowed =
      this.menuRef.current &&
      this.menuRef.current.scrollWidth > this.menuRef.current.clientWidth;
    if (is_overflowed) {
      this.setState({ is_overflowed: true });
    } else {
      this.setState({ is_overflowed: false });
    }
  }

  componentDidMount() {
    this.updateOverflowState();
    window.addEventListener('resize', this.updateOverflowState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateOverflowState);
  }

  render() {
    return (
      <Wrapper>
        <TopBar
          backgroundColor={this.props.backgroundColor}
          innerRef={this.menuRef}
          mobile={this.state.is_overflowed}
        >
          {React.Children.map(this.props.topLinks, el =>
            React.cloneElement(el, {
              color: this.props.color,
              activeColor: this.props.activeColor,
              hoverColor: this.props.hoverColor
            })
          )}
        </TopBar>
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
