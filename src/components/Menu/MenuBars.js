import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const TopBarDiv = styled.div`
  flex: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const TopBar = props => {
  const Logo =
    props.logo &&
    (() =>
      React.cloneElement(props.logo, { inBurgerMode: props.inBurgerMode }));
  return (
    // in case I'll want to style it with inline style
    <TopBarDiv {...props}>
      {props.logo && <Logo />}
      {!props.inBurgerMode && props.children}
      <Burger
        isOpen={props.isOpen}
        onClick={props.toggleOpen}
        present={props.inBurgerMode}
      />
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
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin: 1rem;
`;

export const BottomBar = props => {
  return (
    <BottomBarDiv displayed={props.displayed}>
      {props.displayed && !props.inBurgerMode && props.children}
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
