import React, { Component } from 'react';
import styled from 'styled-components';
import ru from './ru.svg';
import en from './uk.svg';

const langs = [
  {
    alt: 'Читать на русском',
    img: ru
  },
  {
    alt: 'Read in English',
    img: en
  }
];

const Perspective = styled.div`
  perspective: 30px;
`;

const Flag = styled.img`
  width: 1.4rem;
  margin: 1rem;
  filter: grayscale(30%) brightness(80%);
  transition: all 0.5s;
  cursor: pointer;
  display: inline-block;
`;

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      langs: langs,
      current: 0,
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
      rotation: -30,
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

  changeLang() {
    const nextIndex = () => {
      const maxIndex = this.state.langs.length - 1;
      const current = this.state.current;
      if (current + 1 > maxIndex) return 0;
      return current + 1;
    };

    this.setState(state => ({ current: nextIndex() }));
  }

  render() {
    const { rotation, scale, grayscale, brightness } = this.state;
    const animatedStyle = {
      transform: `scale(${scale}) rotate3d(0, 1, 0, ${rotation}deg)`,
      filter: `grayscale(${grayscale}%) brightness(${brightness}%)`
    };

    const { langs, current } = this.state;
    return (
      <Perspective>
        <Flag
          src={langs[current].img}
          onClick={this.changeLang}
          onMouseEnter={this.lift}
          onMouseLeave={this.default}
          alt={langs[current].alt}
          style={animatedStyle}
        />
      </Perspective>
    );
  }
}
