import React from 'react';
import styled from 'styled-components';

const Slice = styled.div`
  height: 18%;
  background: ${props => props.color || 'black'};
  border-radius: 2px;
  position: absolute;
  width: 100%;
  transition: 0.25s ease-in-out;
  transform-origin: center center;
`;

const Burger = styled.div.attrs({
  children: props => [
    <Slice key={1} color={props.color} />,
    <Slice key={2} color={props.color} />
  ]
})`
  width: ${props => props.width || '3.6rem'};
  height: ${props => props.height || '3rem'};
  position: relative;
  background-color: orange;
  cursor: pointer;
  display: ${props => (props.absent ? 'none' : 'block')};

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

export default Burger;
