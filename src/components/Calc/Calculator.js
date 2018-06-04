import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { areaRange } from '../../content/calc';

const Wrapper = styled.div`
  background: grey;
  display: flex;
  flex: auto;
  flex-direction: column;
`;

const Input = props => (
  <input {...props} min={areaRange.min} max={areaRange.max} />
);

class Calculator extends React.Component {
  static propTypes = {
    lang: PropTypes.oneOf(['ru', 'en']),
    priceRanges: PropTypes.arrayOf(
      PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number
      })
    )
  };

  constructor() {
    super();
    this.state = { area: 450 };
    this.priceRange = this.priceRange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
  }

  priceRange() {
    const { area } = this.state;
    const min = this.props.priceRanges
      .map(({ min }) => min * area)
      .reduce((acc, current) => acc + current, 0);

    const max = this.props.priceRanges
      .map(({ max }) => max * area)
      .reduce((acc, current) => acc + current, 0);
    return { min, max };
  }

  handleAreaChange(event) {
    const enteredArea = Number(event.target.value);
    if (enteredArea.isNaN) return;
    this.setState({ area: event.target.value });
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          onChange={this.handleAreaChange}
          value={this.state.area}
        />
        <Input
          type="range"
          onChange={this.handleAreaChange}
          value={this.state.area}
        />
        <Result range={this.priceRange()} lang={this.props.lang} />
      </Wrapper>
    );
  }
}

function formatCurrency(number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  }).format(number);
}

const text = {
  selectServices: {
    en: '⬅︎ Please choose one or more services',
    ru: '⬅︎ Пожалуйста выберите одну или несколько услуг'
  }
};

function textIn(lang) {
  return {
    selectServices: text.selectServices[lang]
  };
}

const Result = ({ range, lang }) => {
  if (range.min === 0 || range.max === 0)
    return <p>{textIn(lang).selectServices}</p>;
  return (
    <p>
      min: {formatCurrency(range.min)}, max: {formatCurrency(range.max)}
    </p>
  );
};

export default Calculator;
