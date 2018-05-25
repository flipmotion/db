import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OverflowDetector from '../components/Menu/OverflowDetector';
import { TopBar, BottomBar, MobileBar } from '../components/Menu/MenuBars';

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
  display: ${props => (props.removed ? 'none' : 'initial')}
  overflow-y: auto;
  flex: auto;
`;

Content.propTypes = {
  displayed: PropTypes.bool
};

class MenuContainer extends Component {
  static propTypes = {
    topBar: PropTypes.instanceOf(TopBar),
    bottomBar: PropTypes.instanceOf(BottomBar),
    mobileMenu: PropTypes.instanceOf(MobileBar),
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
    console.log(overflowStatus);
    this.setState({ inBurgerMode: overflowStatus });
  }

  render() {
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

        <MobileBar displayed={this.state.isOpen} />

        <Content removed={this.state.isOpen}>{this.props.children}</Content>

        <BottomBar displayed={!this.state.inBurgerMode} />
      </Wrapper>
    );
  }
}

export default MenuContainer;
