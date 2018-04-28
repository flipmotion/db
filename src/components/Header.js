import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../modules/content';
import styled from 'styled-components';
import { Menu, MenuItem } from './Menu';

const Logo = styled.img.attrs({ alt: 'DB company logo', src: logo })`
  height: 3rem;
`;

const HeaderMenu = styled(Menu)`
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0.6) 40%,
    rgba(34, 34, 34, 0) 100%
  );
`;

// TODO
const LanguageToggle = () => (
  <div>
    <strong>Ru</strong> / En
  </div>
);

const Header = () => (
  <HeaderMenu>
    <Link to="/">
      <Logo />
    </Link>

    <MenuItem to="/">Главная</MenuItem>
    <MenuItem to="/portfolio">Портфолио</MenuItem>
    <MenuItem to="/services">Услуги</MenuItem>
    <MenuItem to="/prices">Цены</MenuItem>
    <a href="tel: +7 495 780 80 55">+7 495 780 80 55</a>
    <LanguageToggle />
  </HeaderMenu>
);

export default Header;
