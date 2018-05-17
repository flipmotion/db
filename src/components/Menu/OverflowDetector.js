import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FullWidth = styled.div`
  width: 100vw;
`;

// Reliably hidden from viewport
const ContentWrapper = styled.div`
  position: fixed;
  top: 0px;
  margin-top: 100vh;
`;

// Checks if children overflow on 100vw and calls back
// props.onOverflowChange with the current result of the check.
// Triggered on mount and every screen resize.
class OverflowDetector extends Component {
  constructor() {
    super();
    this.contentWrapperRef = React.createRef();
    this.fullWidthRef = React.createRef();
    this.checkOverflow = this.checkOverflow.bind(this);
  }

  componentDidMount() {
    this.checkOverflow();
    window.addEventListener('resize', this.checkOverflow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkOverflow);
  }

  checkOverflow() {
    const contentRef = this.contentWrapperRef.current;
    const fullWidthRef = this.fullWidthRef.current;
    if (!contentRef || !fullWidthRef) return;

    const isOverflowed = contentRef.clientWidth > fullWidthRef.clientWidth;
    this.props.onOverflowChange(isOverflowed);
  }

  render() {
    return (
      <FullWidth innerRef={this.fullWidthRef}>
        <ContentWrapper innerRef={this.contentWrapperRef}>
          {this.props.children}
        </ContentWrapper>
      </FullWidth>
    );
  }
}

OverflowDetector.propTypes = {
  onOverflowChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default OverflowDetector;
