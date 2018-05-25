import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Reliably hidden from viewport
const ContentWrapper = styled.div`
  position: fixed;
  top: 0px;
  margin-top: 100vh;
`;

// Checks if OverflowDetector children overflow OverflowDetector parent
// containing element. It calls back
// props.onOverflowChange with the current result of the check.
// The check it triggered on mount and on every screen resize.
class OverflowDetector extends Component {
  constructor() {
    super();
    this.contentWrapperRef = React.createRef();
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
    const contentNode = this.contentWrapperRef.current;
    const parentNode = contentNode.parentNode;
    // if (!contentNode || !parentNode) return;

    const isOverflowed = contentNode.clientWidth > parentNode.clientWidth;
    this.props.onOverflowChange(isOverflowed);
  }

  render() {
    return (
      <ContentWrapper innerRef={this.contentWrapperRef}>
        {this.props.children}
      </ContentWrapper>
    );
  }
}

OverflowDetector.propTypes = {
  onOverflowChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default OverflowDetector;
