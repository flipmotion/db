import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <input
          type="number"
          min={30}
          max={5000}
          onChange={this.handleAreaChange}
          value={this.state.area}
        />
        <input
          type="range"
          min={30}
          max={5000}
          onChange={this.handleAreaChange}
          value={this.state.area}
        />
        <p>
          min: {this.priceRange().min}, max: {this.priceRange().max}
        </p>
      </div>
    );
  }
}

export default Calculator;
