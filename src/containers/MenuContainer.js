import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OverflowDetector from '../components/Menu/OverflowDetector';

// Sets flex-direction to column
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

Wrapper.propTypes = {
  children: PropTypes.node
};

const Content = styled.div`
  display: ${props => (props.displayed ? 'initial' : 'none')};
  overflow-y: auto;
  flex: auto;
  height: 100%;
`;

Content.propTypes = {
  displayed: PropTypes.bool
};

Content.defaultProps = {
  displayed: true
};

// The MenuContainer component holds menu state (open/closed, mobile/desktop)
// and receives render props with topBar/bottomBar/mobileBar render props.
//
// topbar is given inBurgerMode and isOpen state, so it knows how to appear,
// and toggleOpen so topbar can toggle open/closed mobile menu state.
// It does not know about burger appearance etc, that is a concern of component instance
// passed through topBar prop.
class MenuContainer extends Component {
  static propTypes = {
    topBar: PropTypes.node,
    bottomBar: PropTypes.node,
    mobileMenu: PropTypes.node,
    children: PropTypes.node // content
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
    // ...so props specified in return() below work.
    const TopBar = props =>
      this.props.topBar
        ? React.cloneElement(this.props.topBar, { ...props })
        : null;
    const BottomBar = props =>
      this.props.bottomBar
        ? React.cloneElement(this.props.bottomBar, { ...props })
        : null;
    const MobileBar = props =>
      this.props.mobileBar
        ? React.cloneElement(this.props.mobileBar, { ...props })
        : null;

    return (
      <Wrapper>
        <OverflowDetector onOverflowChange={this.handleOverflowChange}>
          <TopBar />
          <BottomBar />
        </OverflowDetector>
        <TopBar
          inBurgerMode={this.state.inBurgerMode}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
        <MobileBar displayed={this.state.inBurgerMode && this.state.isOpen} />
        <Content displayed={!this.state.inBurgerMode || !this.state.isOpen}>
          {this.props.children}
        </Content>
        <BottomBar displayed={!this.state.inBurgerMode} />
      </Wrapper>
    );
  }
}

export default MenuContainer;
