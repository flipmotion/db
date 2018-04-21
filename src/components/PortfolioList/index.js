import React from 'react';
// import { Link } from 'react-router-dom';
import './index.css';

class PortfolioList extends React.Component {
  render() {
    return (
      <div>
        <h1>Наши работы</h1>
        <ul>
          {this.props.titles.map((name, index) => {
            // https://github.com/facebook/react/issues/5674#issuecomment-165104582
            return (
              <li
                className={
                  index === this.props.current
                    ? 'PortfolioList-Item_current'
                    : 'PortfolioList-Item'
                }
                k={index}
                key={index}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PortfolioList;
