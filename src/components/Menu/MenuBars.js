import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const BottomBarDiv = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  flex-wrap: ${props => (props.inBurgerMode ? 'wrap' : 'nowrap')};
  height: ${props => (props.isOpen ? '100vh' : '3rem')};
  /* position: sticky; */
  /* top: 0px; */
  /* align-items: center; */
`;

const TopBarDiv = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  flex-wrap: ${props => (props.inBurgerMode ? 'wrap' : 'nowrap')};
  height: ${props => (props.isOpen ? '100vh' : '3rem')};
  /* position: sticky; */
  /* top: 0px; */
  /* align-items: center; */
`;

const BurgerWrapper = styled.div`
  flex: none;
  display: flex;
  width: ${props => (props.inBurgerMode ? '33%' : 'auto')};
  padding: 0.5rem;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  flex: ${props => (props.inBurgerMode ? 'auto' : 'none')};
  display: flex;
  justify-content: center;
  width: ${props => (props.inBurgerMode ? '34%' : 'auto')};
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 1.25rem;
`;

const IconWrapper = styled.div`
  flex: ${props => (props.inBurgerMode ? 'auto' : 'none')};
  display: flex;
  justify-content: flex-end;
  width: ${props => (props.inBurgerMode ? '33%' : 'auto')};
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 1.25rem;
`;

const Items = styled.div`
  flex: auto;
  justify-content: ${props =>
    props.inBurgerMode ? 'flex-start' : 'space-evenly'};
  align-items: center;
  display: ${props =>
    !props.inBurgerMode || (props.inBurgerMode && props.isOpen)
      ? 'flex'
      : 'none'};
  order: ${props => (props.inBurgerMode ? 10 : 0)};
  flex-direction: ${props => (props.inBurgerMode ? 'column' : 'row')};
  width: ${props => (props.inBurgerMode ? '100%' : 'auto')};
  height: ${props => (props.isOpen ? 'calc(100vh - 3rem)' : 'auto')};
  overflow-y: auto;
`;

export const TopBar = props => {
  // Do not render TopBar at all if there are no children
  if (React.Children.count(props.links) === 0) return null;
  return (
    <TopBarDiv inBurgerMode={props.inBurgerMode}>
      <BurgerWrapper inBurgerMode={props.inBurgerMode}>
        <Burger
          isOpen={props.isOpen}
          onClick={props.toggleOpen}
          present={props.inBurgerMode}
        />
      </BurgerWrapper>
      <LogoWrapper inBurgerMode={props.inBurgerMode}>{props.logo}</LogoWrapper>
      <Items inBurgerMode={props.inBurgerMode} isOpen={props.isOpen}>
        {props.links}
      </Items>
      <IconWrapper inBurgerMode={props.inBurgerMode}>{props.icon}</IconWrapper>
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
  if (React.Children.count(props.links) === 0) return null;
  return (
    <BottomBarDiv inBurgerMode={props.inBurgerMode}>
      <Items inBurgerMode={props.inBurgerMode} isOpen={props.isOpen}>
        {props.links}
      </Items>
    </BottomBarDiv>
  );
};
