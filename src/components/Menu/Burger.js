import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slice = styled.div`
  height: 15%;
  background: ${props => props.color || 'black'};
  border-radius: 2px;
  position: absolute;
  width: 100%;
  transition: 0.25s ease-out;
  transform-origin: center center;
`;

const Burger = styled.div.attrs({
  children: props => [
    <Slice key={1} color={props.color} />,
    <Slice key={2} color={props.color} />
  ]
})`
  width: ${props => props.width || '3rem'};
  height: ${props => props.height || '2.5rem'};
  position: relative;
  cursor: pointer;
  display: ${props => (props.displayed ? 'block' : 'none')};

  ${Slice}:first-child {
    top: ${props => (props.isOpen ? '50%' : '20%')};
    transform: ${props =>
      props.isOpen ? 'translateY(-50%) rotate(45deg)' : null};
  }

  ${Slice}:last-child {
    bottom: ${props => (props.isOpen ? '50%' : '20%')};
    transform-origin: center center;
    transform: ${props =>
      props.isOpen ? 'translateY(50%) rotate(-45deg)' : null};
  }
`;

Burger.propTypes = {
  displayed: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string
};

export default Burger;
