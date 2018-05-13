import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || 'palegreen'};
`;

Bar.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node
};

export default Bar;
