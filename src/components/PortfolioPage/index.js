import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Portfolio from './Portfolio';

// This is a wrapper component that extracts pointer to current portfolio item from hash
// and passes it to inner component
// a number in hash starts from 1, the corresponding current starts from 0,
// so /portfolio#1 means portfolio[0]
const PortfolioPage = ({ portfolio, animationStage }) => {
  const titles = portfolio.map(el => el.title);
  const images = portfolio.map(el => el.images[0]);
  const descriptions = portfolio.map(el => el.description);

  return (
    <React.Fragment>
      {/*       <Route exact path="/portfolio">
        <Redirect to="/portfolio#1" />
      </Route> */}

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
              animationStage={animationStage}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default PortfolioPage;
