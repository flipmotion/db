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
  &:hover {
    transform: scale(1.5) rotate3d(0, 1, 0, -30deg);
    transition: all 0.5s;
    filter: grayscale(10%) brightness(90%);
  }
`;

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      langs: langs,
      current: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const nextIndex = () => {
      const maxIndex = this.state.langs.length - 1;
      const current = this.state.current;
      if (current + 1 > maxIndex) return 0;
      return current + 1;
    };

    this.setState(state => ({ current: nextIndex() }));
  }

  render() {
    const { langs, current } = this.state;
    return (
      <Perspective>
        <Flag
          src={langs[current].img}
          onClick={this.handleClick}
          alt={langs[current].alt}
        />
      </Perspective>
    );
  }
}
