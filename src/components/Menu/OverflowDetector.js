import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OverflowDetector extends Component {
  constructor() {
    super();
    this.overflowDetectorRef = React.createRef();
    this.updateOverflowState = this.updateOverflowState.bind(this);
  }

  componentDidMount() {
    this.updateOverflowState();
    window.addEventListener('resize', this.updateOverflowState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateOverflowState);
  }

  updateOverflowState() {
    const isOverflowed =
      this.overflowDetectorRef.current &&
      this.overflowDetectorRef.current.scrollWidth >
        this.overflowDetectorRef.current.clientWidth;
    this.props.onOverflowChange({ isOverflowed: !!isOverflowed });
  }

  render() {
    return (
      <div ref={this.overflowDetectorRef} style={{ display: '100vw' }}>
        <div
          style={{
            display: 'flex',
            visibility: 'hidden'
          }}
        >
          {this.props.topLinks}
        </div>
      </div>
    );
  }
}

OverflowDetector.propTypes = {
  onOverflowChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default OverflowDetector;
