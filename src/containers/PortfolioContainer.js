import React, { Component } from 'react';
import styled from 'styled-components';
import CameraRoll from '../components/Portfolio/CameraRoll';
import PortfolioList from '../components/Portfolio/PortfolioList';

const ListAndCameraRoll = styled.div`
  height: 100vh;
  display: flex;
`;

// This container basically tracks which image is current
// (holds the state) and combines CameraRoll and PortfolioList
class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = { current: 0 };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(current) {
    this.setState({ current });
  }

  render() {
    const titles = this.props.portfolio.map(el => el.title);
    const images = this.props.portfolio.map(p =>
      Object.assign({}, p.illustration, { description: p.description })
    );
    return (
      <ListAndCameraRoll>
        <PortfolioList
          current={this.state.current}
          titles={titles}
          setCurrent={this.setCurrent}
        />
        <CameraRoll
          current={this.state.current}
          images={images}
          setCurrent={this.setCurrent}
        />
      </ListAndCameraRoll>
    );
  }
}

export default PortfolioContainer;
