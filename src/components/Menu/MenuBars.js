import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const BottomBarDiv = styled.div`
  flex: none;
  display: ${props => (props.displayed ? 'flex' : 'none')};
  align-items: center;
`;

const TopBarDiv = styled.div`
  flex: none;
  display: flex;
  align-items: center;
`;

const Items = styled.div`
  justify-content: space-evenly;
  /* align-items: center; */
  display: ${props => (props.inBurgerMode ? 'none' : 'flex')};
  width: 100%;
`;

export const TopBar = props => {
  return (
    <TopBarDiv>
      <Burger
        isOpen={props.isOpen}
        onClick={props.toggleOpen}
        present={props.inBurgerMode}
      />
      {/* <LogoWrapper inBurgerMode={props.inBurgerMode}>{props.logo}</LogoWrapper> */}
      <Items inBurgerMode={props.inBurgerMode} isOpen={props.isOpen}>
        {props.links}
      </Items>
      {/* <IconWrapper inBurgerMode={props.inBurgerMode}>{props.icon}</IconWrapper> */}
    </TopBarDiv>
  );
};

TopBar.propTypes = {
  inBurgerMode: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  logo: PropTypes.node,
  icon: PropTypes.node,
  links: PropTypes.node
};

export const BottomBar = props => {
  // Do not render BottomBar at all if there are no children
  // if (!!React.Children.count(props.links)) return null;
  return (
    <BottomBarDiv inBurgerMode={props.inBurgerMode}>
      <Items inBurgerMode={props.inBurgerMode} isOpen={props.isOpen}>
        {props.links}
      </Items>
    </BottomBarDiv>
  );
};

const MobileBarDiv = styled.div`
  flex: none;
  display: ${props => (props.displayed ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
`;

export const MobileBar = props => (
  <MobileBarDiv displayed={props.displayed}>{props.children}</MobileBarDiv>
);
