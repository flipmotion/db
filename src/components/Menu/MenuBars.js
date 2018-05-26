import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const TopBarDiv = styled.div`
  flex: none;
  display: flex;
  align-items: center;
`;

const ItemsWrapper = styled.div`
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
      <ItemsWrapper inBurgerMode={props.inBurgerMode}>
        {props.children}
      </ItemsWrapper>
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
  children: PropTypes.node
};

const BottomBarDiv = styled.div`
  flex: none;
  display: ${props => (props.displayed ? 'flex' : 'none')};
  align-items: center;
`;

export const BottomBar = props => {
  // Do not render BottomBar at all if there are no children
  // if (!!React.Children.count(props.links)) return null;
  return (
    <BottomBarDiv displayed={props.displayed}>
      <ItemsWrapper inBurgerMode={props.inBurgerMode}>
        {props.children}
      </ItemsWrapper>
    </BottomBarDiv>
  );
};

const MobileBarDiv = styled.div`
  flex: auto;
  display: ${props => (props.displayed ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

export const MobileBar = props => (
  <MobileBarDiv displayed={props.displayed}>{props.children}</MobileBarDiv>
);
