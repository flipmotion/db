import React, { Component } from 'react';
import Portfolio from '../components/Portfolio';

class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
    this.NavigateTo = this.NavigateTo.bind(this);
  }

  NavigateTo(portfolioIndex) {
    this.setState({ current: portfolioIndex });
  }

  render() {
    const { portfolio, animationStage } = this.props;
    const titles = portfolio.map(el => el.title);
    const images = portfolio.map(el => el.images[0]);
    const descriptions = portfolio.map(el => el.description);
    return (
      <Portfolio
        current={this.state.current}
        titles={titles}
        images={images}
        descriptions={descriptions}
        animationStage={animationStage}
        NavigateTo={this.NavigateTo}
      />
    );
  }
}

export default PortfolioContainer;
