import React from 'react';
import './index.css';

import PortfolioList from '../PortfolioList';
import CameraRoll from '../CameraRoll';
import PortfolioDescription from '../PortfolioDescription';

//

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    // this.updateCurrent = this.updateCurrent.bind(this);
    this.state = { current: 0 };
  }

  // not done
  // updateCurrent(index, _event) {
  //   this.setState({ current: index });
  //   window.location.hash = index;
  // }

  render() {
    const { portfolio } = this.props;
    const { current } = this.state;
    const titles = portfolio.map(el => el.title);
    const images = portfolio.map(el => el.images[0]);
    const descriptions = portfolio.map(el => el.description);

    return (
      <div className="Portfolio">
        <div className="Portfolio-ListArea">
          <PortfolioList titles={titles} current={current} />
        </div>
        <div className="Portfolio-RollArea">
          <CameraRoll images={images} current={current} />
        </div>
        <div className="Portfolio-DescriptionArea">
          <PortfolioDescription descriptions={descriptions} current={current} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
