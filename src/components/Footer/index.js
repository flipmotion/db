import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '../Menu';
import styled from 'styled-components';
import facebookIcon from './facebook.svg';
import instagramIcon from './instagram.svg';
import twitterIcon from './twitter.svg';

const Icon = styled.img`
  height: 1.2rem;
  padding: 0 0.4rem;
`;

const IconContainer = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const FooterMenu = styled(Menu)`
  background: linear-gradient(
    to top,
    rgba(34, 34, 34, 0.6) 40%,
    rgba(34, 34, 34, 0) 100%
  );
`;

export default () => {
  return (
    <FooterMenu>
      <MenuItem to="/contacts">О Контакты</MenuItem>
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
    </FooterMenu>
  );
};
