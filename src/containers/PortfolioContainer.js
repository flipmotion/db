import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
    this.focusOn = this.focusOn.bind(this);
  }

  focusOn(itemIndex) {
    this.setState({ current: itemIndex });
  }

  render() {
    const { portfolio, ...other } = this.props;
    const titles = portfolio.map(el => el.title);
    const images = portfolio.map(el => el.images[0]);
    const descriptions = portfolio.map(el => el.description);
    return (
      <Portfolio
        {...other}
        current={this.state.current}
        titles={titles}
        images={images}
        descriptions={descriptions}
        focusOn={this.focusOn}
      />
    );
  }
}

export default PortfolioContainer;
