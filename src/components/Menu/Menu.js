import React from 'react';
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
`;

const Menu = props => (
  <Wrapper>
    <TopBar backgroundColor={props.backgroundColor}>
      {/* This passing font color to links gets a bit hairy */}
      {React.Children.map(props.topLinks, el =>
        React.cloneElement(el, {
          color: props.color,
          activeColor: props.activeColor,
          hoverColor: props.hoverColor
        })
      )}
    </TopBar>
    <div>{props.content}</div>
  </Wrapper>
);

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
