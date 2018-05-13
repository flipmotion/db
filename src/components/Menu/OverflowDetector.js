import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

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
    console.log('!!!!!!!!');
    const isOverflowed =
      this.overflowDetectorRef.current &&
      this.overflowDetectorRef.current.scrollWidth >
        this.overflowDetectorRef.current.clientWidth;
    this.props.onOverflowChange({ isOverflowed: !!isOverflowed });
  }

  render() {
    return (
      <div ref={this.overflowDetectorRef} style={{ width: '100vw' }}>
        <Items
          style={{
            // visibility: 'hidden',
            // position: 'fixed',
            bottom: '-2rem'
            // overflow: 'hidden'
          }}
        >
          {this.props.topLinks}
        </Items>
      </div>
    );
  }
}

OverflowDetector.propTypes = {
  onOverflowChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default OverflowDetector;
