import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '../Menu';
import styled from 'styled-components';
import facebookIcon from './facebook.svg';
import instagramIcon from './instagram.svg';
import twitterIcon from './twitter.svg';

const Icon = styled.img`
  height: 1.2rem;
  padding: 0 0.3rem;
`;

const IconContainer = styled.div`
  display: flex;
`;

export default () => {
  return (
    <Menu>
      <Link to="/contacts">
        <strong>Контакты</strong>
      </Link>
      <MenuItem to="/about">О компании</MenuItem>
      <MenuItem to="/copyright">Copyright © 2018 DB Company</MenuItem>
      <MenuItem to="/policy">Политика конфиденциальности</MenuItem>
      <IconContainer>
        <a href="https://instagram.com">
          <Icon src={instagramIcon} />
        </a>
        <a href="https://facebook.com">
          <Icon src={facebookIcon} />
        </a>
        <a href="https://twitter.com">
          <Icon src={twitterIcon} />
        </a>
      </IconContainer>
    </Menu>
  );
};
