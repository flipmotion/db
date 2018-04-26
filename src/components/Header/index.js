import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styled from 'styled-components';

const HeaderItem = ({ to, children }) => {
  const activeClassName = 'active';

  const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    width: 100%;

    &.${activeClassName} {
      font-weight: bold;
    }
  `;

  return (
    <StyledNavLink activeClassName={activeClassName} to={to}>
      {children}
    </StyledNavLink>
  );
};

// .Header-Item_selected {
//
// }

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  z-index: 100;
`;

const Header = () => (
  <Menu>
    <Link to="/">
      <img style={{ height: '3rem' }} src={logo} alt="DB company logo" />
    </Link>

    <HeaderItem to="/">Главная</HeaderItem>
    <HeaderItem to="/portfolio">Портфолио</HeaderItem>
    <HeaderItem to="/services">Услуги</HeaderItem>
    <HeaderItem to="/prices">Цены</HeaderItem>
    <a href="tel: +7 495 780 80 55">+7 495 780 80 55</a>
    {/* This will be a LanguageToggle component, not Link: */}
    <Link to="/asdf">
      <strong>Ru</strong> / En
    </Link>
  </Menu>
);

export default Header;
