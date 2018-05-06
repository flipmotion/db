import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
    this.setCurrent = this.setCurrent.bind(this);
    this.imageHeight = 66; // % height of image
  }

  setCurrent(itemIndex) {
    this.setState({ current: itemIndex });
  }

  render() {
    const { portfolio, ...other } = this.props;
    const titles = portfolio.map(el => el.title);
    const images = portfolio.map(el => el.illustration);
    const descriptions = portfolio.map(el => el.description);
    return (
      <Portfolio
        {...other}
        current={this.state.current}
        titles={titles}
        images={images}
        descriptions={descriptions}
        setCurrent={this.setCurrent}
        imageHeight={this.imageHeight}
      />
    );
  }
}

export default PortfolioContainer;
