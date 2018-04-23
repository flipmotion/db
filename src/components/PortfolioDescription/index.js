import React from 'react';
import './index.css';

class PortfolioDescription extends React.Component {
  render() {
    const description = this.props.descriptions[this.props.current];
    return <div className="PortfolioDescription">{description}</div>;
  }
}

export default PortfolioDescription;
