import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const TopBarDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${props => (props.inBurgerMode ? 'wrap' : 'nowrap')};
  /* position: sticky; */
  /* top: 0px; */
  /* align-items: center; */
`;

const BurgerWrapper = styled.div`
  flex: none;
  display: flex;
  width: ${props => (props.inBurgerMode ? '33%' : 'auto')};
`;

const LogoWrapper = styled.div`
  flex: ${props => (props.inBurgerMode ? 'auto' : 'none')};
  display: flex;
  justify-content: center;
  width: ${props => (props.inBurgerMode ? '34%' : 'auto')};
`;

const IconWrapper = styled.div`
  flex: ${props => (props.inBurgerMode ? 'auto' : 'none')};
  display: flex;
  justify-content: flex-end;
  width: ${props => (props.inBurgerMode ? '33%' : 'auto')};
`;

const Items = styled.div`
  flex: auto;
  background-color: blue;
  justify-content: space-evenly;
  display: ${props =>
    !props.inBurgerMode || (props.inBurgerMode && props.isOpen)
      ? 'flex'
      : 'none'};
  order: ${props => (props.inBurgerMode ? 10 : 0)};
  flex-direction: ${props => (props.inBurgerMode ? 'column' : 'row')};
  width: ${props => (props.inBurgerMode ? '100%' : 'auto')};
`;

const TopBar = props => {
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

export default TopBar;
