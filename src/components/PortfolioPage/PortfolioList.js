import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'PortfolioList_active';

const Item = styled(NavLink).attrs({ activeClassName })`
  display: block;
  padding-left: 0;
  padding-right: 2rem;
  transition: padding 1s ease 0s;
  margin: 0.5rem 0;
  color: rgb(220, 220, 220);

  &:hover {
    text-decoration: none;
    color: rgb(240, 240, 240);
  }

  &.${activeClassName} {
    padding-left: 2rem;
    padding-right: 0;
    transition: padding 0.7s ease 0s;
    color: rgb(240, 240, 240);
  }
`;

export default ({ titles, animationStage }) => {
  const titleStyles = titles.map((_, i, { length }) => ({
    transition:
      animationStage === 'entered'
        ? `transform 1s ease-out ${i / 4}s`
        : `transform 1s ease-out ${(length - 1 - i) / 4}s, opacity 1s`,
    opacity: animationStage === 'entered' ? 1 : 0,
    transform: `translateX(${animationStage === 'entered' ? '0px' : '-300px'})`
  }));

  const headerStyle = {
    transition: `opacity 1s`,
    opacity: animationStage === 'entered' ? 1 : 0
  };

  return (
    <div>
      <h1 style={headerStyle}>Наши работы</h1>
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
