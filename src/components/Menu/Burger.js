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
    <Slice key={2} color={props.color} />,
    <Slice key={3} color={props.color} />
  ]
})`
  width: ${props => props.width || '3.6rem'};
  height: ${props => props.height || '3rem'};
  position: relative;
  background-color: orange;
  cursor: pointer;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  ${Slice}:first-child {
    top: ${props => (props.isOpen ? '50%' : 0)};
    transform: ${props =>
      props.isOpen ? 'translateY(-50%) rotate(45deg)' : null};
  }

  ${Slice}:nth-child(2) {
    width: ${props => (props.isOpen ? '0%' : '90%')};
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${props => (props.isOpen ? '50%' : '10%')};
  }

  ${Slice}:last-child {
    bottom: ${props => (props.isOpen ? '50%' : 0)};
    transform-origin: center center;
    transform: ${props =>
      props.isOpen ? 'translateY(50%) rotate(-45deg)' : null};
  }
`;

// Just to align menu items in the center
export const InvisibleBurger = props => <Burger {...props} visible={false} />;

export default Burger;
