import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

const FooterItem = props => (
  <NavLink
    className="Footer-Item"
    activeClassName="Footer-Item_selected"
    exact
    {...props}
  />
);

const Footer = () => (
  <div className="Footer">
    <Link to="/contacts">
      <strong>Контакты</strong>
    </Link>
    <FooterItem to="/about">О компании</FooterItem>
    <FooterItem to="/copyright">Copyright © 2018 DB Company</FooterItem>
    <FooterItem to="/policy">Политика конфиденциальности</FooterItem>
    <div>
      <Link to="/vk">VK</Link>
      <Link to="/vk">FB</Link>
      <Link to="/vk">IG</Link>
    </div>
  </div>
);

export default Footer;
