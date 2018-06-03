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
        <p>
          min: {this.priceRange().min}, max: {this.priceRange().max}
        </p>
      </Wrapper>
    );
  }
}

export default Calculator;
