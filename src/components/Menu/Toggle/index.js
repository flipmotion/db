import React, { Component } from 'react';
import styled from 'styled-components';

const Perspective = styled.div`
  perspective: 30px;
  cursor: pointer;
`;

const Flag = styled.img`
  width: 1.4rem;
  margin: 1rem;
  filter: grayscale(30%) brightness(80%);
  transition: all 0.7s;
  display: inline-block;
`;

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      rotation: 0,
      scale: 1,
      grayscale: 30,
      brightness: 80
    };
    this.changeLang = this.changeLang.bind(this);
    this.lift = this.lift.bind(this);
    this.default = this.default.bind(this);
  }

  lift() {
    this.setState({
      rotation: -180,
      scale: 1.5,
      grayscale: 10,
      brightness: 90
    });
  }

  default() {
    this.setState({
      rotation: 0,
      scale: 1,
      grayscale: 30,
      brightness: 80
    });
  }

  render() {
    const { rotation, scale, grayscale, brightness } = this.state;
    const animatedStyle = {
      transform: `scale(${scale}) rotate3d(0, 1, 0, ${rotation}deg)`,
      filter: `grayscale(${grayscale}%) brightness(${brightness}%)`
    };

    const { lang, changeLang } = this.props;
    return (
      <Perspective
        onClick={changeLang}
        onMouseEnter={this.lift}
        onMouseLeave={this.default}
      >
        <Flag
          src={langs[current].img}
          alt={langs[current].alt}
          style={animatedStyle}
        />
      </Perspective>
    );
  }
}
