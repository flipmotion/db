import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const TopBarDiv = styled.div`
  flex: none;
  display: flex;
`;

const ItemsWrapper = styled.div`
  justify-content: space-evenly;
  /* align-items: center; */
  display: ${props => (props.displayed ? 'none' : 'flex')};
  width: 100%;
`;

export const TopBar = props => {
  //
  const Logo =
    props.logo &&
    (() =>
      React.cloneElement(props.logo, { inBurgerMode: props.inBurgerMode }));
  return (
    // in case I'll want to style it with inline style
    <TopBarDiv style={props.style}>
      <Burger
        isOpen={props.isOpen}
        onClick={props.toggleOpen}
        present={props.inBurgerMode}
      />
      {props.logo && <Logo />}
      <ItemsWrapper displayed={props.inBurgerMode}>
        {props.children}
      </ItemsWrapper>
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
  return (
    <BottomBarDiv displayed={props.displayed}>
      <ItemsWrapper displayed={props.inBurgerMode}>
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
