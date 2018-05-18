import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import TopBar from './TopBar';
import OverflowDetector from './OverflowDetector';
import LangIcon from './LangIcon';

injectGlobal`
  body {
    font-family: sans-serif;
    margin: 0;
  }
`;

const Logo = () => <p>Logo</p>;

const ContentAndMenu = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

ContentAndMenu.propTypes = {
  children: PropTypes.node
};

const Content = styled.div`
  overflow: ${props => (props.frozenScroll ? 'hidden' : 'scroll')};
  height: calc(100vh - 3rem);
`;

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      inBurgerMode: false,
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    return (
      <ContentAndMenu>
        {/* Triggers inBurgerMode state change depending on TopBar overflow state in _desktop_ mode */}
        <OverflowDetector
          onOverflowChange={overflowStatus =>
            this.setState({ inBurgerMode: overflowStatus })
          }
          children={
            <TopBar
              inBurgerMode={false}
              links={this.props.links}
              logo={<Logo />}
              icon={<LangIcon onClick={this.props.toggleLang} />}
            />
          }
        />

        <TopBar
          inBurgerMode={this.state.inBurgerMode}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
          logo={<Logo />}
          icon={<LangIcon onClick={this.props.toggleLang} />}
          links={this.props.links}
        />

        <Content hidden={this.state.inBurgerMode && this.state.isOpen}>
          {this.props.children}
        </Content>
      </ContentAndMenu>
    );
  }
}

// The Menu API
Menu.propTypes = {
  logo: PropTypes.node,
  links: PropTypes.arrayOf(PropTypes.node),
  toggleLang: PropTypes.func,
  children: PropTypes.node // content
};

export default Menu;
