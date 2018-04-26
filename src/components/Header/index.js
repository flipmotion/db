import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import styled from 'styled-components';
import { Menu, MenuItem } from '../Menu';

const Logo = styled.img.attrs({ alt: 'DB company logo', src: logo })`
  height: 3rem;
`;

// TODO
const LanguageToggle = () => (
  <div>
    <strong>Ru</strong> / En
  </div>
);

const Header = () => (
  <Menu>
    <Link to="/">
      <Logo />
    </Link>

    <MenuItem to="/">Главная</MenuItem>
    <MenuItem to="/portfolio">Портфолио</MenuItem>
    <MenuItem to="/services">Услуги</MenuItem>
    <MenuItem to="/prices">Цены</MenuItem>
    <a href="tel: +7 495 780 80 55">+7 495 780 80 55</a>
    <LanguageToggle />
  </Menu>
);

export default Header;
