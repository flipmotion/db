import React from 'react';
import styled from 'styled-components';

import { Redirect, Route } from 'react-router-dom';

import PortfolioList from './PortfolioList';
import CameraRoll from './CameraRoll';
import PortfolioDescription from './PortfolioDescription';

const ListArea = styled.div`
  flex: 20;
  animation: all 1s;
  align-self: center;
`;

const RollArea = styled.div`
  flex: 50;
  align-self: center;
  width: 10%;
  border: 2px solid red;

  /* otherwise as soon as flex item
  can't be less the its contents by default, it's size is
  bigger and child % sizes are screwed up */
  min-height: 0;

  /* for uniformity all kids can expect their parents are flex
  unless needed otherwise */
  display: flex;
`;

const DescriptionArea = styled.div`
  flex: 30;
  align-self: center;
`;

class Portfolio extends React.Component {
  render() {
    const {
      titles,
      images,
      descriptions,
      current,
      animationState
    } = this.props;

    return (
      // sub-routing inside /portfolio: /portflio#1, /portflio##2 etc.
      <React.Fragment>
        <ListArea>
          <PortfolioList titles={titles} current={current} />
        </ListArea>
        <RollArea>
          <CameraRoll images={images} current={current} />
        </RollArea>
        <DescriptionArea>
          <PortfolioDescription descriptions={descriptions} current={current} />
        </DescriptionArea>
      </React.Fragment>
    );
  }
}

// This is a wrapper component that extracts pointer to current portfolio item from hash
// and passes it to inner component
// a number in hash starts from 1, the corresponding current starts from 0,
// so /portfolio#1 means portfolio[0]
const PortfolioPage = props => {
  const { portfolio, animationState } = props;
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
              animationState={animationState}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default PortfolioPage;
