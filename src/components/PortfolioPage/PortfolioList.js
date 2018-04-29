import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transition: opacity 1s;
`;

// A styled NavLink
const activeClassName = 'PortfolioList_active';
const Item = styled(NavLink).attrs({ activeClassName })`
  display: block;
  padding-left: 0;
  padding-right: 2rem;
  /* transition is overridden completely in inline styles */
  /* so I had to add padding transition there */
  margin: 0.5rem 0;
  color: rgb(220, 220, 220);

  &:hover {
    text-decoration: none;
    color: rgb(240, 240, 240);
  }

  &.${activeClassName} {
    padding-left: 2rem;
    padding-right: 0;
    /* transition is overridden completely in inline styles */
    /* so I had to add padding transition there */
    color: rgb(240, 240, 240);
  }
`;

const PortfolioList = ({ titles, animationStage }) => {
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
          to={'/portfolio#' + (index + 1).toString()}
          isActive={(_, location) =>
            location.hash === '#' + (index + 1).toString()
          }
        >
          {name}
        </Item>
      ))}
    </div>
  );
};

export default PortfolioList;
