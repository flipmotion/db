import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../modules/content';
import styled from 'styled-components';
import { Menu, MenuItem } from './Menu';

const Logo = styled.img.attrs({ alt: 'DB company logo', src: logo })`
  height: 3rem;
  margin: 1rem;
`;

const HeaderMenu = styled(Menu)`
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0.6) 40%,
    rgba(34, 34, 34, 0) 100%
  );
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
  color: rgb(200, 200, 200);
`;

// TODO
const LanguageToggle = () => (
  <Text>
    <strong>Ru</strong> / En
  </Text>
);

const Phone = styled.a.attrs({
  href: props => `tel: ${props.number}`,
  children: props => props.number
})`
  display: block;
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: rgb(200, 200, 200);
  &:hover {
    text-decoration: none;
    color: rgb(240, 240, 240);
    transition: color 0.5s;
  }
`;

const Header = () => (
  <HeaderMenu>
    <Link to="/">
      <Logo />
    </Link>

    <MenuItem exact to="/">
      Главная
    </MenuItem>
    <MenuItem to="/portfolio">Портфолио</MenuItem>
    <MenuItem to="/services">Услуги</MenuItem>
    <MenuItem to="/prices">Цены</MenuItem>
    <Phone number="+7 495 780 80 55" />
    <LanguageToggle />
  </HeaderMenu>
);

export default Header;
