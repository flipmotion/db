import React, { Component } from 'react';
import styled from 'styled-components';
import CameraRoll from '../components/Portfolio/CameraRoll';
import PortfolioList from '../components/Portfolio/PortfolioList';

const ListAndCameraRoll = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ListArea = styled.div`
  align-self: center;
  flex: 33;
`;

const RollArea = styled.div`
  flex: 66;
  min-width: 0;
  height: 100%;
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
        <ListArea>
          <PortfolioList
            current={this.state.current}
            titles={titles}
            setCurrent={this.setCurrent}
          />
        </ListArea>
        <RollArea>
          <CameraRoll
            current={this.state.current}
            images={images}
            setCurrent={this.setCurrent}
          />
        </RollArea>
      </ListAndCameraRoll>
    );
  }
}

export default PortfolioContainer;
