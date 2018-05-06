import React, { Component } from 'react';
import styled from 'styled-components';

import PortfolioList from './PortfolioList';
import CameraRoll from './CameraRoll';
import PortfolioDescription from './PortfolioDescription';

const ListArea = styled.div`
  flex: 20;
  animation: all 1s;
  align-self: center;
  margin: 1rem;
`;

const RollAreaDiv = styled.div`
  overflow-y: auto;
  /* for scroll momentum AND snapping on iOS */
  scroll-snap-type: y mandatory;
  flex: 50;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

class RollArea extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  // As user scrolls, we check if a "current" portfolio item changed, and if it did,
  // we trigger this.props.focusOn(newIndex)
  handleScroll(event) {
    const { scrollTop } = event.target;
    const elementHeight = event.target.childNodes[1].clientHeight;
    const adjustedScrollTop = scrollTop + elementHeight / 2;

    // How many element heights did we scroll? First item is an exception,
    // because scrolling half the item height must switch the index to the next one.
    const index = Math.floor(adjustedScrollTop / elementHeight);
    console.log('adjustedScrollTop', adjustedScrollTop);
    console.log('elementHeight', elementHeight);
    console.log('current index is', index);
    this.props.focusOn(index);
  }

  render() {
    return (
      <RollAreaDiv onScroll={this.handleScroll}>
        {this.props.children}
      </RollAreaDiv>
    );
  }
}

const DescriptionArea = styled.div`
  flex: 30;
  align-self: center;
  margin: 1rem;
`;

// A dumb (presentational) component that combines and orchestrates smaller components
// that are also dumb
const Portfolio = props => (
  <React.Fragment>
    <ListArea>
      <PortfolioList {...props} />
    </ListArea>
    <RollArea focusOn={props.focusOn}>
      <CameraRoll {...props} />
    </RollArea>
    <DescriptionArea>
      <PortfolioDescription {...props} />
    </DescriptionArea>
  </React.Fragment>
);

export default Portfolio;
