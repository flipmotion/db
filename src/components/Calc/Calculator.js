import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { areaRange } from '../../content/calc';
import RangeInput from './RangeInput/index';

// This not content, this is a part of the app, internationalized though.
const text = {
  selectServices: {
    en: '⬅︎ Please choose one or more services',
    ru: '⬅︎ Пожалуйста выберите одну или несколько услуг'
  },
  calculationResult: {
    en: 'The preliminary cost of the works',
    ru: 'Предварительная стоимость работ'
  }
};

function textIn(lang) {
  return {
    selectServices: text.selectServices[lang]
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledRangeInput = styled(RangeInput)`
  width: 100%;
`;

// I gave up and wrapped the slider in another div
const StyledRangeInputWithPadding = props => (
  <div
    style={{
      paddingLeft: '1em',
      paddingRight: '1em',
      width: '100%'
    }}
  >
    <StyledRangeInput {...props} />
  </div>
);

const ControlsWraper = styled.div`
  display: flex;
`;

const TextInput = styled(props => (
  <input {...props} type="text" maxLength={areaRange.max.toString().length} />
))`
  width: 4em;
  flex: none;
  font-size: 1.5rem;
  text-align: center;
`;

// m2 text
const Label = styled.label`
  padding: 0.5em;
  display: flex;
  align-items: center;
`;

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
    this.handleAreaChangeViaRangeInput = this.handleAreaChangeViaRangeInput.bind(
      this
    );
    this.handleAreaChangeViaTextInput = this.handleAreaChangeViaTextInput.bind(
      this
    );
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

  handleAreaChangeViaRangeInput(value) {
    this.setState({ area: value });
  }

  handleAreaChangeViaTextInput(event) {
    const { value } = event.target;
    const valid = /^([0-9]{0,4})$/.test(value) && !value.startsWith('0');
    if (valid) this.setState({ area: value });
  }

  render() {
    return (
      <Wrapper>
        <ControlsWraper>
          <TextInput
            id="CalculatorTextInput"
            onChange={this.handleAreaChangeViaTextInput}
            value={this.state.area}
          />
          <Label htmlFor="CalculatorTextInput">m2</Label>
          <StyledRangeInputWithPadding
            min={areaRange.min}
            max={areaRange.max}
            onChange={this.handleAreaChangeViaRangeInput}
            value={Number(this.state.area)}
            tooltip={false}
          />
        </ControlsWraper>
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

const Result = ({ range, lang }) => {
  const noServicesSelected = range.min === 0 || range.max === 0;
  if (noServicesSelected) return <p>{textIn(lang).selectServices}</p>;
  return (
    <React.Fragment>
      <h3>{textIn(lang).calculationResult}</h3>
      <p>
        min: {formatCurrency(range.min)}, max: {formatCurrency(range.max)}
      </p>
    </React.Fragment>
  );
};

export default Calculator;
