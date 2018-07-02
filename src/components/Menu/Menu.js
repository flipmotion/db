import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Burger from './Burger';
import LangIcon from './LangIcon';
import logoSrc from './logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { topMenuIn, bottomMenuIn } from './menusIn';
import uuid from 'uuid';
import facebookSrc from './social/facebook.svg';
import instagramSrc from './social/instagram.svg';
import twitterSrc from './social/twitter.svg';

const BarWrapper = styled.div`
  flex: none;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
`;

// Sets flex-direction to column
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

Wrapper.propTypes = {
  children: PropTypes.node
};

const activeClassName = uuid();
const MenuLink = styled(NavLink).attrs({ activeClassName })`
  color: black;
  text-decoration: none;
  &.${activeClassName} {
    font-weight: bold;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <img src={logoSrc} alt="logo" style={{ height: '4em', width: '4em' }} />
    </Link>
  );
}

const SocialIconsWrapper = styled.div`
  height: 1.33em;
  white-space: nowrap;
`;

const SocialIcon = styled.img`
  height: 100%;
  display: inline-block;
  padding-left: 0.33em;
  padding-right: 0.33em;
`;

// In the process of refactoring I threw away mobile menu.
// There are higher priority things to do for now, I'll get back to it later
class Menu extends Component {
  static propTypes = {
    lang: PropTypes.oneOf(['ru', 'en']).isRequired,
    toggleLang: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      inBurgerMode: false,
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleOverflowChange = this.handleOverflowChange.bind(this);
  }

  toggleOpen() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  handleOverflowChange(overflowStatus) {
    this.setState({ inBurgerMode: overflowStatus });
  }

  render() {
    const topMenuItems = topMenuIn(this.props.lang).map(el => (
      <MenuLink key={el.to} to={el.to}>
        {el.text}
      </MenuLink>
    ));
    const bottomMenuItems = bottomMenuIn(this.props.lang).map(el => (
      <MenuLink key={el.to} to={el.to}>
        {el.text}
      </MenuLink>
    ));

    return (
      <Wrapper>
        {/* top bar */}
        <BarWrapper>
          <Logo />
          {!this.state.inBurgerMode && topMenuItems}
          <Burger
            isOpen={this.state.isOpen}
            onClick={this.state.toggleOpen}
            displayed={this.state.inBurgerMode}
          />
          {!this.state.inBurgerMode && (
            <LangIcon lang={this.props.lang} onClick={this.props.toggleLang} />
          )}
        </BarWrapper>

        {/* content */}
        {!this.state.inBurgerMode && !this.state.isOpen && this.props.children}

        {/* bottom bar */}
        <BarWrapper>
          {!this.state.inBurgerMode && bottomMenuItems}
          <SocialIconsWrapper>
            <a
              href="https://facebook.com"
              alt="facebook"
              key="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={facebookSrc} />
            </a>
            <a
              href="https://instagram.com"
              alt="instagram"
              key="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={instagramSrc} />
            </a>
            <a
              href="https://twitter.com"
              alt="twitter"
              key="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon src={twitterSrc} />
            </a>
          </SocialIconsWrapper>
        </BarWrapper>
      </Wrapper>
    );
  }
}

export default Menu;
