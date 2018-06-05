import React from 'react';
import styled from 'styled-components';

const RangeInput = styled(props => <input {...props} type="range" />)`
  flex: auto;
  font-size: 1.5rem;
  text-align: center;
  padding: 2em;
  box-sizing: border-box;
`;

export default RangeInput;
