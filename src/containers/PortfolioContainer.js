import React, { Component } from 'react';
import styled from 'styled-components';
import CameraRoll from '../components/Portfolio/CameraRoll';
import PortfolioList from '../components/Portfolio/PortfolioList';

const animationDuration = '0.85s';

function animation_fadeFromLeft(animationStage) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: `all ${animationDuration}`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateX(-500px)',
      transition: `all ${animationDuration}`
    };
  }
}

function animation_fadeFromBottom(animationStage) {
  if (animationStage === 'entered') {
    return {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: `all ${animationDuration} ease-out 0.35s`
    };
  } else {
    return {
      opacity: 0,
      transform: 'translateY(500px)',
      transition: `all ${animationDuration} ease-out 0.35s`
    };
  }
}

const ListAndCameraRoll = styled.div`
  height: 100%;
  width: 100%;
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
        <ListArea
          animationStage={this.props.animationStage}
          style={animation_fadeFromLeft(this.props.animationStage)}
        >
          <PortfolioList
            current={this.state.current}
            titles={titles}
            setCurrent={this.setCurrent}
          />
        </ListArea>
        <RollArea
          animationStage={this.props.animationStage}
          style={animation_fadeFromBottom(this.props.animationStage)}
        >
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
