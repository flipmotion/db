import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transition: opacity 1s;
`;

const Item = styled.div`
  padding-left: ${props => (props.active ? '2rem' : '0rem')};
  padding-right: ${props => (props.active ? '0rem' : '2rem')};
  /* transition is overridden completely in inline styles */
  /* so I had to add padding transition there */
  margin: 0.5rem 0;
  color: ${props =>
    props.active ? 'rgb(240, 240, 240)' : 'rgb(200, 200, 200)'};
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: rgb(240, 240, 240);
  }
`;

const PortfolioList = ({ titles, current, animationStage, setCurrent }) => {
  // This is the main animation function. In this particular case we don't just
  // animate a single instance, we animate an array where animation on every other element
  // depends on the previous. We also need array length to execute reverse animation.
  function inlineStylePer(animationStage, index, arrLength) {
    if (animationStage === 'entered')
      return {
        transform: `translateX(0px)`,
        opacity: 1,
        transition: `padding 1s, transform 1s ease-out ${index / 4}s`
      };
    return {
      transform: `translateX(-300px)`,
      opacity: 1,
      transition: `padding 1s, transform 1s ease-out ${(arrLength - 1 - index) /
        4}s, opacity 1s`
    };
  }

  return (
    <div>
      <H1 animationStage={animationStage}>Наши работы</H1>
      {titles.map((name, index, { length }) => (
        <Item
          style={inlineStylePer(animationStage, index, length)}
          key={index}
          onClick={() => setCurrent(index)}
          active={current === index}
        >
          {name}
        </Item>
      ))}
    </div>
  );
};

export default PortfolioList;
