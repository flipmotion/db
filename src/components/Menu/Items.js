import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${props => (props.isOverflowed ? 'column' : 'row')};
  min-height: ${props => (props.isOverflowed ? '100vh' : 'auto')};
  width: 100%;
  text-align: center;
  transform: translateY(
    ${props => (props.mobile && !props.isOpen ? '100vh' : '0vh')}
  );
  transition: transform 0.85s;
`;

Items.propTypes = {
  isOverflowed: PropTypes.bool,
  children: PropTypes.node
};

export default Items;
