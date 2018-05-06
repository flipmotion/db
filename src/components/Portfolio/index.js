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
    this.positionAt = this.positionAt.bind(this);
    this.elementHeight = this.elementHeight.bind(this);
    this.currentAreaIndex = this.currentAreaIndex.bind(this);
    this.element = this.element.bind(this);
    this.ref = React.createRef();
  }

  element() {
    return this.ref.current;
  }

  // What element the current scroll position belongs to
  currentAreaIndex() {
    const elementHeight = this.elementHeight();
    const scrollTop = this.element().scrollTop;
    const adjustedScrollTop = scrollTop + elementHeight / 2;
    return Math.floor(adjustedScrollTop / elementHeight);
  }

  // first element is a spacer, so we skip it
  elementHeight() {
    const element = this.element();
    if (!element.childNodes[1]) return 0;
    return element.childNodes[1].clientHeight;
  }

  // scroll position sets current index for the whole Portfolio
  handleScroll(event) {
    const index = this.currentAreaIndex();
    this.props.setCurrent(index);
  }

  componentDidUpdate(prevProps) {
    this.positionAt(this.props.current);
  }

  // position exactly at _index_ image
  positionAt(index) {
    const element = this.ref.current;
    const elementHeight = element.childNodes[1].clientHeight;

    const currentPosition = element.scrollTop;
    const desiredPosition = index * elementHeight;

    element.scrollTop = desiredPosition;

    // const delta = desiredPosition - currentPosition

    // for (let i = 1000; i > 0; i--) {
    //   console.log(i)
    //   element.scrollTop = index * elementHeight - delta / i
    // }
  }

  render() {
    return (
      <RollAreaDiv onScroll={this.handleScroll} innerRef={this.ref}>
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
    <RollArea setCurrent={props.setCurrent} current={props.current}>
      <CameraRoll {...props} />
    </RollArea>
    <DescriptionArea>
      <PortfolioDescription {...props} />
    </DescriptionArea>
  </React.Fragment>
);

export default Portfolio;
