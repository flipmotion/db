import React from 'react';
import './index.css';

import { Redirect, Route } from 'react-router-dom';

import PortfolioList from '../PortfolioList';
import CameraRoll from '../CameraRoll';
import PortfolioDescription from '../PortfolioDescription';

//

class Portfolio extends React.Component {
  render() {
    const { titles, images, descriptions, current } = this.props;

    return (
      // sub-routing inside /portfolio: /portflio#1, /portflio##2 etc.

      <div className="Portfolio">
        <div className="Portfolio-ListArea">
          <PortfolioList titles={titles} current={current} />
        </div>
        <div className="Portfolio-RollArea">
          <CameraRoll images={images} current={current} />
        </div>
        <div className="Portfolio-DescriptionArea">
          <PortfolioDescription descriptions={descriptions} current={current} />
        </div>
      </div>
    );
  }
}

// This is a wrapper component that extracts pointer to current portfolio item from hash
// and passes it to inner component
// a number in hash starts from 1, the corresponding current starts from 0,
// so /portfolio#1 means portfolio[0]
const PortfolioPage = props => {
  const { portfolio } = props;
  const titles = portfolio.map(el => el.title);
  const images = portfolio.map(el => el.images[0]);
  const descriptions = portfolio.map(el => el.description);
  const count = portfolio.count;

  return (
    <React.Fragment>
      <Route exact path="/portfolio">
        <Redirect to="/portfolio#1" />
      </Route>

      <Route
        render={({ _, location }) => {
          const currentFromHash = parseInt(location.hash.substring(1), 10) - 1;
          // point to first element if hash is weird
          let current =
            isNaN(currentFromHash) || currentFromHash < 0 ? 0 : currentFromHash;
          return (
            <Portfolio
              current={current}
              titles={titles}
              images={images}
              descriptions={descriptions}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default PortfolioPage;
