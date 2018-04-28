import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const H1 = styled.h1`
  opacity: ${props => (props.animationStage === 'entered' ? 1 : 0)};
  transition: opacity 1s;
`;

export default ({ titles, animationStage }) => {
  const titleStyles = titles.map((_, i, { length }) => ({
    transition:
      animationStage === 'entered'
        ? `padding 1s, transform 1s ease-out ${i / 4}s`
        : `padding 1s, transform 1s ease-out ${(length - 1 - i) /
            4}s, opacity 1s`,
    opacity: animationStage === 'entered' ? 1 : 0,
    transform: `translateX(${animationStage === 'entered' ? '0px' : '-300px'})`
  }));

  return (
    <div>
      <H1 animationStage={animationStage}>Наши работы</H1>
      {titles.map((name, index) => (
        <Item
          style={titleStyles[index]}
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
