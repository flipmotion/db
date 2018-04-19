import React from 'react'
import './portfolio.scss'

import PortfolioList from '../components/PortfolioList'
import CameraRoll from '../components/CameraRoll'
import PortfolioDescription from '../components/PortfolioDescription'

import dummyData from '../stubs/data'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = dummyData;

    this.updateCurrent = this.updateCurrent.bind(this);
  }

  // not done
  updateCurrent(index, _event) {
    this.setState({current: index});
    window.location.hash = index;
  }

  render() {
    const currentDescription =
      this.state.portfolio[this.state.current].description;
    const names = this.state.portfolio.map(el => el.name);

    // First image serves as a display image in CameraRoll
    const images = this.state.portfolio.map(el => el.images[0]);

    return (
      <div className="Portfolio">
        <div className="Portfolio-ListArea">
          <PortfolioList
            names={names}
            current={this.state.current}
            onClick={this.updateCurrent}
          />
        </div>
        <div className="Portfolio-RollArea">
          <CameraRoll images={images} current={this.state.current} />
        </div>
        <div className="Portfolio-DescriptionArea">
          <PortfolioDescription text={ currentDescription } />
        </div>
      </div>
    )
  }
}

export default Portfolio
