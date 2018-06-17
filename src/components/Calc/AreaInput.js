import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RangeInput from './RangeInput/index';
import { area } from '../../content/calculator';

// "private" component, a part of AreaInput
const TextInput = styled.input.attrs({ type: 'text' })`
  width: 4em;
  flex: none;
  font-size: 1.5rem;
  text-align: center;
`;

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

RangeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number
};

// m2 text
const Label = styled.label`
  padding: 0.5em;
  display: flex;
  align-items: center;
`;

function isValidTextInput(value) {
  return (
    /^([0-9]{0,4})$/.test(value) &&
    !value.startsWith('0') &&
    Number(value) <= area.max
  );
}

const AreaInput = props => (
  <div>
    <TextInput
      id="CalculatorTextInput"
      value={props.value}
      onChange={event =>
        isValidTextInput(event.target.value) &&
        props.onChange(event.target.value)
      }
    />
    <Label htmlFor="CalculatorTextInput">m2</Label>
    <RangeInput
      min={area.min}
      max={area.max}
      onChange={props.onChange}
      value={Number(props.value)}
      tooltip={false}
    />
  </div>
);

AreaInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default AreaInput;
