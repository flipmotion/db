import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '../Menu';

const Footer = () => (
  <Menu>
    <Link to="/contacts">
      <strong>Контакты</strong>
    </Link>
    <MenuItem to="/about">О компании</MenuItem>
    <MenuItem to="/copyright">Copyright © 2018 DB Company</MenuItem>
    <MenuItem to="/policy">Политика конфиденциальности</MenuItem>
    <div>
      <Link to="/vk">VK</Link>
      <Link to="/vk">FB</Link>
      <Link to="/vk">IG</Link>
    </div>
  </Menu>
);

export default Footer;
