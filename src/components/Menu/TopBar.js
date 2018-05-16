import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Burger from './Burger';

const TopBarDiv = styled.div`
  display: flex;
  align-items: center;
  /* position: sticky; */
  /* top: 0px; */
  /* align-items: center; */
`;

const NoFlex = styled.div`
  flex: none;
  display: flex;
`;

const Logo = styled.div`
  flex: ${props => (props.inBurgerMode ? 'auto' : 'none')};
  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  flex: auto;
  background-color: blue;
  justify-content: space-evenly;
  display: flex;
`;

const TopBar = props => {
  // Do not render TopBar at all if there are no children
  if (React.Children.count(props.links) === 0) return null;
  return (
    <TopBarDiv>
      <Burger
        isOpen={props.isOpen}
        onClick={props.toggleOpen}
        present={props.inBurgerMode}
      />
      <Logo inBurgerMode={props.inBurgerMode}>{props.logo}</Logo>
      {!props.inBurgerMode && <Items>{props.links}</Items>}
      <NoFlex>{props.icon}</NoFlex>
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
