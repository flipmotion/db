import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'PortfolioList_active';

const Item = styled(NavLink).attrs({ activeClassName })`
  display: block;
  padding-right: 2rem;
  transition: padding 1s ease 0s;
  margin: 0.5rem 0;

  &:hover {
    text-decoration: none;
  }

  &.${activeClassName} {
    padding-left: 2rem;
    padding-right: 0;
    transition: padding 0.7s ease 0s;
  }
`;

class PortfolioList extends React.Component {
  render() {
    return (
      <div>
        <h1>Наши работы</h1>
        {this.props.titles.map((name, index) => (
          <Item
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
  }
}

export default PortfolioList;
