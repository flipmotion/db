import React from 'react';
import { Menu, MenuItem } from './Menu';
import styled from 'styled-components';
import facebookIcon from './icons/facebook.svg';
import instagramIcon from './icons/instagram.svg';
import twitterIcon from './icons/twitter.svg';

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

const Text = styled.div`
  color: rgb(200, 200, 200);
  display: inline;
  padding: 1.5rem;
`;

export default () => {
  return (
    <FooterMenu>
      <MenuItem to="/contacts">Контакты</MenuItem>
      <MenuItem to="/about">О компании</MenuItem>
      <Text>© 2018 DB Company</Text>
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
