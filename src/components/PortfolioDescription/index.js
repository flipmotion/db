import React from 'react';
import './index.css';

class PortfolioDescription extends React.Component {
  render() {
    const description = this.props.descriptions[this.props.current];
    return <div>{description}</div>;
  }
}

export default PortfolioDescription;
