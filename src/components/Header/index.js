import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';

const HeaderItem = props => (
  <NavLink
    className="Header-Item"
    activeClassName="Header-Item_selected"
    exact
    {...props}
  />
);

const Header = () => (
  <div className="Header">
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
  </div>
);

export default Header;
