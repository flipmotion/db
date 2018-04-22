import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class PortfolioList extends React.Component {
  render() {
    return (
      <div>
        <h1>Наши работы</h1>
        {this.props.titles.map((name, index) => (
          <NavLink
            key={index}
            to={'/portfolio' + (index + 1).toString()}
            className="PortfolioList-Item"
            activeClassName="PortfolioList-Item_selected"
          >
            {name}
          </NavLink>
        ))}
      </div>
    );
  }
}

export default PortfolioList;
