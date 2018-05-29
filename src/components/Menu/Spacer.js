import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// The core of Spacer
// wraps children with a div that gives offset in the beginning and
// in the end, so first and last elements are in the center
const SpaceCreator = styled.div`
  display: flex;
  background: grey;
  align-items: center;
  ${props =>
    props.spaceStart &&
    css`
    padding-${props.horizontal ? 'left' : 'top'}: ${props.spaceStart}px;
  `};
  ${props =>
    props.spaceEnd &&
    css`
    padding-${props.horizontal ? 'right' : 'bottom'}: ${props.spaceEnd}px;
  `};
  ${props =>
    !props.horizontal &&
    css`
      flex-direction: column;
    `};
`;

// Adds apce at the beginning and at the end
// FIXME: horizontal prop is currently broken
// TODO: add snaps for Safari
class Spacer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    horizontal: PropTypes.bool
  };

  constructor() {
    super();
    this.firstRef = React.createRef();
    this.lastRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.state = { spaceStart: 0, spaceEnd: 0 };
    this.updateSpaces = this.updateSpaces.bind(this);
  }

  updateSpaces() {
    const childrenCount = React.Children.count(this.props.children);
    const singleChild = childrenCount === 1;
    const firstNode = this.firstRef.current;
    const lastNode = singleChild ? this.firstRef.current : this.lastRef.current;
    // containing block if this component, outside of it
    const outerScrollContainer = this.wrapperRef.current.parentElement;

    const firstElementMainSize = this.props.horizontal
      ? firstNode.offsetWidth
      : firstNode.offsetHeight; // includes borders
    const lastElementMainSize = this.props.horizontal
      ? lastNode.offsetWidth
      : lastNode.offsetHeight;
    const containerMainSize = this.props.horizontal
      ? outerScrollContainer.offsetWidth
      : outerScrollContainer.offsetHeight;

    const spaceStart = (containerMainSize - firstElementMainSize) / 2;
    const spaceEnd = (containerMainSize - lastElementMainSize) / 2;

    console.log(
      'containerMainSize',
      containerMainSize,
      'spaceStart',
      spaceStart,
      'spaceEnd',
      spaceEnd
    );
    this.setState({ spaceStart, spaceEnd });
  }

  componentDidMount() {
    const childrenCount = React.Children.count(this.props.children);
    const noChildren = childrenCount === 0;

    // not sure I need this guard clause here, but to be safe
    if (noChildren) return;
    this.updateSpaces();
    window.updateSpaces = this.updateSpaces; // debugging
    // window.setTimeout(this.updateSpaces, 1000)
  }

  render() {
    const childrenCount = React.Children.count(this.props.children);
    if (childrenCount === 0) return null;
    return (
      <SpaceCreator
        innerRef={this.wrapperRef}
        spaceStart={this.state.spaceStart}
        spaceEnd={this.state.spaceEnd}
        horizontal={this.props.horizontal}
      >
        {React.Children.map(this.props.children, (child, index) => {
          const first = index === 0;
          const last = index === childrenCount - 1;

          if (first) return React.cloneElement(child, { ref: this.firstRef });
          if (last) return React.cloneElement(child, { ref: this.lastRef });
          return child; // otherwise return unchanged
        })}
      </SpaceCreator>
    );
  }
}

export default Spacer;
